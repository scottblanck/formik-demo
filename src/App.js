import React from 'react'
import './App.css'

/* eslint-disable */
import YoutubeForm from './components/examples-demo-form/YoutubeForm' // Lots of examples
import LoginForm from './components/_prebuilt-form-templates/LoginForm'
import RegistrationForm from './components/_prebuilt-form-templates/RegistrationForm'
import EnrollmentForm from './components/_prebuilt-form-templates/EnrollmentForm'

import FormikContainer from './components/_FormikContainer' // Master template for vanilla-HTML components with Formik
import FormikContainerMUI from './components/_FormikContainerMUI' // Master template for MUI components with Formik
import RegistrationFormMui from './components/_prebuilt-form-templates/RegistrationFormMui'
/* esline-enable */

function App() {
  return (
    <div className='App'>
      <RegistrationFormMui />
      {/* <FormikContainerMUI /> */}
      {/* <FormikContainer /> */}
      {/* <YoutubeForm /> */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      {/* <EnrollmentForm /> */}
    </div>
  )
}

export default App
