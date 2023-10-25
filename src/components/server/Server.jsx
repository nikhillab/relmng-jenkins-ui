import { React, useState, useEffect } from "react";

import Table from "../common/grid/Table";
import Title from "../common/utils/Title";
import MainBox from "../common/MainBox";
import ResponsiveFormDialog from "../common/FormDialog";

import FloatingActionButtons from "../common/buttons/FloatingActionButtons";

import ServerService from "../../services/server/ServerService";

const columns = [
  { field: "pkId", headerName: "Server ID", width: 100 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "bassUrl", headerName: "Base URL", width: 200 },
  { field: "userName", headerName: "User Name", width: 200 },
  { field: "token", headerName: "User Token", width: 200 },
  { field: "environment", headerName: "Environment", width: 200 },
];

const row = [
  {
    pkId: 1,
    name: "Jenkins Dev",
    bassUrl: "localhost:8080",
    userName: "test_user",
    token: "566sdvs6b56b5",
    environment: 1,
  },
  {
    pkId: 2,
    name: "Jenkins Dev 1",
    bassUrl: "localhost:8081",
    userName: "test_user_0",
    token: "566sdvs6b56b544",
    environment: 2,
  },
];
export default function Server() {
  const [server, setServer] = useState({ rows: [], columns: [] });
  const [open, setOpen] = useState(false);

  const [selectedRowData, setSelectedRowData] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setServer({
      rows: row,
      columns: columns,
    });
  };
  useEffect(() => {
    // ServerService.get().then((responce) => {
    //   console.log(Object.keys(responce.data[0]));
    setServer({
      rows: row,
      columns: columns,
    });
    // });
  }, []);

  return (
    <MainBox>
      <ResponsiveFormDialog
        dialogOpen={open}
        dialogClose={handleClose}
        header={"Add New Server"}
        columns={columns}
        selectedRow={selectedRowData}
      />
      <FloatingActionButtons add={handleClickOpen} />
      <Title>Servers</Title>
      <Table
        rows={server.rows}
        rowId={(row) => row.pkId}
        columns={server.columns}
        start={0}
        pageSize={5}
        sizeOptions={[5, 10, 15]}
        checkboxSelection={false}
        onSelect={(data) => {
          setSelectedRowData(data);
        }}
      />
    </MainBox>
  );
}
