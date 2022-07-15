import React from 'react'
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  InputLabel,
} from '@mui/material'

function MuiFormikSelect(props) {
  const { name, label, formik, options, ...rest } = props
  const labelid = label + '-label'
  // console.log(rest);

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id={labelid}>{label}</InputLabel>
        <Select
          labelId={labelid}
          id={name}
          name={name}
          label={label}
          value={formik.values[name]}
          onChange={formik.handleChange}
          error={formik.touched[name] && Boolean(formik.errors[name])}
          onBlur={formik.handleBlur}
          {...rest}
        >
          {options.map((option) => {
            return (
              <MenuItem key={option.key} value={option.value}>
                {option.key}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}

export default MuiFormikSelect
