import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import theme from "./theme";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
