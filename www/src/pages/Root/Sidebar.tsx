import { Drawer } from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  onClose: Function;
}

const Sidebar: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      drawer
    </Drawer>
  );
};

export default Sidebar;
