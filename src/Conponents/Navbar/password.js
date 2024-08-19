function Validation(values){
    let error = {}
    const email_pattern = /\S+@\S+\.\S+/
if (values.password === ""){
    error.password = "name should not be empty"
}
else{
    error.password =""
}
if (values.email === ""){
    error.email = "email should not be empty"
}
else if(!email_pattern.test(values.email)){
    error.email = "email không đúng định dạng"
}
else{
    error.email =""
}
return error;
}

export default Validation;