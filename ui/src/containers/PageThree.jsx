import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../stores/userStore";

// NAME OF COMPONENT IS A ARROW FUNCTION

const PageThree = () => {
  // VARIABLES/STATE LIVE HERE
  const { id } = useParams();
  const { currentUser } = useUserContext();
  // FUNCTIONS/EFFECTS LIVE HERE
  const display = () => {
    if (currentUser) {
      return currentUser;
    }
  };

  // RETURN LIVES HERE
  return (
    <Box>
      <Typography>Page 3</Typography>
      <Typography>{id}</Typography>
    </Box>
  );
};

// export function Post() {
//   const { id } = useParams();
//   const post = useData("http://localhost:5173/PageThree/" + id);
// }

export default PageThree;
