import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import DynamicForm from "./DynamicForm";

export default function ResponsiveFormDialog(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.dialogOpen}
        onClose={props.dialogClose}
        aria-labelledby='responsive-dialog-title'>
        <DialogTitle id='responsive-dialog-title'>{props.header}</DialogTitle>
        <DialogContent>
          <DynamicForm
            schema={props.columns}
            dialogClose={props.dialogClose}
            selectedRow={props.selectedRow}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
