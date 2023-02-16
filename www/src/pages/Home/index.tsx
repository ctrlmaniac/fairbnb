import { Box, Fab, Grid, Skeleton } from "@mui/material";
import React from "react";
import { LoadingScreen } from "~/components";
import list from "~/features/appartamenti/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
const AppartamentoWidget = React.lazy(() => import("./Appartamento"));

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
            <Grid item xs={6} sm={4} md={3} xl={2} key={appartamento.id}>
              <React.Suspense
                fallback={
                  <>
                    <Skeleton
                      height={300}
                      variant="rounded"
                      sx={{ marginBottom: 1 }}
                    />
                    <Skeleton variant="rounded" />
                  </>
                }
              >
                <AppartamentoWidget appartamento={appartamento} />
              </React.Suspense>
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
