import React from "react";
import { Box, Button, Drawer, Typography } from "@mui/material";
import { useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";

interface Props {
  open: boolean;
  onClose: Function;
}

const NotLoggedIn: React.FC = () => {
  return (
    <>
      <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
        accedi o registrati
      </Button>
    </>
  );
};

const Sidebar: React.FC<Props> = ({ open, onClose }) => {
  const { dettagli: account } = useAppSelector((state) => state.account);

  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <Box sx={{ width: 250, position: "relative", overflow: "auto" }} p={2}>
        {isEmpty(account) && <NotLoggedIn />}
        <Button variant="contained" fullWidth>
          affitta
        </Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
