import React from "react";
import Navbar from "./Navbar";
import { Box, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Root: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  return (
    <>
      <CssBaseline />
      <Navbar handleSidebarOpen={setSidebarOpen} />
      <Sidebar open={sidebarOpen} onClose={setSidebarOpen} />

      <Box mt={12} mb={16} mx={3}>
        <Outlet />
      </Box>
    </>
  );
};

export default Root;
