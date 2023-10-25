import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Paper, Toolbar, Typography } from "@mui/material";

import Table from "../common/grid/Table";
import Title from "../common/utils/Title";
import MainBox from "../common/MainBox";
import PopUp from "../common/PopUp.jsx";
import FloatingActionButtons from "../common/buttons/FloatingActionButtons";
import JobDetailsService from "../../services/job/JobDetailsService";

const columns = [
  { field: "number", headerName: "Build Number", width: 100 },
  { field: "queueId", headerName: "Queue ID", width: 100 },
  { field: "jenkinsJobId", headerName: "Job ID", width: 200 },
  { field: "result", headerName: "Result", width: 200 },
  { field: "url", headerName: "Job Build URL", width: 200 },
  { field: "duration", headerName: "Duration", width: 70 },
  { field: "estimatedDuration", headerName: "Estimated Duration", width: 70 },
];

const row = [
  {
    number: 1,
    queueId: 234,
    jenkinsJobId: 2,
    result: "SUCESS",
    url: "localhost:50505/dc/wqf/2",
    duration: "15min",
    estimatedDuration: "10min",
  },
  {
    number: 2,
    queueId: 234,
    jenkinsJobId: 2,
    result: "SUCESS",
    url: "localhost:50505/dc/wqf/2",
    duration: "15min",
    estimatedDuration: "10min",
  },
];

export default function JobDetails() {
  const params = useParams();
  const [jobDetails, setJobDetails] = useState({
    rows: [...row],
    columns: [...columns],
  });
  const [selectedRowData, setSelectedRowData] = useState({});


  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // useEffect(() => {
  //   JobDetailsService.find(params.jobId).then((responce) => {
  //     setJobDetails({
  //       rows: [],
  //       columns: columns,
  //     });
  //   });
  //   console.log(params);
  // }, []);

  const popup = (data) => {
    setSelectedRowData(data)
    handleClickOpen()
  };

  return (
    <MainBox>
      <PopUp
        dialogOpen={open}
        dialogClose={handleClose}
        header={"test"}
        content={selectedRowData.number}
      />
      <FloatingActionButtons />
      <Title>Job Details</Title>
      <Paper>
        <Container>
          <Typography variant='h5' component='h6'>
            {params.jobId}
          </Typography>
          <Typography variant='h5' component='h6'>
            h1. Heading
          </Typography>
          <Typography variant='h5' component='h6'>
            h1. Heading
          </Typography>
          <Typography variant='h5' component='h6'>
            h1. Heading
          </Typography>
        </Container>
      </Paper>
      <Toolbar />
      <Table
        rows={jobDetails.rows}
        columns={jobDetails.columns}
        rowId={(row) => row.number}
        start={0}
        pageSize={5}
        sizeOptions={[5, 10, 15]}
        onSelect={popup}
      />
    </MainBox>
  );
}
