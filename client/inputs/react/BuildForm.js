import React from "react";
import { TextInput, NumberInput } from "./BasicInputs";
import FileUpload from "./FileUpload";

export default BuildForm = ({ fields }) => {
  return (
    <>
      {fields.map((field, i) => {
        switch (field.type) {
          case "TextInput":
            return (
              <TextInput
                key={i}
                label={field.label}
                name={field.name}
                value={field.defaultValue}
              />
            );
          case "NumberInput":
            return (
              <NumberInput
                key={i}
                label={field.label}
                name={field.name}
                value={field.defaultValue}
              />
            );
          case "FileUpload":
            return (
              <FileUpload
                key={i}
                label={field.label}
                name={field.name}
                value={field.defaultValue}
              />
            );
          default:
            return <div key={i}></div>;
        }
      })}
    </>
  );
};
