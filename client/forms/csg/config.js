import React from "react";
import * as Yup from "yup";

export const fieldsCsg = [
  {
    name: "applicant",
    label: "Applicant (organization) Name",
    type: "TextInput",
    location: "applicant",
    validation: Yup.string().required("Required"),
    defaultValue: undefined
  },
  {
    name: "applicantAddress",
    label: "Applicant Address",
    type: "TextInput",
    location: "applicant",
    validation: Yup.string().required("Required"),
    defaultValue: undefined
  },
  {
    name: "contact",
    label: "Contact Person Name",
    type: "TextInput",
    location: "applicant",
    validation: Yup.string().required("Required"),
    defaultValue: undefined
  },
  {
    name: "contactPhone",
    label: "Contact Person Phone",
    type: "TextInput",
    location: "applicant",
    validation: Yup.string().required("Required"),
    defaultValue: undefined
  },
  {
    name: "contactEmail",
    label: "Contact Person Email",
    type: "TextInput",
    location: "applicant",
    validation: Yup.string().email("Invalid Email").required("Required"),
    defaultValue: undefined
  },
  {
    name: "congrationHouseHolds",
    label: "For synagogues: How many households are there in your congregation?",
    type: "NumberInput",
    location: "applicant",
    validation: Yup.number().notRequired().nullable(),
    defaultValue: undefined
  },
  {
    name: "amountRequested",
    label: "Total amount requested (in USD)",
    type: "NumberInput",
    location: "information",
    validation: Yup.number().required("Required"),
    defaultValue: undefined
  },
  {
    name: "amountProject",
    label: "Total amount of project (in USD)",
    type: "NumberInput",
    location: "information",
    validation: Yup.number().required("Required"),
    defaultValue: undefined
  },
  {
    name: "fundsCommitted",
    label: "Current funds committed to the project (if any, in USD)",
    type: "NumberInput",
    location: "information",
    validation: Yup.number().notRequired().nullable(),
    defaultValue: undefined
  },
  {
    name: "fundsCommitted2",
    label: "Current funds committed to the project (if any, in USD)",
    type: "NumberInput",
    location: "upload",
    validation: Yup.number().notRequired().nullable(),
    defaultValue: undefined
  },
];

export const Instructions = props => {
  return (
    <div>
      <h1>{props.desc}</h1>
      <h2>Policies and Procedures</h2>
      <p>
        These monies are available thanks to the Arthur Eder Family Fund of the
        Jewish Foundation of Greater New Haven and are made in memory of Arthur
        and Yvette Eder.
      </p>
      <ol type="I">
        <li>
          <b>
            Criteria for Project Selection: Grant must be used to provide and
            enhance security for your institution.
          </b>
        </li>
        <li>
          <b>Procedures:</b>
          <ol>
            <li>
              Grant applications will be accepted from tax-exempt organizations
              classified under Section 501 (c)3 or described in Section 170 (b)
              (1) (A) of the Internal Revenue Code.
            </li>
            <li>
              When applicable, applications must be signed by the Executive
              Director and/or Rabbi and the Board President or another officer
              of the applicant organization.
            </li>
            <li>
              Grant recipients are required to submit a report on the use of
              funding and documentation confirming how it was spent. A copy of
              the final report is attached here and will be available online.
            </li>
            <li>
              If your organization has previously been awarded a grant, the
              Foundation will consider prior performance including: 1) whether
              the money that was awarded was or was not utilized; 2) whether the
              program or project for which the grant was awarded was or was not
              used for the purpose for which it was awarded; and 3) whether an
              adequate final report and/or evaluation was or was not submitted.
            </li>
            <li>
              All publicity about the project must state that funding, in total
              or in part, was provided by the Jewish Foundation of Greater New
              Haven in memory of Arthur and Yvette Eder. Jewish Foundation of
              Greater New Haven logo available upon request for use in program
              materials.
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
};
