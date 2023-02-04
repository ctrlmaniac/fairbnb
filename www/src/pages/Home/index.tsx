import { Box, Fab, Grid } from "@mui/material";
import React from "react";
import { LoadingScreen } from "~/components";
import list from "~/features/appartamenti/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import AppartamentoWidget from "./Appartamento";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    list: appartamenti,
    listError,
    listing,
  } = useAppSelector((state) => state.appartamenti);

  React.useEffect(() => {
    dispatch(list());
  }, []);

  if (listing) {
    return <LoadingScreen />;
  } else if (listError) {
    return <>Errore</>;
  } else {
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {appartamenti?.map((appartamento) => (
            <Grid item xs={12} sm={6} md={4} key={appartamento.id}>
              <AppartamentoWidget appartamento={appartamento} />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            position: "fixed",
            bottom: 16,
            left: 0,
            right: 16,
            textAlign: "right",
          }}
        >
          <Fab color="primary" aria-label="affitta" variant="extended">
            Affitta
          </Fab>
        </Box>
      </>
    );
  }
};

export default Home;
