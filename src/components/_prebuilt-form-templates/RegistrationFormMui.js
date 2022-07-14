import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import MuiFormikField from '../MuiFormikField'
import MuiFormikRadio from '../MuiFormikRadio'
import { TextField, Container } from '@mui/material'

function RegistrationFormMui() {
  // For the radio button group
  const radioOptions = [
    { key: 'Male', value: 'male' },
    { key: 'Female', value: 'female' },
  ]

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    mm: Yup.number()
      .required('Enter a month')
      .moreThan(0, 'month invalid')
      .lessThan(13, 'month invalid'),
    dd: Yup.number()
      .required('Enter a day')
      .moreThan(0, 'day invalid')
      .lessThan(32, 'day invalid'),
    yyyy: Yup.number()
      .required('Enter a year')
      .moreThan(1900, 'year invalid')
      .lessThan(2030, 'year invalid'),
    sexAssignedAtBirth: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    // confirm email - compare to email or empty string
    confirmEmail: Yup.string()
      .oneOf([Yup.ref('email'), ''], 'Email addresses must match')
      .required('Required'),
    password: Yup.string()
      .required('Please enter a password')
      .min(8, 'Password too short')
      .test(
        'isValidPass',
        'Password invalid, see requirements below',
        (value, context) => {
          const hasUpperCase = /[A-Z]/.test(value)
          const hasLowerCase = /[a-z]/.test(value)
          const hasNumber = /[0-9]/.test(value)
          // const hasSymbol = /[!@#%&]/.test(value); // Skip symbols req. for now
          let validConditions = 0
          const numberOfMustBeValidConditions = 3
          const conditions = [hasLowerCase, hasUpperCase, hasNumber] // Add hasSymbol if needed
          conditions.forEach((condition) =>
            condition ? validConditions++ : null
          )
          if (validConditions >= numberOfMustBeValidConditions) {
            return true
          }
          return false
        }
      ),
    //Confirm password - compare to password or empty string
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
  })

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mm: '',
      dd: '',
      yyyy: '',
      sexAssignedAtBirth: 'female',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log('Form submitted.')
      console.log(values)
      // console.log(JSON.stringify(values));
    },
    validationSchema: validationSchema,
  })

  return (
    <Container maxWidth='sm'>
      <h1>Create an account</h1>
      <form onSubmit={formik.handleSubmit} style={{ marginTop: 5 }}>
        <h4>Your name</h4>
        <MuiFormikField
          // The field value can be any MUI component type with SELF CLOSING TAGS (simple components)
          // NOTE: You can pass along ANY additional MUI component props as well.
          field={TextField}
          name='firstName'
          label='First Name'
          sx={{ width: 200, paddingRight: 1 }}
          formik={formik}
        />
        <MuiFormikField
          field={TextField}
          name='lastName'
          label='Last Name'
          sx={{ width: 200 }}
          formik={formik}
        />
        <h4>Date of birth</h4>
        <MuiFormikField
          field={TextField}
          name='mm'
          label='MM'
          sx={{ width: 80, paddingRight: 1 }}
          formik={formik}
        />
        <MuiFormikField
          field={TextField}
          name='dd'
          label='DD'
          sx={{ width: 80, paddingRight: 1 }}
          formik={formik}
        />
        <MuiFormikField
          field={TextField}
          name='yyyy'
          label='YYYY'
          sx={{ width: 80, paddingRight: 1 }}
          formik={formik}
        />
        <h4>Sex assigned at birth</h4>
        <MuiFormikRadio
          name='sexAssignedAtBirth'
          row
          label=''
          formik={formik}
          options={radioOptions}
        />
        <h4>Enter your email</h4>
        <MuiFormikField
          field={TextField}
          name='email'
          label='Email'
          formik={formik}
        />
        <h4>Confirm your email</h4>
        <MuiFormikField
          field={TextField}
          name='confirmEmail'
          label='Confirm Email'
          formik={formik}
        />
        <h4>Password</h4>
        <MuiFormikField
          field={TextField}
          name='password'
          label='Password'
          formik={formik}
        />
        <h4>Confirm password</h4>
        <MuiFormikField
          field={TextField}
          name='confirmPassword'
          label='Confirm Password'
          formik={formik}
        />
        <h5>
          Password requirements: Use at least 8 characters, upper and lowercase
          letters, and numbers
        </h5>
        {/* <button type='submit' disabled={!formik.isValid}> */}
        <button type='submit'>Submit</button>
      </form>
    </Container>
  )
}

export default RegistrationFormMui
