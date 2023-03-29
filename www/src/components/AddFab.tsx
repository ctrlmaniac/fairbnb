import React from "react";
import { Box, CircularProgress, Container, Fab } from "@mui/material";
import { IconPlus } from "@tabler/icons-react";
import { isEmpty } from "lodash";
import { green } from "@mui/material/colors";

interface Props {
  href?: string;
  loading?: boolean;
  onClick?: Function;
  disabled?: boolean;
}

const AddFab: React.FC<Props> = ({
  href,
  loading = false,
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <Box sx={{ position: "fixed", bottom: 16, left: 0, right: 0 }}>
      <Container sx={{ textAlign: "right", position: "relative" }}>
        <Fab
          color="primary"
          aria-label="aggiungi"
          href={!isEmpty(href) ? href : undefined}
          onClick={() => onClick()}
          disabled={disabled}
        >
          <IconPlus />
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              right: 18,
              zIndex: 1,
            }}
          />
        )}
      </Container>
    </Box>
  );
};

export default AddFab;
