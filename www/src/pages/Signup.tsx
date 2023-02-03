import {
  Box,
  Button,
  Container,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import register from "~/features/account/register";
import { useAppDispatch, useAppSelector } from "~/hooks";

const Signup: React.FC = () => {
  const dispatch = useAppDispatch();
  const { registering, registerError } = useAppSelector(
    (state) => state.account
  );

  const [values, setValues] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = React.useState({
    fname: true,
    lname: true,
    email: true,
    password: true,
    password2: true,
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

  React.useEffect(() => {
    setErrors({
      ...errors,
      password:
        values.password !== values.password2 ||
        values.password.toString().length < 1,
    });
  }, [values]);

  const handleSubmit = () => {
    const newAccount = {
      fname: values.fname,
      lname: values.lname,
      email: values.email,
      password: values.password,
    };

    dispatch(register(newAccount));
  };

  return (
    <>
      <Box mb={3} sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h1">
          Registrati
        </Typography>
      </Box>

      <Container maxWidth="sm">
        <Paper elevation={0} variant="outlined">
          <Box p={2}>
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
            <TextField
              fullWidth
              label="Ripeti password"
              name="password2"
              value={values.password2}
              type="password"
              margin="normal"
              error={errors.password2}
              onChange={handleChange}
              required
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              onClick={handleSubmit}
            >
              registrati
            </Button>
          </Box>
        </Paper>
        {registering && <LinearProgress />}
      </Container>
    </>
  );
};

export default Signup;
