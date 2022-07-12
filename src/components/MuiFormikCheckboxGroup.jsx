import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";

function MuiFormikCheckboxGroup(props) {
  const { name, label, formik, options, ...rest } = props;
  const labelid = label + "-label";
  // console.log("props", props);

  return (
    <Box>
      <FormControl fullWidth>
        <FormLabel id={labelid}>{label}</FormLabel>
        <FormGroup>
          {options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <FormControlLabel
                  label={option.key}
                  value={option.value}
                  control={
                    <Checkbox
                      id={name}
                      checked={formik.values[name].includes(option.value)}
                      onChange={formik.handleChange}
                    />
                  }
                />
              </React.Fragment>
            );
          })}
        </FormGroup>
      </FormControl>
    </Box>
  );
}

export default MuiFormikCheckboxGroup;
