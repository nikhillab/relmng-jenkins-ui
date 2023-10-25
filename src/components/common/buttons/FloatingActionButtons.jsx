import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';

export default function FloatingActionButtons(props) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 }, textAlign: "right" }}>
      <Fab color='success' aria-label='add' size='small' onClick={props.add}>
        <AddIcon />
      </Fab>
      <Fab color='primary' aria-label='edit' size='small' onClick={props.edit}>
        <EditIcon />
      </Fab>
      <Fab color='error' aria-label='delete' size='small' onClick={props.delete}>
        <DeleteIcon />
      </Fab>
    </Box>
  );
}
