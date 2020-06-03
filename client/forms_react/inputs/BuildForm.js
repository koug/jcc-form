import React, { Fragment } from "react";
import { TextInput, NumberInput, DropDownInput } from "./BasicInputs";
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
          case "date":
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
              <div key={i} className="panel panel-default">
                <div className="panel-heading">{field.label}</div>
                <FieldArray
                  name={fieldName}
                  render={(arrayHelper) => {
                    return (
                      <ul className="list-group">
                        {values[fieldName].map((f, i) => (
                          <li key={i} className="list-group-item">
                          <div className="row">
                            <BuildForm
                              key={i}
                              fields={field.definition}
                              values={f}
                              arrayField={fieldName}
                              arrayIndex={i}
                            /></div>
                            {i > 0 && <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => arrayHelper.remove(i)}
                          >
                            Remove
                          </button>}

                          </li>
                        ))}
                        <li className="list-group-item">
                          <div>
                            <button
                              type="button"
                              className="btn btn-link"
                              onClick={() => arrayHelper.push({})}
                            >
                              {field.addBtnLabel ?? "Add"}
                            </button>
                          </div>
                        </li>
                      </ul>
                    );
                  }}
                />
              </div>
            );
          default:
            return <div key={i}>nothing</div>;
        }
      })}
    </>
  );
};
