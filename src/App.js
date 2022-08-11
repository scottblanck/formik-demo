import React from 'react'
import './App.css'
import { Stack } from '@mui/material'

/* eslint-disable */
import YoutubeForm from './components/examples-demo-form/YoutubeForm' // Lots of examples
import LoginForm from './components/_prebuilt-form-templates/LoginForm'
import RegistrationForm from './components/_prebuilt-form-templates/RegistrationForm'
import EnrollmentForm from './components/_prebuilt-form-templates/EnrollmentForm'

import FormikContainer from './components/FormikContainer' // Master template for vanilla-HTML components with Formik
import FormikContainerMUI from './components/_FormikContainerMUI' // Master template for MUI components with Formik
import RegistrationFormMui from './components/_prebuilt-form-templates/RegistrationFormMui'
import ProfileEditFormMui from './components/_prebuilt-form-templates/ProfileEditFormMui'
/* esline-enable */

function App() {
  return (
    <div className='App'>
      <Stack>
        {/*** Pre-built forms using MUI  ***/}
        {/* <ProfileEditFormMui /> */}
        {/* <RegistrationFormMui /> */}

        {/*** FormikContainer objects show all the available component types and stub code ***/}
        <h2>MUI examples</h2>
        <FormikContainerMUI />

        {/* <h2>Non-Mui examples</h2>
        <FormikContainer /> */}

        {/*** General purpose forms NOT using MUI ***/}
        {/* <YoutubeForm /> */}
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */}
        {/* <EnrollmentForm /> */}
      </Stack>
    </div>
  )
}

export default App
