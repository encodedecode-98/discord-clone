export const validateLoginForm  = ({mail  , password} : any) =>{
    // const isMailValid = validateMail(mail)
    // const isPasswordValid = validatePassword(password);

    return validateMail(mail) && validatePassword(password);
}


const validatePassword = (password:any) =>{
    return password.length >  6 && password.length < 12;
}

const validateMail = (mail : string) =>{
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const value =  emailPattern.test(mail);

    console.log("value" +value )
    return value ; 
}