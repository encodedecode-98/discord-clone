import React ,{useEffect} from 'react'
import {styled} from '@mui/system'
import {connect} from 'react-redux'
import SideBar from './SideBar/SideBar'
import FriendsSideBar from './FriendsSideBar/FriendsSideBar'
import Messenger from './Messenger/Messenger'
import AppBar from './AppBar/AppBar'
import {useNavigate} from 'react-router-dom'
import { logout } from '../shared/utils/auth'
import store from '../store/store'
import axios from 'axios'

import { getActions } from '../actions/authAction'
import { connectWithSocketServer } from '../realtimeCommunication/SocketConnection'
const Wrapper  = styled('div')({
  width: '100vw',
  height : '100vh',
  display: 'flex'
})
const data = JSON.parse(localStorage.getItem('userDetails') as string);
let reqInstance = axios.create({
  
  headers: {
    Authorization : `Bearer ${data.token}`
    }
  });


const Dashboard = ({setUserDetails} : any) => { 
  console.log(setUserDetails)
 const navigate = useNavigate();
  useEffect(()=>{
    const userDetails = localStorage.getItem('userDetails');
    if(!userDetails) {
      navigate('/login');
      // or window.location.pathname = '/login';
      logout();
    }
    else{
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  },[])

  // useEffect(()=>{
  //   console.log("Inside Valitity Checking Hook")
  //   const validate = reqInstance.get('localhost:3000/api/test').then((response)=>{
  //     console.log(response.data)
  //   })
  //   .catch(err=>console.log(err))
  // })

  return (
  <Wrapper>
     <SideBar/>
     <FriendsSideBar/>
     <Messenger/>
     <AppBar/>
  </Wrapper>
  )
}

const mapActionsToProps = (dispatch :any ) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Dashboard);