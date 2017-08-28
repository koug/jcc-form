import '/imports/lists.js';

highschoolSchema = new SimpleSchema({
    "applicationType": {
        type: String,
    },
    "mainContact": {
      type: String,
      label: "Student Name",
      instructions: "main"
    },
    "parentsGuardians": {
      type: String,
      label: "Parents/Guardians Name"
    },
    "address": {
      type: String,
      label: "Address"
    },
    "city": {
      type: String,
      label: "City/Town"
    },
    "zip": {
      type: String,
      label: "Zip"
    },
    "state": {
      type: String,
      label: "State",
      allowedValues: _.keys(states)
    },
    "cellPhone": {
      type: String,
      label: "Cell Phone"
    },
    "homePhone": {
      type: String,
      label: "Home Phone",
      optional: true
    },
    "email": {
      type: String,
      label: "Email",
      optional: true
    },
    "taxReturnId": {
        type: String,
        optional: false,
        label: "Tax Return"
    },
    "studentTaxReturnId": {
        type: String,
        label: "Student Tax Return"
    },
    "essayId": {
        type: String,
        label: "Essay Submission"
    },
    "cr1Id": {
        type: String,
        label: "Educator Character Reference"
    },
    "cr2Id": {
        type: String,
        label: "Second Character Reference"
    },
    "cr3Id": {
        type: String,
        label: "Third Character Reference"
    },
    "hsTransId": {
        type: String,
        label: "High School Transcript"
    },
    "colAcceptId": {
        type: String,
        label: "College Acceptance Letter"
    },
    "noteAknowledgementId": {
        type: String,
        label: "Note of Aknowledgement"
    },
    // "adminStatus": {
    //     type: String,
    //     label: "Review Status",
    //     allowedValues: [ "Pending", "Reviewed" ]
    // },
    // "adminComments": {
    //   type: String,
    //   label: "Admin Comments",
    //   optional: true
    // },
    // "dateAdminReview": {
    //   type: Date,
    // },
    // "boardStatus": {
    //     type: String,
    //     label: "Application Status",
    //     allowedValues: ["Pending", "Accepted", "Rejected"]
    // },
    // "boardComments": {
    //   type: String,
    //   label: "Board Comments",
    //   optional: true
    // },
    // "dateBoardReview": {
    //   type: Date,
    // },
    //
    // // timestamps
    // "dateLetterSent": {
    //   type: Date,
    // },
});


// applicationsSchema.schema();
// Applications.attachSchema(familyFormSchema);
