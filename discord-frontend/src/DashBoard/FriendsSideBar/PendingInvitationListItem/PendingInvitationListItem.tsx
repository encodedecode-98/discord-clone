import { Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";
import InvitationDecisionButtons from "../InvitationDecisionButtons/InvitationDecisionButtons";
interface IObj {
  id: number;
}
interface IPendingInvitationListItem {
  id: number;
  username: string;
  mail: string;
  acceptFriendInvitation ?: ({ id }: IObj) => void;
  rejectFriendInvitation?: ({ id }: IObj) => void;
}

const PendingInvitationListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitation = (id) => {},
  rejectFriendInvitation = (id) => {},
}: IPendingInvitationListItem) => {
  // set buttons disabled if clicked once

  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    acceptFriendInvitation({
      id,
    });
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonsDisabled(true);
  };
  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            marginLeft : "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius :"10px"
          }}
        >
          <Avatar username={username} large={false}  />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
          >
            {username}
          </Typography>

          <InvitationDecisionButtons
          disabled={buttonsDisabled}
          acceptInviationHandler = {handleAcceptInvitation}
          rejectInvitationHandler = {handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationListItem;
