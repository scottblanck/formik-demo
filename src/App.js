import React from "react";
import "./App.css";
import YoutubeForm from "./components/examples-demo-form/YoutubeForm"; // Lots of examples
import LoginForm from "./components/prebuilt-form-templates/LoginForm";
import RegistrationForm from "./components/prebuilt-form-templates/RegistrationForm";
import EnrollmentForm from "./components/prebuilt-form-templates/EnrollmentForm";

import FormikContainer from "./components/FormikContainer"; // Master template for vanilla-HTML components with Formik
import FormikContainerMUI from "./components/FormikContainerMUI"; // Master template for MUI components with Formik
import MuiTextFieldModel from "./components/examples-demo-form/MuiTextField-example";

function App() {
  return (
    <div className="App">
      {/* <MuiTextFieldModel /> */}
      <FormikContainerMUI />
      {/* <FormikContainer /> */}
      {/* <YoutubeForm /> */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      {/* <EnrollmentForm /> */}
      {/* <MuiTextFieldModel /> */}
    </div>
  );
}

export default App;
