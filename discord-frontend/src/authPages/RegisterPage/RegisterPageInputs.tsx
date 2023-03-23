import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel';
const RegisterPageInputs = (props : any) => {
const {mail, setMail, username , setUserName , password , setPassword} = props;
  return (
    <>
    <InputWithLabel
    value = {mail}
    setValue ={setMail}
    label = "E-mail Address"
    type = "text"
    placeholder = "Enter email address"
    />
    <InputWithLabel
    value = {username}
    setValue ={setUserName}
    label = "UserName"
    type = "text"
    placeholder = "Enter a userName"
    />
    <InputWithLabel
    value = {password}
    setValue ={setPassword}
    label = "Password"
    type = "password"
    placeholder = "Enter a password"
    />

    </>
  )
}

export default RegisterPageInputs