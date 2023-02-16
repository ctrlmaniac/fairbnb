import {
  AppBar,
  Box,
  Container,
  Dialog,
  Grid,
  IconButton,
  Toolbar,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { IconX } from "@tabler/icons-react";
import React from "react";
import { AppartamentoImg } from "~/types";

interface Props {
  open: boolean;
  onClose: Function;
  immagini: AppartamentoImg[];
}

const GalleriaFull: React.FC<Props> = ({ open, onClose, immagini }) => {
  let baseUrl = "";

  if (import.meta.env.MODE === "development") {
    baseUrl = "http://localhost:8080";
  }

  return (
    <Dialog fullScreen open={open} onClose={() => onClose(false)}>
      <AppBar
        color="inherit"
        elevation={0}
        position="fixed"
        sx={{ borderBottom: "1px solid", borderColor: grey[400] }}
      >
        <Toolbar>
          <IconButton color="primary" onClick={() => onClose(false)}>
            <IconX />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box mt={12}>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {immagini.map((immagine) => (
              <Grid item xs={12} key={immagine.id}>
                <img src={baseUrl + immagine.immagine} width="100%" />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Dialog>
  );
};

export default GalleriaFull;
