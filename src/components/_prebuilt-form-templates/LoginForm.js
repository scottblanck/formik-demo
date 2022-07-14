// Steps to make a form with the supplied Formik components.  - Scott

import React from "react";

// 1. Import the necessary libraries
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

function LoginForm() {
  // 2. Set the initial values
  const initialValues = {
    email: "",
    password: "",
  };

  // 3. Create the validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  // 4. Create onSubmit method
  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  // 5. Create the JSX
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              // control="input"
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
