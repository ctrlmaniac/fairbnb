import React from "react";
import Navbar from "./Navbar";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <>
      <Navbar />

      <Box mt={12} mb={16} mx={2}>
        <Outlet />
      </Box>
    </>
  );
};

export default Root;
