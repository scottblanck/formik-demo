import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormGroup,
} from "@mui/material";

function MuiFormikCheckboxGroup(props) {
  const { name, label, formik, options, ...rest } = props;
  const labelid = label + "-label";
  console.log(formik);

  return (
    <Box>
       <FormControl fullWidth>
        <FormLabel id={labelid}>{label}</FormLabel>
      <FormGroup>
          {options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={formik.field.value.includes(option.value)}
                />
              </React.Fragment>
            )
          })
        }}

      </FormGroup>
      </FormControl>
    </Box>
  );
}

export default MuiFormikCheckboxGroup;
