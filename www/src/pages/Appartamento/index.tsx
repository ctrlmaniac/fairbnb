import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { IconStarFilled } from "@tabler/icons-react";
import { isEmpty, take } from "lodash";
import React from "react";
import { useParams } from "react-router-dom";
import { LoadingScreen } from "~/components";
import get from "~/features/appartamenti/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import GalleriaFull from "./GalleriaFull";
import GalleriaPreview from "./GalleriaPreview";

const Appartamento: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { dettagli, getting, getError } = useAppSelector(
    (state) => state.appartamenti
  );

  React.useEffect(() => {
    if (!isEmpty(id)) {
      dispatch(get(id!));
    }
  }, [id]);

  // Galleria
  const [open, setOpen] = React.useState(false);

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (!isEmpty(getError) || isEmpty(dettagli)) {
      return <Typography>Errore</Typography>;
    } else {
      return (
        <>
          <Container>
            <Box mb={4}>
              <Typography>
                <IconStarFilled style={{ verticalAlign: "top" }} />{" "}
                {dettagli.voto} - {dettagli.recensioni.length} recensioni -{" "}
                {dettagli.comune}, {dettagli.nazione}
              </Typography>
            </Box>

            <Box mb={3}>
              <GalleriaPreview immagini={dettagli.immagini} setOpen={setOpen} />
            </Box>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={8}>
                <Box mb={3}>
                  <Typography variant="h6">
                    Host: {dettagli.host.fname}
                  </Typography>
                  <Typography>
                    {dettagli.ospiti} ospiti - {dettagli.numeroCamere} camere -{" "}
                    {dettagli.letti} letti - {dettagli.bagni} bagni
                  </Typography>
                </Box>

                <Box mb={3}>
                  <Typography variant="h6">Dove dormirai</Typography>

                  <Box sx={{ overflowX: "auto" }}>
                    {dettagli.camere.map((camera) => (
                      <Box
                        p={2}
                        key={camera.id}
                        sx={{ display: "inline-block", verticalAlign: "top" }}
                      >
                        <Paper>
                          <Box p={2}>
                            <Typography>
                              <strong>Camera da letto</strong>
                            </Typography>
                            {camera.lettiMatrimoniali > 0 && (
                              <Typography>
                                {camera.lettiMatrimoniali} letti matrimoniali
                              </Typography>
                            )}
                            {camera.lettiSingoli > 0 && (
                              <Typography>
                                {camera.lettiSingoli} letti singoli
                              </Typography>
                            )}
                          </Box>
                        </Paper>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box mb={3}>
                  <Typography variant="h6" gutterBottom>
                    Cosa troverai
                  </Typography>

                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={2}
                  >
                    {dettagli.servizi.map((servizio) => (
                      <Grid item xs={12} sm={6} key={servizio.id}>
                        {servizio.servizio}
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} sx={{ position: "sticky", top: 60 }}>
                <Paper>prenota</Paper>
              </Grid>
            </Grid>

            <Box my={3}>
              <Typography variant="h6" gutterBottom>
                <IconStarFilled style={{ verticalAlign: "center" }} />{" "}
                {dettagli.voto} - {dettagli.recensioni.length} recensioni
              </Typography>

              {take(dettagli.recensioni, 10).map((recensione) => (
                <Box key={recensione.id} mb={2}>
                  <Typography>
                    <strong>{recensione.recensore.fname}</strong>
                  </Typography>
                  <Typography>{recensione.recensione}</Typography>
                </Box>
              ))}
            </Box>
          </Container>

          <GalleriaFull
            open={open}
            onClose={setOpen}
            immagini={dettagli.immagini}
          />
        </>
      );
    }
  }
};

export default Appartamento;
