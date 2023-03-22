import React,{useState} from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel'
const LoginPageInputs = () => {
const [mail  , setMail] = useState('');
  return (
<div>
    <InputWithLabel
    value 
    setValue 
    label = "E-mail"
    type = "text"
    placeholder = "Enter E-mail Address "
    ></InputWithLabel>
</div>
  )
}

export default LoginPageInputs