import React from "react";
import { Wrapper } from "./Wrapper";
import { useField } from "formik";

export default FileUpload = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Wrapper meta={meta} label={props.label}>
      <input
        type="file"
        accept="application/pdf, application/msword"
        {...field}
        {...props}
        onChange={e => {
          console.log(e.currentTarget.files);

          helpers.setValue(e.currentTarget.files[0]);
        }}
      />
    </Wrapper>
  );
};
