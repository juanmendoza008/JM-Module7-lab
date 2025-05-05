import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// NAME OF COMPONENT IS A ARROW FUNCTION

const PageFour = () => {
  // VARIABLES/STATE LIVE HERE
  const [searchParams] = useSearchParams();
  const searchParamsOfSomething = searchParams.get(id);
  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box>
      <Typography>Page 4</Typography>
      <Typography>{searchParamsOfSomething}</Typography>
    </Box>
  );
};

export default PageFour;
