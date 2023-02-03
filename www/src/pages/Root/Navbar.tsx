import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { IconUser } from "@tabler/icons-react";
import { grey } from "@mui/material/colors";

interface Props {
  handleSidebarOpen: Function;
}

const Navbar: React.FC<Props> = ({ handleSidebarOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        elevation={0}
        color="inherit"
        position="fixed"
        sx={{ borderBottom: "1px solid", borderColor: grey[400] }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer", flexGrow: 1 }}
            color="primary"
          >
            fairbnb
          </Typography>
          <IconButton
            color="info"
            sx={{ border: 1 }}
            onClick={() => handleSidebarOpen(true)}
          >
            <IconUser />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
