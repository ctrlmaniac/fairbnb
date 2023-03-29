import { Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { AddFab } from "~/components";
import post from "~/features/apartments/post";
import { unsetResponse } from "~/features/apartments/slice";
import { useAppDispatch, useAppSelector } from "~/hooks";
import Apartment from "~/types/Apartment";

const AptForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { principal } = useAppSelector((state) => state.account);
  const { posting, postError, response } = useAppSelector(
    (state) => state.apartments
  );

  const [values, setValues] = React.useState<Apartment>({
    host: principal!,
    address: "",
    city: "",
    zipCode: "",
    region: "",
    country: "",
    online: false,
  });

  const [errors, setErrors] = React.useState({
    address: true,
    city: true,
    zipCode: true,
    region: true,
    country: true,
  });

  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    setDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: value.toString().length === 0,
    });
  };

  const handleSubmit = () => {
    dispatch(post(values));

    setTimeout(() => {
      dispatch(unsetResponse());
    }, 2000);
  };

  return (
    <>
      <Container>
        <Typography variant="h6" gutterBottom>
          Inserisci i dati del tuo appartamento!
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="indirizzo"
              name="address"
              value={values.address}
              error={errors.address}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="città"
              name="city"
              value={values.city}
              error={errors.city}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="CAP"
              name="zipCode"
              value={values.zipCode}
              error={errors.zipCode}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="regione"
              name="region"
              value={values.region}
              error={errors.region}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="nazione"
              name="country"
              value={values.country}
              error={errors.country}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Container>

      <AddFab disabled={disabled} loading={posting} onClick={handleSubmit} />
    </>
  );
};

export default AptForm;
