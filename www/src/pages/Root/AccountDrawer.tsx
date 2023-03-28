import { Box, Button, Drawer } from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const AccountDrawer: React.FC<Props> = ({ open, handleOpen }) => {
  const handleLogout = () => {
    handleOpen(false);
    window.localStorage.removeItem("token");
  };

  return (
    <Drawer open={open} onClose={() => handleOpen(false)} anchor="right">
      <Box sx={{ width: "250px" }}>
        <Button
          fullWidth
          variant="contained"
          color="error"
          onClick={handleLogout}
        >
          esci
        </Button>
      </Box>
    </Drawer>
  );
};

export default AccountDrawer;
