import React from 'react'

// General component used for all self closing MUI components with Formik.
// See _FormikContainerMUI.jsx file for examples

function MuiFormikField(props) {
  const { name, label, formik, ...rest } = props
  // console.log(rest);

  return (
    <props.field
      id={name}
      name={name}
      label={label}
      value={formik.values ? formik.values[name] : null}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      onBlur={formik.handleBlur}
      {...rest}
    />
  )
}

export default MuiFormikField
