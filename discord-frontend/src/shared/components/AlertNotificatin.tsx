import React from 'react'
import SnackBar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { getActions } from '../../actions/alertActions'
import store from '../../store/store'
import { connect } from 'react-redux'

const AlertNotification = ({showAlertMessage , closeAlertMessage , alertMessageContent} : any ) => {
  return (
    <div>
        <SnackBar
        anchorOrigin={{
            vertical : 'top',
            horizontal : 'center'
        }}
        open= {showAlertMessage}
        onClose ={closeAlertMessage}
        autoHideDuration ={6000}

        >
            <Alert severity="info"> Alert Message</Alert>
        </SnackBar>



    </div>
  )
}

interface IAlert{
    alert : Object
}
const mapStoreStateToProp = ({alert} : IAlert) =>{
    return {
        ... alert, 
    }
}


const mapActionsToProps = (dispatch : typeof store.dispatch)=>{
    return {
        ...getActions(dispatch)
    }

}


export default connect(mapStoreStateToProp,mapActionsToProps)(AlertNotification) ;