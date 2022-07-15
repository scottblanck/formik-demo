import React from "react";
import { TextField, Button, Container } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

// Example textfield with Formik

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required."),
  email: Yup.string().email("Enter a valid email").required("Email required"),
});

function MuiTextFieldModel(props) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted.");
      console.log(JSON.stringify(values));
    },
    validationSchema: validationSchema,
  });

  return (
    <Container maxWidth="md">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
        />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default MuiTextFieldModel;
