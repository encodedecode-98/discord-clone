import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { validateMail } from "../../shared/utils/validators";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Typography  from "@mui/material/Typography";
import { DialogTitle } from "@mui/material";

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInv,
}: any) => {
  const [mail, setMail] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleSendInvitation = () => {
    // send Friend Request to server
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(true);
  }, [mail, setIsFormValid]);

  return <div>
    <Dialog
    open = {isDialogOpen}
    onClose = {
        handleCloseDialog
    }

    
    >
        <DialogTitle
        
        
        > 
            <Typography>Invite a Friend</Typography>
        </DialogTitle>

    </Dialog>
  </div>;
};

export default AddFriendDialog;
