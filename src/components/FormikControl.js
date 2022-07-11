import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioButtons from "./RadioButtons";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";

// Use this component for ALL formik objects
//
// PROPS TO PASS IN:
// label
// name
// options - for select,radio, checkbox groups
//

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    // ******* Vanilla HTML Components **********
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;

    // ************* DatePicker *****************
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
