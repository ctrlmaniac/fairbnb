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
  return (
    <>
      <Card>
        {!isEmpty(appartamento.immagini) && (
          <CardMedia
            sx={{ height: 300 }}
            image={appartamento.immagini[0].immagine}
            title="appartamento"
          />
        )}
        <CardContent>
          <Typography>Appartamento</Typography>
        </CardContent>
        <CardActions>
          <Button>prenota</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default AppartamentoWidget;
