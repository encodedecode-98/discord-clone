import React from 'react'
import Button from '@mui/material/Button'
import Avatar from '../../shared/components/Avatar';
import { Typography } from '@mui/material';
import OnlineIndicator from './OnlineIndicator';


const FriendsListItem = ({id , username , isOnline} : {
    id : number; 
    username: string ; 
    isOnline: boolean;
}) => {
  return (
    <Button
    style ={{
        width: "100%",
        height : "42px",
        marginTop : "10px",
        display : "flex",
        alignItems : "center",
        justifyContent : "flex-start",
        textTransform : "none", 
        color : "black",
        position: "relative"
    }}
    >
        <Avatar large = {false } username={username}/>

        <Typography
        style ={{
            marginLeft : "7px",
            fontWeight: 700 ,
            color : "#8e9297"
        }}
        >
            {username}
        </Typography>
        {
            isOnline ? <OnlineIndicator/> : ""
        }
    </Button>
  )
}

export default FriendsListItem