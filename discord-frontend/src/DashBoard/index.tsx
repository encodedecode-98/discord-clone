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

import { getActions } from '../actions/alertActions'
const Wrapper  = styled('div')({
  width: '100vw',
  height : '100vh',
  display: 'flex'
})


const Dashboard = ({setUserDetails} : any) => { 
 const navigate = useNavigate();


  useEffect(()=>{
    const userDetails = localStorage.getItem('userDetails');
    if(!userDetails) {
      navigate('/login');
      // or window.location.pathname = '/login';
      logout();
    }
    else{
      setUserDetails(JSON.parse(userDetails))
    }

  },[])
  return (
  <Wrapper>
     <SideBar/>
     <FriendsSideBar/>
     <Messenger/>
     <AppBar/>
  </Wrapper>
  )
}

const mapActionToProps = (dispatch : typeof store.dispatch)=>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionToProps) (Dashboard)