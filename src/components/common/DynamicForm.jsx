import { React, useState } from "react";
import { Formik, Form } from "formik";
import { TextField, Button } from "@mui/material";

export default function DynamicForm(props) {
  const [form, setForm] = useState({});

  return (
    <Formik>
      {() => (
        <Form style={{ display: "flex", flexDirection: "column" }}>
          {Object.entries(props.schema).map(([key, value]) => (
            <div
              key={key}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}>
              <label htmlFor={key} style={{ marginRight: "10px" }}>
                {value.headerName} :
              </label>
              <TextField
                name={value.field}
                label={value.headerName}
                value={props.selectedRow[value.field]}
                variant='outlined'
                onChange={(event) =>
                  (form[value.headerName] = event.target.value)
                }
              />
            </div>
          ))}

          <Button
            autoFocus
            onClick={() => {
              props.dialogClose();
            }}
            type='submit'>
            Submit
          </Button>
          <Button
            onClick={() => {
              setForm({});
              props.dialogClose();
            }}
            autoFocus>
            Cancel
          </Button>
        </Form>
      )}
    </Formik>
  );
}
