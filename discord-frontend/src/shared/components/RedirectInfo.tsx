import {styled} from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    gap : '10px'
})

const RedirectText = styled('span')({
 color:'#00AFF4',
 fontWeight: 500,
 cursor : 'pointer'
})

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}: any) => {
  return (
    <Container>
        <Typography
          sx={{
            color: "#72767d",
          }}
          style={additionalStyles ? additionalStyles : {}}
          variant="subtitle2"
        >
          {text}
        </Typography>
        <RedirectText onClick ={redirectHandler}> 
        {redirectText}
        </RedirectText>
    </Container>
  );
};

export default RedirectInfo;
