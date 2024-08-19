const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const http = require("http")
const socketIo = require('socket.io')
const nodemailer = require('nodemailer');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup"
})
db.connect(err =>{
    if(err){
        console.error("lỗi kết nối đến cơ sở dữ liệu:", err);       
    } else {
        console.log("kết nối thành công")
    }
})
app.post('/signup',(req,res)=>{
    const sql = "INSERT INTO login (`email`,`phone`,`password`) VALUES (?)";
    const values = [
        req.body.email,
        req.body.phone,
        req.body.password
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.post('/LogIn',(req,res)=>{
    const sql = "SELECT * FROM login WHERE `email` = ? ";
    db.query(sql,[req.body.email],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        } else {
            return res.json("Fail");
        }  
    })
});
app.post('/TypePass',(req,res)=>{
    const sql = "SELECT * FROM login WHERE `password` = ? AND `email` = ?  ";
    db.query(sql,[req.body.password,req.body.email],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        } else {  
            return res.json("Fail");
        }  
    })
})
const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "sntp.gmail.com",
        port: 587,
        auth: {
            user: 'nbien280103@gmail.com', 
            pass: 'jocd cfww dnag godd' 
        }
    });
    app.post('/GuiMail', (req, res) => {
        const randomCode = Math.floor(1000 + Math.random() * 9000);
        const mailOptions = {
            from: 'ntb280103@gmail.com',
            to: 'ntb280103@gmail.com',
            subject: 'Password Reset Link',
            text: `Here is your password reset link: ${randomCode}`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error:", error);
                return res.json("Fail");
            } else {
                console.log("Email sent: " + info.response);
                return res.json({ success: true, randomCode });
            }
        });
    });
    app.post('/NewPass',(req,res)=>{
        var sql  = 'UPDATE login SET password = ? WHERE email = ?';
    db.query(sql, [req.body.password, req.body.email], (err, data) => {
    if(err){
        console.error("Error:", err);
        return res.status(500).json("Error updating password");
    }
    if( data.changedRows > 0 ){
        return res.json( {result: "Success"});
    } else {  
        console.log(data.changedRows)
        return res.json( {result: "Fail"});
    }  
});
});
server.on('connection',(socket)=>{
    console.log("một người dung kết nối");
    socket.on('chat message', (msg) =>{
        io.emit('chat message', msg);
    })
    socket.on('disconnect',()=>{
        console.log("một người dùng đã ngắt kết nối")
    })
})
app.listen(8081,()=>{
    console.log("listening");
})

