import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Wrapper } from "../../inputs/react/Wrapper";
import { fieldsCsg, Instructions, UploadInstructions } from "./config";
import BuildForm from "../../inputs/react/BuildForm";
import { saveFilePromise } from "../../client-save-file-promise";

const CsgComponent = () => {
  const { application, ready } = useTracker(() => {
    const subscription = Meteor.subscribe("applicationType", "csg");

    const application = ApplicationType.findOne({ applicationType: "csg" });
    return { application, ready: subscription.ready() };
  }, []);

  if (ready) {
    const initialValues = {};
    const validationSchema = {};
    fieldsCsg.forEach(f => {
      initialValues[f.name] = f.defaultValue;
      validationSchema[f.name] = f.validation;
    });
    return (
      <div className="row">
        <Instructions {...application} />
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape(validationSchema)}
          onSubmit={(values, { setSubmitting }) => {
            const saveObj = { applicationType: "csg" };
            const promisesUpload = [];
            fieldsCsg.forEach(f => {
              if (f.type === "FileUpload") {
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
              <h2>Grant Application</h2>
              <BuildForm
                fields={fieldsCsg.filter(
                  field => field.location === "applicant"
                )}
              ></BuildForm>
              <h2>Grant Information</h2>
              <BuildForm
                fields={fieldsCsg.filter(
                  field => field.location === "information"
                )}
              ></BuildForm>
              <h2>
                Please answer and upload all questions completely and consisely
              </h2>
              <UploadInstructions />
              <BuildForm
                fields={fieldsCsg.filter(field => field.location === "upload")}
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

Template.csg.helpers({
  CsgComponent() {
    return CsgComponent;
  }
});
