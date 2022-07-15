import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import MuiFormikField from '../MuiFormikField'
import MuiFormikRadio from '../MuiFormikRadio'
import { TextField, Container } from '@mui/material'
import MuiFormikSelect from '../MuiFormikSelect'

export const ProfileEditFormMui = (props) => {
  const { userType } = props

  // For the radio button group
  const radioOptions = [
    { key: 'Male', value: 'male' },
    { key: 'Female', value: 'female' },
  ]

  const accountTypeOptions = [
    { key: 'Doctor', value: 'doctorAccount' },
    { key: 'User', value: 'userAccount' },
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
    accountType: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
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
      accountType: '',
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
      <h1>Edit profile</h1>
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
        <h4>Email</h4>
        <MuiFormikField
          field={TextField}
          name='email'
          label='Email'
          formik={formik}
        />
        <h4>Account type</h4>
        <MuiFormikSelect
          name='accountType'
          label='Select a role'
          formik={formik}
          options={accountTypeOptions}
        />
        <br></br>
        {/* <button type='submit' disabled={!formik.isValid}> */}
        <button type='submit'>Submit</button>
      </form>
    </Container>
  )
}

export default ProfileEditFormMui
