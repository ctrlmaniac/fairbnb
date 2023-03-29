import { Alert, Container, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import { Splash } from "~/components";
import list from "~/features/apartments/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import empty from "~/assets/animations/empty.gif";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    list: apts,
    listing,
    listError,
    response,
  } = useAppSelector((state) => state.apartments);

  React.useEffect(() => {
    dispatch(list());
  }, []);

  if (listing) {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skeleton height={300} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skeleton height={300} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skeleton height={300} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skeleton height={300} />
        </Grid>
      </Grid>
    );
  } else {
    if (listError) {
      return (
        <Splash>
          <Alert variant="outlined" severity="error">
            Impossibile recuperare gli appartamenti!
          </Alert>
        </Splash>
      );
    } else {
      if (apts.length === 0) {
        return (
          <Splash>
            <Container maxWidth="xs">
              <img
                src={empty}
                alt="Non c'è nessun appartamento da vedere"
                width="100%"
              />
              <Typography variant="h6">
                Qui non ci sono appartamenti da vedere!
              </Typography>
            </Container>
          </Splash>
        );
      } else {
        return (
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            {apts.map((apt) => (
              <Grid key={apt.id} item xs={12} sm={6} md={4} lg={3}>
                <Typography>
                  <strong>
                    {apt.city}, {apt.country}
                  </strong>
                </Typography>
              </Grid>
            ))}
          </Grid>
        );
      }
    }
  }
};

export default Home;
