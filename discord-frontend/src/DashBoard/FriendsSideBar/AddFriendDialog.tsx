import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { validateMail } from "../../shared/utils/validators";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle  from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import InputWithLabel from "../../shared/components/InputWithLabel";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInv,
}: any) => {
  const [mail, setMail] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleSendInvitation = () => {
    // send Friend Request to server
    console.log("Friend Request Send to Server")
  };

  const handleCloseDialog = () => {
    console.log('clicked')
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Dialog Title</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Dialog Content</Typography>
            <InputWithLabel
            label ="Mail"
            type ="text"
            value = {mail}
            setValue = {setMail}
            placeholder = "Enter Your Email Address"
            />
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick = {handleSendInvitation}
            disabled = {!isFormValid}
            label = "Send"
            additionalStyles = {{
              marginLeft : "15px",
              marginRight : "15px",
              marginBottom : "10px"
            }}
          >
          </CustomPrimaryButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddFriendDialog;
