import React from "react";
import { useField } from "formik";

import { Wrapper } from "./Wrapper";

const TextInput = ({ ...props }) => {
  return <BasicInput {...props} type="text" />
};

const NumberInput = ({ ...props }) => {
  return <BasicInput type="number"{...props} />
};

const DropDownInput = ({ ...props }) => {
  const [field, meta] = useField(props.name);
  console.log(props);
  return (
    <Wrapper meta={meta} label={props.label}>
      <select className="form-control" {...field} {...props} >
        <option value="">-- Please Select --</option>
        {props.options.map((o,i) => {
          return <option key={i} value={o.value}>{o.text}</option>;
        })}
      </select>
    </Wrapper>
  );
};

const BasicInput = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Wrapper meta={meta} label={label} colsize={props.colsize}>
      <input type={type} className="form-control" {...field} {...props} />
    </Wrapper>
  );
};

export { TextInput, NumberInput, DropDownInput };
