import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import login from "~/features/auth/login";
import { unsetResponse } from "~/features/account/slice";
import { useAppDispatch, useAppSelector } from "~/hooks";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const Login: React.FC<Props> = ({ open, handleOpen }) => {
  const dispatch = useAppDispatch();
  const {
    login: loading,
    loginError,
    response,
  } = useAppSelector((state) => state.auth);

  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: true,
    password: true,
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

  const handleSubmit = () => {
    dispatch(login(values));

    setTimeout(() => {
      dispatch(unsetResponse());
      handleOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onClose={() => handleOpen(false)}>
      <DialogTitle>Accedi</DialogTitle>
      <DialogContent>
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
          type="password"
          label="password"
          name="password"
          value={values.password}
          error={errors.password}
          onChange={handleChange}
          margin="normal"
        />

        {!isEmpty(response) && (
          <Alert variant="outlined" severity={loginError ? "error" : "success"}>
            {response}
          </Alert>
        )}
      </DialogContent>

      <DialogActions>
        <Button
          type="submit"
          variant="contained"
          disabled={disabled}
          onClick={handleSubmit}
        >
          accedi
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
