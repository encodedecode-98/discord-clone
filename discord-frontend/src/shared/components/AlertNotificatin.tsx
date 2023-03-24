import React from 'react'
import SnackBar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
const AlertNotification = () => {
  return (
    <div>
        <SnackBar
        anchorOrigin={{
            vertical : 'top',
            horizontal : 'center'
        }}
        open 
        onClose ={()=>{}}
        autoHideDuration ={6000}

        >
            <Alert severity="info"> Alert Message</Alert>
        </SnackBar>



    </div>
  )
}

export default AlertNotification