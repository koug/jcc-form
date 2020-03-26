import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Wrapper } from "../../inputs/react/Wrapper";
import { fieldsCsg, Instructions } from "./config";
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
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {props => (
            <Form className="form-horizontal">
              <h2>Grant Application</h2>
              <BuildForm fields={fieldsCsg.filter(field => field.location === "applicant")}></BuildForm>
              <h2>Grant Information</h2>
              <BuildForm fields={fieldsCsg.filter(field => field.location === "information")}></BuildForm>
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
