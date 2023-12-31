import '/imports/lists.js';

Applications = new Meteor.Collection('applications');
Counters = new Mongo.Collection("counters");
Files = new Mongo.Collection("files");
ApplicationType = new Meteor.Collection('applicationType');


// CollectionName.allow({
//     insert: function(){
//         return true;Collection
//     },
//     update: function(){
//         return true;
//     },
//     remove: function(){
//         return true;
//     }
// });

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
  "applicationType": {
      type: String,
      allowedValues: ["camp", "day", "religious"]
  },
  "parentsGuardians": {
    type: String,
    label: "Parents/Guardians"
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
  "householdMembers": {
      type: [Object]
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
    label: "Parent/Guardian 1",
  },
  "grossIncome.Mother": {
    type: Number,
    label: "Parent/Guardian 2",
    optional: true
  },
  "grossIncome.Other": {
    type: Number,
    label: "Other",
    optional: true
  },
  "taxReturnId": {
      type: String,
      optional: true,
      label: "Tax Return"
  },
  "taxFromId": {
    type: Number,
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
    label: "Day School",
    optional: true
  },
  "spending.daySchool.amount": {
    type: Number,
    label: "Day School Tuition",
    optional: true
  },
  "spending.tuition.where": {
    type: String,
    label: "Tuition",
    optional: true
  },
  "spending.tuition.amount": {
    type: Number,
    label: "Tuition Amount",
    optional: true
  },
  "spending.synagogue.where": {
    type: String,
    label: "Synagogue",
    optional: true
  },
  "spending.synagogue.amount": {
    type: Number,
    label: "Synagogue Dues",
    optional: true
  },
  "spending.jewishCamp.where": {
    type: String,
    label: "Jewish Camp",
    optional: true
  },
  "spending.jewishCamp.amount": {
    type: Number,
    label: "Jewish Camp Tuition",
    optional: true
  },
  "spending.jccDues.amountPerMonth": {
    type: Number,
    label: "JCC Membership",
    optional: true
  },
  "spending.jccDues.amount": {
    type: Number,
    label: "JCC Total",
    optional: true
  },
  "spending.youthPrograms.where": {
    type: String,
    label: "Youth Programs",
    optional: true
  },
  "spending.youthPrograms.amount": {
    type: Number,
    label: "Youth Programs Tuition",
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
    label: "Child's Name"
  },
  "programParticipants.$.school": {
    type: String,
    label: "School/Program"
  },
  "programParticipants.$.level": {
    type: String,
    label: "Grade"
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
  // "programParticipants.$.officeComments": {
  //   type: String,
  //   label: "Office Comments"
  // },
  "notBeenInformOfAward": {
    type: Boolean,
    label: "I have not been informed of my scholarship award from school/program"
  },
  "otherPrograms": {
    type: String,
    label: "Please tell us all the other programs that you plan to apply for through JSI in the 2021/2022 year",
    optional: true
  },
  "comments": {
    type: String,
    label: "Please list any special circumstances evaluators should be aware of",
    optional: true
  },
  "dateEntered": {
    type: Date,
  },
  "adminStatus": {
      type: String,
      label: "Review Status",
      allowedValues: [ "Pending", "Reviewed" ]
  },
  "adminComments": {
    type: String,
    label: "Admin Comments",
    optional: true
  },
  "dateAdminReview": {
    type: Date,
  },
  "boardStatus": {
      type: String,
      label: "Application Status",
      allowedValues: ["Pending", "Accepted", "Rejected"]
  },
  "boardComments": {
    type: String,
    label: "Board Comments",
    optional: true
  },
  "dateBoardReview": {
    type: Date,
  },

  // timestamps
  "dateLetterSent": {
    type: Date,
  },
});


// applicationsSchema.schema();
// Applications.attachSchema(familyFormSchema);
