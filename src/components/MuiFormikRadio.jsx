import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

function MuiFormikRadio(props) {
  const { name, label, formik, options, ...rest } = props;
  const labelid = label + "-label";
  // console.log(rest);

  return (
    <div>
      <FormControl fullWidth>
        <FormLabel id={labelid}>{label}</FormLabel>
        <RadioGroup
          area-aria-labelledby={labelid}
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
              <FormControlLabel
                value={option.value}
                control={<Radio />}
                key={option.key}
                label={option.key}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default MuiFormikRadio;
