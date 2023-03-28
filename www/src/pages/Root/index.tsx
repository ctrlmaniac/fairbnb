import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { IconUser } from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { Outlet } from "react-router-dom";
import theme from "~/theme";
import Registrati from "./Registrati";

const Root: React.FC = () => {
  const token = window.localStorage.getItem("token");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openRegistrati, setOpenRegistrati] = React.useState(false);

  const handleAccountClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isEmpty(token)) {
      setAnchorEl(event.currentTarget);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="inherit"
        sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar>
          <Typography variant="h6">fairbnb</Typography>
          <Box sx={{ flexGrow: 1 }} mx={3}>
            <TextField fullWidth size="small" label="cerca" />
          </Box>
          <IconButton color="primary" onClick={handleAccountClick}>
            <IconUser />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        id="login-register"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem>Accedi</MenuItem>
        <MenuItem
          onClick={() => {
            setOpenRegistrati(true);
            handleMenuClose();
          }}
        >
          Registrati
        </MenuItem>
      </Menu>

      <Registrati open={openRegistrati} handleOpen={setOpenRegistrati} />

      <Toolbar />
      <Box mt={3} mx={3}>
        <Outlet />
      </Box>
    </>
  );
};

export default Root;
