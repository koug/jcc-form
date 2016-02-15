Applications = new Meteor.Collection('applications');

//Applications.permit(['insert']).apply();

familyFormSchema = new SimpleSchema({
  // autoform: {"label-class":"col-sm-3", "input-col-class":"col-sm-9", "template":"bootstrap-horizontal"},
  // "parentsGuardians": {
  // 	type: [String],
  // 	minCount: 1,
  // 	maxCount:3,
  // 	label: "Parents/Guardians",
  //       instructions: "sfsd"
  // },
  "parentsGuardians": {
    type: String,
    label: "Parents/Guardians",
    allowedValues: ["Parents/Guardians", "aaa"]
  },
  "mainContact": {
    type: String,
    label: "Main Contact Name",
    instructions: "main"
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
    label: "State"
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
    "householdMembers.$.name": {
    type: String,
    label: "Name label",
    },
    "householdMembers.$.age": {
    type: Number,
    label: "Age",

    },
// });
//
// expensesFormSchema = new SimpleSchema({
  // gross income
  "grossIncome.Father": {
    type: Number,
    label: "Father",
  },
  "grossIncome.Mother": {
    type: Number,
    label: "Mother"
  },
  "grossIncome.Other": {
    type: Number,
    label: "Other",
    optional: true
  },
  "homeType": {
    type: String,
    allowedValues: ["Owner", "Renter"],
    label: "Home type"

  },
  // spending on Jewish life
  "spending.daySchool.where": {
    type: String,
    label: "Day School @",
    optional: true
  },
  "spending.daySchool.amount": {
    type: Number,
    label: "Day School Amount",
    optional: true
  },
  "spending.tuition.where": {
    type: String,
    label: "Tuition @",
    optional: true
  },
  "spending.tuition.amount": {
    type: Number,
    label: "Tuition Amount",
    optional: true
  },
  "spending.synagogue.where": {
    type: String,
    label: "Synagogue @",
    optional: true
  },
  "spending.synagogue.amount": {
    type: Number,
    label: "Synagogue Amount",
    optional: true
  },
  "spending.jewishCamp.where": {
    type: String,
    label: "Jewish Camp @",
    optional: true
  },
  "spending.jewishCamp.amount": {
    type: Number,
    label: "Jewish Camp Amount",
    optional: true
  },
  "spending.jccDues.amountPerMonth": {
    type: Number,
    label: "JCC Amount/month",
    optional: true
  },
  "spending.jccDues.amount": {
    type: Number,
    label: "JCC Total",
    optional: true
  },
  "spending.youthPrograms.where": {
    type: String,
    label: "Youth Programs @",
    optional: true
  },
  "spending.youthPrograms.amount": {
    type: Number,
    label: "Youth Programs Amount",
    optional: true
  },
  // extraordinary expenses
  "extraordinaryExpenses": {
    type: [Object],
    label: "Please itemize other extraordinary expenses"
  },
  "extraordinaryExpenses.$.name": {
    type: String,
    optional: true
  },
  "extraordinaryExpenses.$.amount": {
    type: Number,
    optional: true
  },
// });
//
// thirdPageSchema = new SimpleSchema({
  // program participants
  "programParticipants": {
    type: [Object],
    minCount: 1,
    label: "Please list the following for each child"
  },
  "programParticipants.$.name": {
    type: String,
    label: "Program Participant"
  },
  "programParticipants.$.school": {
    type: String,
    label: "School/Program"
  },
  "programParticipants.$.level": {
    type: String,
    label: "Level"
  },
  "programParticipants.$.tuition": {
    type: Number,
    label: "Program Participant"
  },
  "programParticipants.$.scholarshipFromProgram": {
    type: Number,
    label: "Scholarship From Program"
  },
  "programParticipants.$.tuitionBalance": {
    type: Number,
    label: "Tuition Balance"
  },
  "programParticipants.$.officeComments": {
    type: String,
    label: "Office Comments"
  },
  "notBeenInformOfAward": {
    type: Boolean,
    label: "I have not been informed of my scholarship award from school/program"
  },
  "comments": {
    type: String,
    label: "Please list any special circumstances evaluators should be aware of",
    optional: true
  },

  // timestamps
  "dateEntered": {
    type: Date,
  },
  "dateReviewed": {
    type: Date,
  },
  "dateApproved": {
    type: Date,
  },
  "dateDenied": {
    type: Date,
  },
  "dateLetterSent": {
    type: Date,
  },
});


// applicationsSchema.schema();
//Applications.attachSchema(applicationsSchema);
