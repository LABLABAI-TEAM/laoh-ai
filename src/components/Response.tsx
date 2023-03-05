import React from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";

function Response(props: {
  id: number;
  setId: (id: any) => void;
  size: number;
  content: string;
}) {
  const { id, setId, size, content } = props;
  return (
    <div className="note">
      <Box
        position="static"
        color="secondary"
        id="card-header"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
        }}
      >
        <Typography color="primary">
          {id + 1} of {size}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            disabled={!(size > 1 && id !== 0)}
            onClick={() => setId(id - 1)}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton
            disabled={!(size > 1 && id < size - 1)}
            onClick={() => setId(id + 1)}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>{content?.trim()}</Box>
    </div>
  );
}

export default Response;
 