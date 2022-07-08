import React from "react";
import "./App.css";
import FormikContainer from "./components/FormikContainer";
import YoutubeForm from "./components/examples-demo-form/YoutubeForm"; // Lots of examples
import LoginForm from "./components/prebuilt-form-templates/LoginForm";
import RegistrationForm from "./components/prebuilt-form-templates/RegistrationForm";
import EnrollmentForm from "./components/prebuilt-form-templates/EnrollmentForm";

// import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    // <ChakraProvider>
    <div className="App">
      {/* <YoutubeForm /> */}
      {/* <FormikContainer /> */}
      <LoginForm />
      {/* <RegistrationForm /> */}
      <EnrollmentForm />
    </div>
    // </ChakraProvider>
  );
}

export default App;
