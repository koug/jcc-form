import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Wrapper } from "../../inputs/react/Wrapper";
import BuildForm from "../../inputs/react/BuildForm";
import { saveFilePromise } from "../../client-save-file-promise";

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
      initialValues[f.name] = f.defaultValue;
      let validation = null;
      switch (f.type) {
        case "string":
          validation = Yup.string();
          break;
        case "email":
          validation = Yup.string().email("Invalid Email");
          break;
        case "number":
          validation = Yup.number();
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
        default: break;
      }
      
      if (f.required !== undefined && f.required === true) {
        validation = validation.required("Required");
      }
      if (f.required !== undefined && f.required === false) {
        validation = validation.notRequired().nullable();
      }
      if (validation !== null)
        validationSchema[f.name] = validation;
    });
    return (
      <div className="row">
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape(validationSchema)}
          onSubmit={(values, { setSubmitting }) => {
            const saveObj = { applicationType: app };
            const promisesUpload = [];
            application.definition.forEach(f => {
              if (f.type === "file") {
                // upload file, push promise
                promisesUpload.push(
                  saveFilePromise(
                    values.projectDetails,
                    values.projectDetails.name,
                    values.projectDetails.type
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
