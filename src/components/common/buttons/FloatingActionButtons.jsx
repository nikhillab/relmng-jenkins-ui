import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';

export default function FloatingActionButtons() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 }, textAlign: "right" }}>
      <Fab color='success' aria-label='add' size='small'>
        <AddIcon />
      </Fab>
      <Fab color='primary' aria-label='edit' size='small'>
        <EditIcon />
      </Fab>
      <Fab color='error' aria-label='delete' size='small'>
        <DeleteIcon />
      </Fab>
    </Box>
  );
}
