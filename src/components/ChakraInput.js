// This is an example of using a third-party UI library, Chakra.  - Scott
// Using Material UI should be very similar.
//

import React from "react";
import { Field } from "formik";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

function ChakraInput(props) {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => (
        // Compare these fields to the regular HTML Input.js component to see difference
        // we don't have to do styling here, since the Chakra UI library is handling it
        // Material UI would be very similar
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Input id={name} {...rest} {...field} />
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default ChakraInput;
