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
import { useNavigate } from "react-router-dom";

interface Props {
  appartamento: any;
}

const AppartamentoWidget: React.FC<Props> = ({ appartamento }) => {
  const navigate = useNavigate();
  let baseUrl = "";

  if (import.meta.env.MODE === "development") {
    baseUrl = "http://localhost:8080";
  }

  return (
    <>
      <Card
        raised={false}
        onClick={() => navigate(`/appartamenti/${appartamento.id}`)}
        sx={{ cursor: "pointer", boxShadow: 0 }}
      >
        {!isEmpty(appartamento.immagini) && (
          <CardMedia
            sx={{ height: 300, borderRadius: 4 }}
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
          <Typography>
            <strong>{appartamento.costo} €</strong> notte
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default AppartamentoWidget;
