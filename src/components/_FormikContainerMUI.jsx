import React from 'react'
import { Container, TextField, Button } from '@mui/material'
import { useFormik } from 'formik' // The useFormik hook allows us to pass Formik values to MUI
import * as Yup from 'yup'
import MuiFormikField from './MuiFormikField'
import MuiFormikSelect from './MuiFormikSelect'
import MuiFormikRadio from './MuiFormikRadio'
import MuiFormikCheckboxGroup from './MuiFormikCheckboxGroup'

// Test container to use Formik controls WITH MUI. Copy boilerplate code from here. - Scott
//
// To use these components:
// npm install formik
// npm install yup  (used for form field validation, very useful, docs on github)
// npm install @mui/material @emotion/react @emotion/styled

function FormikContainerMUI() {
  // Options lists for dropdown, radio, and checkbox components
  // (only needed if using those components)

  const dropdownOptions = [
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ]
  const radioOptions = [
    { key: 'Radio Option 1', value: 'rOption1' },
    { key: 'Radio Option 2', value: 'rOption2' },
    { key: 'Radio Option 3', value: 'rOption3' },
  ]
  const checkboxOptions = [
    { key: 'Check Option 1', value: 'cOption1' },
    { key: 'Check Option 2', value: 'cOption2' },
    { key: 'Check Option 3', value: 'cOption3' },
  ]

  const singleCheckOption = [{ key: 'Single Checkbox', value: 'sOption1' }]

  // Validation schema for Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required.'),
    email: Yup.string().email('Enter a valid email').required('Email required'),
    selectDropdown: Yup.string().required('Please make a selection'),
    selectRadio: Yup.string().required('Please select a radio button'),
    checkBoxes: Yup.array(),
    startTime: Yup.string().required('Format - hh:mm AM/PM'),
    birthDate: Yup.date()
      .required('Birth date required')
      .min('1910-01-01', 'Date invalid - choose a later date')
      .max(new Date(), "You can't be born in the future!"),
    // phone: Yup.number()
    //   .integer()
    //   .typeError("Please enter a valid phone number.")
    //   .required("Required"),
  })

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      selectDropdown: '',
      selectRadio: 'rOption1',
      checkBoxes: [],
      check1: [], // Can just check list length > 0 for a single checkbox
      startTime: '',
      birthDate: '',
    },
    onSubmit: (values) => {
      console.log('Form submitted.')
      console.log(values)
      // console.log(JSON.stringify(values));
    },
    validationSchema: validationSchema,
  })

  return (
    <Container maxWidth='md'>
      <form onSubmit={formik.handleSubmit} style={{ marginTop: 30 }}>
        <h4>TextFields</h4>
        <MuiFormikField
          // The field value can be any MUI component type with SELF CLOSING TAGS (simple components)
          // NOTE: You can pass along ANY additional MUI component props as well.
          field={TextField}
          name='firstName'
          label='First Name'
          sx={{ width: 250, paddingRight: 1 }}
          formik={formik}
        />
        <MuiFormikField
          field={TextField}
          name='lastName'
          label='Last Name'
          sx={{ width: 250, paddingRight: 1 }}
          formik={formik}
        />
        <MuiFormikField
          field={TextField}
          name='email'
          label='Email'
          sx={{ width: 400, paddingRight: 1, paddingTop: 1 }}
          formik={formik}
        />
        <h4>Date Text Field</h4>
        <MuiFormikField
          field={TextField}
          name='birthDate'
          label='Birth date'
          type='date'
          sx={{ width: 175, paddingRight: 1, paddingTop: 1 }}
          formik={formik}
        />
        <h4>Time Text Field</h4>
        <MuiFormikField
          field={TextField}
          name='startTime'
          label='Start Time'
          type='time'
          sx={{ width: 175, paddingRight: 1, paddingTop: 1 }}
          formik={formik}
        />
        <h4>Select Dropdown</h4>
        <MuiFormikSelect
          name='selectDropdown'
          label='Select a Skill'
          formik={formik}
          options={dropdownOptions}
        />
        <h4>Radio Group</h4>
        <MuiFormikRadio
          name='selectRadio'
          label='Choose One'
          formik={formik}
          options={radioOptions}
        />
        <h4>Single Checkbox</h4>
        <MuiFormikCheckboxGroup
          name='check1'
          // label='Single Checkbox'  //  Don't use a label for just one checkbox
          formik={formik}
          options={singleCheckOption}
        />
        <h4>Checkbox Group</h4>
        <MuiFormikCheckboxGroup
          name='checkBoxes'
          label='Checkboxes Demo'
          formik={formik}
          options={checkboxOptions}
        />

        <Button type='submit' variant='outlined'>
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default FormikContainerMUI
