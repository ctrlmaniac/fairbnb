import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";

interface Props {
  appartamento: any;
}

const AppartamentoWidget: React.FC<Props> = ({ appartamento }) => {
  let baseUrl = "";

  if (import.meta.env.MODE === "development") {
    baseUrl = "http://localhost:8080";
  }

  return (
    <>
      <Card>
        {!isEmpty(appartamento.immagini) && (
          <CardMedia
            sx={{ height: 300 }}
            image={baseUrl + appartamento.immagini[0].immagine}
            title="appartamento"
          />
        )}
        <CardContent>
          <Typography>
            <strong>
              {appartamento.comune}, {appartamento.nazione}
            </strong>
          </Typography>
        </CardContent>
        <CardActions>
          <Button>prenota</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default AppartamentoWidget;
