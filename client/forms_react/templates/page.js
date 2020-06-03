import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Wrapper } from "../inputs/Wrapper";
import BuildForm from "../inputs/BuildForm";
import { saveFilePromise } from "../client-save-file-promise";

const initValid = (field, init, valid) => {
  let validation = null;
  init[field.name] = field.type === "groupArray" ? [{}] : field.defaultValue;
  switch (field.type) {
    case "string":
      validation = Yup.string();
      break;
    case "email":
      validation = Yup.string().email("Invalid Email");
      break;
    case "number":
      validation = Yup.number();
      break;
    case "dropdown":
      validation = Yup.string();
      break;
    case "file":
      validation = Yup.mixed()
        .test("fileSize", "File is too large (2 MB max)", file => {
          return file ? file.size <= 2 * 1024 * 1024 : true;
        })
        .test("fileFormat", "File format not accepted", file => {
          return file ? ["doc", "pdf"].includes(
            file.name.split(".").pop()
          ) : true;
        });
      break;
    case "groupArray":
      field.definition.forEach(f => {
        const validationSchema = {};
        initValid(f, init[field.name][0], validationSchema);
      })
    default: break;
  }
  
  if (field.required !== undefined && field.required === true) {
    validation = validation.required("Required");
  }
  if (field.required !== undefined && field.required === false) {
    validation = validation.notRequired().nullable();
  }
  if (validation !== null)
    valid[field.name] = validation;
}


const ReactComponent = ({app}) => {
  const { application, ready } = useTracker(() => {
    const subscription = Meteor.subscribe("applicationType", app);

    const application = ApplicationType.findOne({ applicationType: app });
    return { application, ready: subscription.ready() };
  }, []);

  if (ready) {
    const initialValues = {};
    const validationSchema = {};
    application.definition.forEach(f => {
      initValid(f, initialValues, validationSchema);
    });

    console.log(initialValues);
    
    return (
      <div className="row">
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape(validationSchema)}
          onSubmit={(values, { setSubmitting }) => {
            const saveObj = { applicationType: app };
            const promisesUpload = [];
            application.definition.forEach(f => {
              if (f.type === "file" && values[f.name] !== undefined) {
                // upload file, push promise
                promisesUpload.push(
                  saveFilePromise(
                    values[f.name],
                    values[f.name].name,
                    values[f.name].type
                  )
                    .then(response => {
                      saveObj[f.name + "Id"] = response;
                    })
                    .catch(error => {
                      console.log("CAN'T Upload", error, error.getS);
                    })
                );
              } else {
                saveObj[f.name] = values[f.name];
              }
            });

            console.log(saveObj);
            return;
            // when files are uploaded, insert application
            Promise.all(promisesUpload)
              .then(values => {
                Meteor.call("insertApplication", saveObj, function(
                  error,
                  result
                ) {
                  if (error) {
                    console.log(error);
                    setSubmitting(false);
                  }
                  Router.go("/confirmation/" + result);
                });
              })
              .catch(error => {
                console.log(error);
                setSubmitting(false);
              });
          }}
        >
          {props => (
            <Form className="form-horizontal">
              <BuildForm
                fields={application.definition}
                values={props.values}
              ></BuildForm>
              <Wrapper>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={props.isSubmitting}
                >
                  Submit
                </button>
              </Wrapper>
            </Form>
          )}
        </Formik>
      </div>
    );
  } else return <div>Loading</div>;
};

Template.reactForm.helpers({
  ReactComponent() {
    return ReactComponent;
  }
});
