import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Table from "../common/grid/Table";
import Title from "../common/utils/Title";
import MainBox from "../common/MainBox";
import FloatingActionButtons from "../common/buttons/FloatingActionButtons";
import JobService from "../../services/job/JobService";

import { Link } from "react-router-dom";

const columns = [
  {
    field: "pkJobId",
    headerName: "Job ID",
    width: 70,
  },
  { field: "name", headerName: "Name", width: 200 },
  { field: "description", headerName: "Description", width: 200 },
  { field: "url", headerName: "Base URL", width: 200 },
  { field: "type", headerName: "Job Type", width: 200 },
  { field: "jenkinsServerDetailsId", headerName: "Server Id", width: 70 },
  { field: "isBuildable", headerName: "Buildable", width: 70 },
];
const row = [
  {
    pkJobId: 1,
    name: "multi-github",
    description: "http://192.168.29.205:8080/job/Folder/job/multi-github/",
    url: "http://192.168.29.205:8080/job/Folder/job/multi-github/",
    type: "WorkflowMultiBranchProject",
    jenkinsServerDetailsId: 1,
    isBuildable: false,
  },
  {
    pkJobId: 2,
    name: "TestJob",
    description: "http://192.168.29.205:8080/job/TestJob/",
    url: "http://192.168.29.205:8080/job/TestJob/",
    type: "WorkflowJob",
    jenkinsServerDetailsId: 1,
    isBuildable: true,
  },
];
export default function Job() {
  const [jobs, setJobs] = useState({ rows: [...row], columns: [...columns] });
  const navigate = useNavigate();

  function handleNavigate(row) {
    navigate(`/job/details/${row.pkJobId}`);
  }
  // useEffect(() => {
  //   JobService.get().then((responce) => {
  //     setJobs({
  //       rows: responce.data,
  //       columns: columns,
  //     });
  //   });
  // }, []);

  return (
    <MainBox>
      <FloatingActionButtons />
      <Title>Jobs</Title>
      <Table
        rows={jobs.rows}
        columns={jobs.columns}
        rowId={(row) => row.pkJobId}
        start={0}
        pageSize={5}
        sizeOptions={[5, 10, 15]}
        checkboxSelection={false}
        onSelect={handleNavigate}
      />
    </MainBox>
  );
}
