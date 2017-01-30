import '/imports/lists.js';

stuartjdrellSchema = new SimpleSchema({
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
    "essayId": {
        type: String,
        label: "Essay Submission"
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
