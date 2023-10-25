import { React, useState, useEffect } from "react";

import Table from "../common/grid/Table";
import Title from "../common/utils/Title";
import MainBox from "../common/MainBox";
import FloatingActionButtons from "../common/buttons/FloatingActionButtons";

const columns = [
  { field: "environmentId", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "aesConfig", headerName: "Secret Key Path", width: 200 },
];

export default function Environment() {
  const [environments, setEnvironments] = useState({ rows: [], columns: [] });

  useEffect(() => {
    setEnvironments({
      rows: [
        { environmentId: 1, name: "Dev", aesConfig: "dev/config" },
        { environmentId: 2, name: "Dev 2", aesConfig: "dev/config2" },
      ],
      columns: columns,
    });
  }, []);

  return (
    <MainBox>
      <FloatingActionButtons />
      <Title>Environments</Title>
      <Table
        rowId={(row) => row.environmentId}
        rows={environments.rows}
        columns={environments.columns}
        start={0}
        pageSize={5}
        sizeOptions={[5, 10, 15]}
      />
    </MainBox>
  );
}
