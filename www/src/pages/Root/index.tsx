import React from "react";
import Navbar from "./Navbar";
import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "~/hooks";
import { default as getAccount } from "~/features/account/get";

const Root: React.FC = () => {
  const dispatch = useAppDispatch();
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(getAccount());
  }, []);

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
