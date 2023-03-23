import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo'
import {useNavigate} from 'react-router-dom'
import {Tooltip} from '@mui/material'
const getFormNotValidMessage = ( )=>{
return "Enter Correct email address and password should contina between 6 and 12 characters"
}
const getFormValidMessage = ()=>{
    return "Press to log in"
}

const LoginPageFooter = ({isFormValid , handleLogin}:any) => {
    
    const navigate = useNavigate();

    const handlePushToRegisterPage = () =>{
        navigate('/register')
    }

    return (
    <>
    <Tooltip
    title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
    >
        <div>

        <CustomPrimaryButton
        label ="log in"
        additionalStyles = {{
            marginTop : '30px'
        }}
        onClick ={handleLogin}
        />
        </div>
    
    </Tooltip>
    <div>
        <RedirectInfo
        text = "Need an Account ? "
        redirectText = "Create an Account"
        additionalStyles ={{marginTop : '5px'}}
        redirectHandler = {handlePushToRegisterPage}
        />    
    </div>
    </>
  )
}

export default LoginPageFooter