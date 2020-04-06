import React from "react";
import { useField } from "formik";

import { Wrapper } from "./Wrapper";

const TextInput = ({ ...props }) => {
  return <BasicInput {...props} type="text" />
};

const NumberInput = ({ ...props }) => {
  return <BasicInput {...props} type="number" />
};

const BasicInput = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Wrapper meta={meta} label={label}>
      <input type={type} className="form-control" {...field} {...props} />
    </Wrapper>
  );
};

export { TextInput, NumberInput };
