import React from "react";
import { TextField } from "@mui/material";

function MuiTextField(props) {
  const { name, label, formik } = props;

  return (
    <TextField
      id={name}
      name={name}
      label={label}
      value={formik.values ? formik.values[name] : null}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      onBlur={formik.handleBlur}
    />
  );
}

export default MuiTextField;
