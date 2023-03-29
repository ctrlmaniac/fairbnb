import { Box, Grid, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import house from "~/assets/images/house.webp";
import { useAppSelector } from "~/hooks";
import AptForm from "./AptForm";

const Affitta: React.FC = () => {
  const { principal } = useAppSelector((state) => state.account);

  return (
    <>
      <Box mb={3}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <img
              src={house}
              alt="A house"
              style={{ width: "100%", borderRadius: 20 }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6">
              Affitta ora il tuo appartamento e comincia a guadagnare!
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        {isEmpty(principal) ? (
          <Typography align="center">
            Devi accedere per poter affittare un appartamento!
          </Typography>
        ) : (
          <AptForm />
        )}
      </Box>
    </>
  );
};

export default Affitta;
