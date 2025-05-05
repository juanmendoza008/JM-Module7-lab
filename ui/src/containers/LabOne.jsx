import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../stores/userStore";
import BitcoinRates from "../components/BitcoinRates";

// NAME OF COMPONENT IS A ARROW FUNCTION

const LabOne = () => {
  // VARIABLES/STATE LIVE HERE

  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box>
      <Typography>LabOne</Typography>
      <BitcoinRates />
    </Box>
  );
};

// export function Post() {
//   const { id } = useParams();
//   const post = useData("http://localhost:5173/PageThree/" + id);
// }

export default LabOne;
