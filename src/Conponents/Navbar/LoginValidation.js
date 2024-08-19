function Validation(values){
    let error = {}        
    const email_pattern = /\S+@\S+\.\S+/
    const phone_pattern = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/
if (values.email === ""){
    error.email = "email should not be empty"
}
else if(!email_pattern.test(values.email)){
    error.email = "email không đúng định dạng"
}
else{
    error.email =""
}
if(values.password === ""){
    error.password = "password should not be empty"
}
else{
    error.password =""
}
if(values.phone === ""){
    error.phone = "password should not be empty"
}
else{
    error.phone =""
}
return error;
}
export default Validation;