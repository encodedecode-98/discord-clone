import React from 'react'
import {styled } from '@mui/system';
import DummyInvitationList from './DummyInvitations.json'
import { element } from 'prop-types';
import PendingInvitationListItem from '../PendingInvitationListItem/PendingInvitationListItem';
const MainContainer  = styled('div')({
   width: '100%', 
   height : '22%',
   display :'flex',
   flexDirection  : 'column', 
   alignItems : 'center' ,
   overflow : "auto"
})


const PendingInvitationList = () => {
  return (
    <MainContainer>{
      DummyInvitationList.map((element)=>{
        return (  
          <>
          <PendingInvitationListItem 
            id = {element.id}
            username = {element.senderId.username}
            mail = {element.senderId.mail}
  
          />

          </>
        )
      })
      }</MainContainer>
  )
}

export default PendingInvitationList