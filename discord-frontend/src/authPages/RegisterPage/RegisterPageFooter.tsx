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

const RegisterPageFooter = ({isFormValid , handleLogin}:any) => {
    
    const navigate = useNavigate();

    const handlePushToLoginPage = () =>{
        navigate('/login')
    }

    return (
    <>
    <Tooltip
    title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
    >
        <div>

        <CustomPrimaryButton
        label ="Register"
        additionalStyles = {{
            marginTop : '30px'
        }}
        onClick ={handleLogin}
        />
        </div>
    
    </Tooltip>
    <div>
        <RedirectInfo
        text = "Already Have An Account ? "
        redirectText = "Login"
        additionalStyles ={{marginTop : '5px'}}
        redirectHandler = {handlePushToLoginPage}
        />    
    </div>
    </>
  )
}

export default RegisterPageFooter