import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Signin: React.FC = () => {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: true,
    password: true,
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

  return (
    <>
      <Box mb={3} sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h1">
          Accedi
        </Typography>
      </Box>

      <Container maxWidth="sm">
        <Paper elevation={0} variant="outlined">
          <Box p={2}>
            <form action="" method="post">
              <TextField
                fullWidth
                label="email"
                name="username"
                value={values.username}
                type="email"
                margin="normal"
                onChange={handleChange}
                error={errors.username}
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
              <Button variant="contained" type="submit" fullWidth>
                accedi
              </Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Signin;
