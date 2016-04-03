Applications = new Meteor.Collection('applications');

//Applications.permit(['insert']).apply();
states= {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}

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
// Applications.attachSchema(familyFormSchema);
