import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};

const AddFriendButton = () => {
  const handleOpenAddFriendDialog = () => {};

  return (
    <CustomPrimaryButton
      label="Add Friend"
      additionalStyles={additionalStyles}
      onClick={handleOpenAddFriendDialog}
    />
  );
};

export default AddFriendButton;
