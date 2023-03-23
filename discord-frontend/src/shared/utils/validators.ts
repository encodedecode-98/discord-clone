interface IValidateLoginForm{
    mail : string ; 
    password  : string; 
   }
export const validateLoginForm  = ({mail  , password} : IValidateLoginForm) =>{
    // const isMailValid = validateMail(mail)
    // const isPasswordValid = validatePassword(password);

    return validateMail(mail) && validatePassword(password);
}
interface IValidateRegisterForm{
 mail : string ; 
 password  : string; 
 username : string; 
}

export const validateRegisterForm = ({mail , password ,username} : IValidateRegisterForm  ) => {
  return validateMail(mail) && validatePassword(password) && validateUserName(username);
}

const validateUserName = (username: string ) =>{
    return username.length > 2 && username.length < 12;
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