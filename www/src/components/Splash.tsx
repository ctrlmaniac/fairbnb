import React from "react";
import { Box } from "@mui/material";

interface Props {
  children: JSX.Element | null;
}

const Splash: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
      }}
    >
      {props.children || null}
    </Box>
  );
};

export default Splash;
