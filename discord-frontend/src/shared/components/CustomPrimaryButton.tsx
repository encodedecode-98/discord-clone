import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const ButtonContainer = styled("div")({
  display : 'flex',
  width: '100%',
  justifyContent : 'center',
  alignItems : 'center'
});

const CustomPrimaryButton = ({
  label,
  additionalStyles,
  disabled,
  onClick,
}: any) => {
  return (
    <ButtonContainer>

        <Button
          sx={{
            bgcolor: "#5865f2",
            color: "white",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 500,
            width: "100%",
            height: "40px",
            marginBottom : "10px"
          }}
          style={additionalStyles ? additionalStyles : {}}
          disabled={disabled}
          onClick ={onClick }
        >
          {label}
        </Button>
      
    </ButtonContainer>
  );
};

export default CustomPrimaryButton;
