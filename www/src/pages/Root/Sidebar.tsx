import React from "react";
import { Box, Button, Drawer, Typography } from "@mui/material";
import { useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";

interface Props {
  open: boolean;
  onClose: Function;
}

const Sidebar: React.FC<Props> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const { dettagli: account } = useAppSelector((state) => state.account);

  const handleNavigate = (to: string) => {
    onClose(false);
    navigate(to);
  };

  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <Box sx={{ width: 250, position: "relative", overflow: "auto" }} p={2}>
        {isEmpty(account) ? (
          <>
            <Button
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              onClick={() => handleNavigate("/signin")}
            >
              accedi
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              onClick={() => handleNavigate("/signup")}
            >
              registrati
            </Button>
          </>
        ) : (
          <>
            <Typography gutterBottom>Benvenuto {account.fname}</Typography>

            <Button variant="contained" fullWidth>
              affitta
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
