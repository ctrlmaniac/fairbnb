import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import register from "~/features/account/register";
import { useAppDispatch, useAppSelector } from "~/hooks";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { registering, registerError } = useAppSelector(
    (state) => state.account
  );

  const [show, setShow] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
    passwordRepeat: "",
  });

  const [errors, setErrors] = React.useState({
    email: true,
    fname: true,
    lname: true,
    password: true,
    passwordRepeat: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: value.toString().length < 1,
    });
  };

  const handleRegistra = () => {
    if (!show) {
      setShow(true);
    } else {
      const newAccount = {
        email: values.email,
        fname: values.fname,
        lname: values.lname,
        password: values.password,
        role: "USER",
      };

      dispatch(register(newAccount));
    }
  };

  // Valida la password
  React.useEffect(() => {
    if (show) {
      setErrors({
        ...errors,
        password: values.password !== values.passwordRepeat,
        passwordRepeat: values.password !== values.passwordRepeat,
      });
    }
  }, [show, values]);

  return (
    <>
      <Box mb={3} sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h1">
          Accedi o Registrati
        </Typography>
      </Box>

      <Container maxWidth="sm">
        <Paper elevation={0} variant="outlined">
          <Box p={2}>
            <form action="/login" method="post">
              {show && (
                <>
                  <TextField
                    fullWidth
                    label="Nome"
                    name="fname"
                    value={values.fname}
                    margin="normal"
                    onChange={handleChange}
                    error={errors.fname}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Cognome"
                    name="lname"
                    value={values.lname}
                    margin="normal"
                    onChange={handleChange}
                    error={errors.lname}
                    required
                  />
                </>
              )}
              <TextField
                fullWidth
                label="email"
                name="email"
                value={values.email}
                type="email"
                margin="normal"
                onChange={handleChange}
                error={errors.email}
                required
              />
              <TextField
                fullWidth
                label="password"
                name="password"
                value={values.password}
                type="password"
                margin="normal"
                error={errors.password}
                onChange={handleChange}
                required
              />
              {show && (
                <TextField
                  fullWidth
                  label="ripeti password"
                  name="passwordRepeat"
                  value={values.passwordRepeat}
                  type="password"
                  margin="normal"
                  onChange={handleChange}
                  error={errors.passwordRepeat}
                  required
                />
              )}

              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    disabled={show}
                  >
                    accedi
                  </Button>
                </Grid>

                <Grid item xs={6}>
                  <Button
                    variant={show ? "contained" : "outlined"}
                    fullWidth
                    onClick={handleRegistra}
                  >
                    registrati
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
        {registering && <LinearProgress />}
        {registerError && (
          <Box mt={2}>
            <Alert severity="error">{registerError}</Alert>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Login;
