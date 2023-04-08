import React from "react";
import { styled } from "@mui/system";
import DUMMY_LIST from "./DATA.json";
import FriendsListItem from "./FriendsListItem";
import Typography from "@mui/material/Typography";
const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = () => {
  return (
    <MainContainer>
      {DUMMY_LIST.map((f,idx) => (
        <div key = {idx}>
          <FriendsListItem
            id={f.id}
            username={f.username}
            isOnline={f.isOnline}
          />
        </div>
      ))}
    </MainContainer>
  );
};

export default FriendsList;
