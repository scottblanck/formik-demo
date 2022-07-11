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
  // console.log(formik);

  return (
    <div>
      <FormControl fullWidth>
        <FormLabel id={labelid}>{label}</FormLabel>
        <RadioGroup
          area-aria-labelledby={labelid}
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          {...rest}
        >
          {options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <FormControlLabel
                  control={<Radio />}
                  value={option.value}
                  // key={option.key}
                  label={option.key}
                />
              </React.Fragment>
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default MuiFormikRadio;
