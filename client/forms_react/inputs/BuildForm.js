import React, { Fragment } from "react";
import { TextInput, NumberInput } from "./BasicInputs";
import FileUpload from "./FileUpload";
import { FieldArray, setNestedObjectValues } from "formik";

export default BuildForm = ({ fields, values, arrayIndex, arrayField }) => {
  return (
    <>
      {fields.map((field, i) => {
        const fieldName = 
          arrayIndex === undefined ? 
          field.name : 
          `${arrayField}[${arrayIndex}].${field.name}`
        switch (field.type) {
          case "string":
          case "email":
            return (
              <TextInput
                key={i}
                label={field.label}
                name={fieldName}
                value={field.defaultValue}
                colsize={field.colSize ?? 12}
              />
            );
          case "number":
            return (
              <NumberInput
                key={i}
                label={field.label}
                name={fieldName}
                value={field.defaultValue}
                colsize={field.colSize ?? 12}
              />
            );
          case "file":
            return (
              <FileUpload
                key={i}
                label={field.label}
                name={fieldName}
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
          case "groupArray":
            return (
              <div key={i}>
              <h6>{fieldName}</h6>
              <p>{field.label}</p>
              <div className="row">
                <FieldArray 
                  name={fieldName}
                  render={arrayHelper => {
                    console.log("values[fieldName]", values[fieldName])
                    return (
                      <div>
                        {values[fieldName].map((f, i) => (
                          <BuildForm
                            key={i}
                            fields={field.definition}
                            values={f}
                            arrayField={fieldName}
                            arrayIndex={i}
                          />
                        ))}
                        <div className="col-sm-12">
                          <button
                            type="button"
                            className="btn btn-link"
                            onClick={() => arrayHelper.push({})}
                          >
                            add
                          </button>
                        </div>
                      </div>
                    );
                  }}
                />
              </div>
              </div>
            );
          default:
            return <div key={i}>nothing</div>;
        }
      })}
    </>
  );
};
