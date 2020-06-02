import React, { Fragment } from "react";
import { TextInput, NumberInput, DropDownInput } from "./BasicInputs";
import FileUpload from "./FileUpload";

export default BuildForm = ({ fields }) => {
  return (
    <>
      {fields.map((field, i) => {
        switch (field.type) {
          case "string":
          case "email":
            return (
              <TextInput
                key={i}
                label={field.label}
                name={field.name}
                value={field.defaultValue}
              />
            );
          case "number":
            return (
              <NumberInput
                key={i}
                label={field.label}
                name={field.name}
                value={field.defaultValue}
              />
            );
          case "dropdown":
            return (
              <DropDownInput
                key={i}
                label={field.label}
                name={field.name}
                options={field.options} />
            ); 
          case "file":
            return (
              <FileUpload
                key={i}
                label={field.label}
                name={field.name}
                value={field.defaultValue}
              />
            );
          case "html":
            return (
              <div
                key={i}
                dangerouslySetInnerHTML={{ __html: field.value.join(" ") }}
              ></div>
            );
          default:
            return <div key={i}>nothing</div>;
        }
      })}
    </>
  );
};
