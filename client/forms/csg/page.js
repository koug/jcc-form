import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Wrapper } from "../../inputs/react/Wrapper";
import { fieldsCsg, Instructions, UploadInstructions } from "./config";
import BuildForm from "../../inputs/react/BuildForm";

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
            //Router.go("/confirmation/" + "abc");
            const saveObj = { applicationType: "csg" };
            fieldsCsg.forEach(f => {
              if (f.type === "FileUpload") {
                Meteor.saveFile(
                  values.projectDetails,
                  values.projectDetails.name,
                  values.projectDetails.type,
                  function(error, response) {
                    if (error) {
                      console.log("CAN'T Upload", error, error.getS);
                    } else {
                      saveObj[f.name + "Id"] = response;
                    }
                  }
                );
              } else {
                saveObj[f.name] = values[f.name];
              }
            });

            console.log(saveObj);
            Meteor.call("insertApplication", saveObj, function(error, result) {
              //callbacks.success();
              Router.go("/confirmation/" + result);
            });

            setSubmitting(false);
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
