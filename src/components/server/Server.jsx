import { React, useState, useEffect } from "react";

import Table from "../grid/Table";
import Title from "../common/utils/Title";
import MainBox from "../common/MainBox";
import ServerService from "../../services/server/ServerService";

const columns = [
  { field: "pkId", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "bassUrl", headerName: "Base URL", width: 200 },
  { field: "userName", headerName: "User Name", width: 200 },
  { field: "token", headerName: "Token", width: 200 },
  { field: "environment", headerName: "Environment", width: 70 },
];

export default function Server() {
  const [server, setServer] = useState({ rows: [], columns: [] });

  useEffect(() => {
    ServerService.retrieveAllEnvironment().then((responce) => {
      console.log(Object.keys(responce.data[0]));
      setServer({
        rows: responce.data,
        columns: columns,
      });
    });
  }, []);

  return (
    <MainBox>
      <Title>Servers</Title>
      <Table
        rows={server.rows}
        rowId={(row) => row.pkId}
        columns={server.columns}
        start={0}
        pageSize={5}
        sizeOptions={[5, 10, 15]}
      />
    </MainBox>
  );
}
