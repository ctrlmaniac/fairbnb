import { Container, Typography } from "@mui/material";
import React from "react";
import { Splash } from "~/components";
import notfound from "./notfound.gif";

const NotFound: React.FC = () => {
  return (
    <Splash>
      <Container maxWidth="xs">
        <img src={notfound} alt="pagina non trovata" width="100%" />
        <Typography variant="h6">Pagina non trovata!</Typography>
      </Container>
    </Splash>
  );
};

export default NotFound;
