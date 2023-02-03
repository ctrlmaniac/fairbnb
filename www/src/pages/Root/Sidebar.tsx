import React from "react";
import { Box, Button, Drawer } from "@mui/material";

interface Props {
  open: boolean;
  onClose: Function;
}

const Sidebar: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <Box sx={{ width: 250, position: "relative", overflow: "auto" }} p={2}>
        <Button variant="contained" fullWidth>
          affitta
        </Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
