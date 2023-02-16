import {
  Box,
  Button,
  Grid,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { take } from "lodash";
import React from "react";
import { AppartamentoImg } from "~/types";

interface Props {
  immagini: AppartamentoImg[];
  setOpen: Function;
}

const GalleriaPreview: React.FC<Props> = ({ immagini, setOpen }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  let baseUrl = "";
  let array = take(immagini, 3);

  if (import.meta.env.MODE === "development") {
    baseUrl = "http://localhost:8080";
  }
  return (
    <Box>
      {matches ? (
        <img src={baseUrl + immagini[0].immagine} width="100%" />
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {array.map((immagine, i) => {
            return (
              <Grid key={immagine.id} item xs={12} sm={4}>
                <img
                  src={baseUrl + immagine.immagine}
                  style={{ width: "100%" }}
                />
              </Grid>
            );
          })}
        </Grid>
      )}

      <Box sx={{ textAlign: "right" }}>
        <Button onClick={() => setOpen(true)}>Mostra tutte le foto</Button>
      </Box>
    </Box>
  );
};

export default GalleriaPreview;
