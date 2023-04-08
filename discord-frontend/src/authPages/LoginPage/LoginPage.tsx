import React, { useState , useEffect} from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../../shared/utils/validators";
import {connect} from 'react-redux';
import { getActions } from "../../actions/authAction";
import store from "../../store/store";
import { useNavigate } from "react-router-dom";

const LoginPage = ({login} : any ) => {

  const navigate = useNavigate()
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid , setIsFormValid] = useState(false);

  const handleLogin = () =>{
    if(!isFormValid) return;
    console.log('login in')
    console.log("mail" + mail)
    console.log("password" +password);
    const userDetails = { mail , password}
    login(userDetails , navigate)
  }
  useEffect(()=>{
    setIsFormValid(validateLoginForm({mail,password}))
  },[mail ,  password, setIsFormValid])

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs mail={mail} setMail ={setMail} password ={password} setPassword = {setPassword} />
      {/* login page footer checks form validity and handles Login */}
      <LoginPageFooter isFormValid={isFormValid}
        handleLogin= {handleLogin}
      />
    </AuthBox>
  );
};


const mapActionToProps = (dispatch: typeof store.dispatch) =>{
  return {
    ...getActions(dispatch)
  }
}

export default connect (null ,mapActionToProps)(LoginPage)
