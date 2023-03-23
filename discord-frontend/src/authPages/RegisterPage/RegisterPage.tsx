import React, { useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { Typography } from "@mui/material";
const RegisterPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [username, setUserName] = useState("");
  const handleLogin = () => {
    console.log("login in");
  };

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
    <RegisterPageFooter/>
    </AuthBox>

  );
};

export default RegisterPage;
