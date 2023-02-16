import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
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
        <CardContent>
          {!isEmpty(appartamento.immagini) && (
            <CardMedia
              image={baseUrl + appartamento.immagini[0].immagine}
              sx={{ height: 300, borderRadius: 4 }}
            />
          )}
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
