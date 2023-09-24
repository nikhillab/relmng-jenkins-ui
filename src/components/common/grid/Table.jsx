import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

export default function Table(props) {
  return (
    <React.Fragment>
      <Paper
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}>
        <DataGrid
          rows={props.rows}
          getRowId={props.rowId}
          columns={props.columns}
          initialState={{
            pagination: {
              paginationModel: {
                page: props.start,
                pageSize: props.pageSize,
              },
            },
          }}
          pageSizeOptions={props.sizeOptions}
        />
      </Paper>
    </React.Fragment>
  );
}
