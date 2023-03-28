import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
  TextField,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import register from "~/features/auth/register";
import { unsetResponse } from "~/features/auth/slice";
import { useAppDispatch, useAppSelector } from "~/hooks";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const Registrati: React.FC<Props> = ({ open, handleOpen }) => {
  const dispatch = useAppDispatch();
  const { registering, registerError, loginError, response } = useAppSelector(
    (state) => state.auth
  );

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [errors, setErrors] = React.useState({
    email: true,
    password: true,
    firstName: true,
    lastName: true,
  });

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

  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    setDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register(values));

    setTimeout(() => {
      handleOpen(false);
    }, 2000);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <Dialog open={open} onClose={() => handleOpen(false)}>
        {registering && <LinearProgress />}
        <DialogTitle>Registrati</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Nome"
            name="firstName"
            value={values.firstName}
            error={errors.firstName}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Cognome"
            name="lastName"
            value={values.lastName}
            error={errors.lastName}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            type="email"
            label="email"
            name="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="password"
            name="password"
            value={values.password}
            error={errors.password}
            onChange={handleChange}
            margin="normal"
          />

          {!isEmpty(response) && (
            <Alert
              severity={registerError ? "error" : "success"}
              variant="outlined"
            >
              {response}
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button type="reset" color="error" onClick={() => handleOpen(false)}>
            annulla
          </Button>
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Registrati
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default Registrati;
