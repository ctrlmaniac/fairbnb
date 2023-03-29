import { Grid, Typography } from "@mui/material";
import React from "react";
import house from "~/assets/images/house.webp";
import { useAppSelector } from "~/hooks";

const Affitta: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Affitta;
