import React from "react";

import Table from "../common/grid/Table";
import Title from "../common/utils/Title";
import MainBox from "../common/MainBox";
import FloatingActionButtons from "../common/buttons/FloatingActionButtons";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "firstName", headerName: "First name" },
  { field: "lastName", headerName: "Last name" },
  {
    field: "age",
    headerName: "Age",
    type: "number",
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 29, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 39, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 49, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 59, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 69, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 79, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 89, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
export default function Filter() {
  const [filters, setFilters] = useState({ rows: [], columns: [] });
  useEffect(() => {}, []);
  return (
    <MainBox>
      <FloatingActionButtons />
      <Title>Filters</Title>
      <Table
        rows={filters.rows}
        columns={filters.columns}
        start={0}
        pageSize={5}
        sizeOptions={[5, 10, 15]}
      />
    </MainBox>
  );
}
