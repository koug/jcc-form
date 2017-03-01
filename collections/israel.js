import '/imports/lists.js';

israelSchema = new SimpleSchema({
    // autoform: {"label-class":"col-sm-3", "input-col-class":"col-sm-9", "template":"bootstrap-horizontal"},
    // "parentsGuardians": {
    // 	type: [String],
    // 	minCount: 1,
    // 	maxCount:3,
    // 	label: "Parents/Guardians",
    //       instructions: "sfsd"
    // },
    "applicationType": {
        type: String,
    },
    "program": {
        type: String,
        allowedValues: ["Summer Trip", "Gap Program"],
        label: "Program"
    },
    "country": {
        type: String,
        label: "Country",
        allowedValues: _.keys(countries)
    },
    "email": {
        type: String,
        label: "Email",
        regEx: SimpleSchema.RegEx.Email
    },
    "firstName": {
        type: String,
        label: "First Name",
    },
    "lastName": {
        type: String,
        label: "Last Name",
    },
    "address": {
        type: String,
        label: "Address"
    },
    "city": {
        type: String,
        label: "City"
    },
    "state": {
        type: String,
        label: "State",
        allowedValues: _.keys(states)
    },
    "zip": {
        type: String,
        label: "Zip"
    },
    "phone": {
        type: String,
        label: "Phone"
    },
    "dob": {
        type: Date,
        label: "Date of Birth (mm-dd-yyyy)"
    },
    "pFirst": {
        type: String,
        label: "Parent First Name",
    },
    "pLast": {
        type: String,
        label: "Parent Last Name",
    },
    "pAddr": {
        type: String,
        label: "Parent Address"
    },
    "pCity": {
        type: String,
        label: "Parent City"
    },
    "pState": {
        type: String,
        label: "Parent State",
        allowedValues: _.keys(states)
    },
    "pZip": {
        type: String,
        label: "Parent Zip"
    },
    "pPhone": {
        type: String,
        label: "Parent Phone"
    },
    "pEmail": {
        type: String,
        label: "Parent's Email",
        optional: true,
        regEx: SimpleSchema.RegEx.Email
    },
    "taxReturnId": {
        type: String,
        optional: false,
        label: "Tax Return"
    },
    "moreFunds": {
        type: Boolean,
        label: "Did you receive additional Scholarship funds?"
    },
    "fAmount": {
        type: Number,
        label: "Amount",
        optional: true
    },
    "fSource": {
        type: String,
        label: "Source",
        optional: true
    },
    "costProgram": {
        type: Number,
        label: "Cost of Program"
    },
    "recProgram": {
        type: String,
        label: "Name of recognized Program"
    },
    "essayId": {
        type: String,
        label: "Essay Submission"
    },
    "recomId": {
        type: String,
        label: "Recommendations"
    },

    "dateEntered": {
        type: Date,
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
