import React,{useState} from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import AddFriendDialog from "./AddFriendDialog";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};

const AddFriendButton = () => {
  const handleOpenAddFriendDialog = () => {
      setIsDialogOpen(true);

  };
  const [isDialogOpen , setIsDialogOpen] = useState<boolean>(false)


  const handleCloseAddFriendDialog = ()=>{
    setIsDialogOpen(false);
  }
  return (
    <>
    
    <CustomPrimaryButton
      label="Add Friend"
      additionalStyles={additionalStyles}
      onClick={handleOpenAddFriendDialog}
    />

    <AddFriendDialog
    isDialogOpen = {isDialogOpen}
    closeDialogHandler = {handleCloseAddFriendDialog}
    />
   
    </>

  );
};

export default AddFriendButton;
