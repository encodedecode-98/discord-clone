import React, { useState,useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { Typography } from "@mui/material";
import { validateRegisterForm } from "../../shared/utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../actions/authAction";
import store from "../../store/store";
import {useNavigate} from 'react-router-dom';


const RegisterPage = ({register}: any ) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [username, setUserName] = useState("");
  const handleRegister= () => {
    console.log("Successfully registered");
    const userDetails ={
      mail , 
      username , 
      password
    }
    register(userDetails , navigate);
  };

  useEffect(()=>{
    setIsFormValid(validateRegisterForm({mail,password ,username}))
  },[mail ,  password, username , setIsFormValid])


  return (
    <AuthBox>
      <Typography
        variant="h5"
        sx={{
          color: "white",
        }}
      >
        Register Page
      </Typography>
      <RegisterPageInputs
        mail = {mail}
        setMail = {setMail}
        password = {password}
        setPassword = {setPassword}
        username = {username}
        setUserName = {setUserName}
      />
    <RegisterPageFooter isFormValid={isFormValid} handleRegister ={handleRegister}/>
    </AuthBox>

  );
};
const mapActionToProps = (dispatch:any) =>{
  return {
    ...getActions(dispatch)
  }
}

export default connect (null ,mapActionToProps)(RegisterPage)
