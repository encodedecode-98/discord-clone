import React from 'react'
import {styled} from '@mui/system';


const MainContainer = styled('div')({
  position: 'relative',
  flexGrow : 1,
  backgroundColor : "#36393f",
  // backgroundColor: "#593fff",
  marginTop : '48px',
  display : 'flex',
  padding: '10px'
})

const Messenger = () => {
  return (
    <MainContainer>Messenger</MainContainer>
  )
}

export default Messenger