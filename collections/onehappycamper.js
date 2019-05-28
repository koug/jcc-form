import '/imports/lists.js';

onehappycamperSchema = new SimpleSchema({
  "applicationType": {
      type: String,
  },
  "fromNewHaven": {
    type: String,
    label: "Is the camper a greater New Haven area resident?",
    allowedValues: ["Yes"]
  },
  "properOrg": {
    type: String,
    label: "Is the Jewish Overnight Camp a US non-profit 501(c)(3) organization?",
    allowedValues: ["Yes"]
  },
  "email": {
    type: String,
    label: "Enter email for family profile",
    regEx: SimpleSchema.RegEx.Email,
  },
  "guardian.$.name": {
    type: String,
    label: "Name",
    optional: true
  },
  "guardian.$.address": {
    type: String,
    label: "Address",
    optional: true
  },
  "guardian.$.city": {
    type: String,
    label: "City/Town",
    optional: true
  },
  "guardian.$.zip": {
    type: String,
    label: "Zip",
    optional: true
  },
  "guardian.$.state": {
    type: String,
    label: "State",
    allowedValues: _.keys(states),
    optional: true
  },
  "guardian.$.phone": {
    type: String,
    label: "Phone",
    optional: true
  },
  "guardian.$.businessPhone": {
    type: String,
    label: "Business Phone",
    optional: true
  },
  "guardian.$.occupation": {
    type: String,
    label: "Occupation",
    optional: true
  },
// });
//
// expensesFormSchema = new SimpleSchema({
  // gross income
  "familyStatus": {
      type: String,
      allowedValues: ["Single", "Married", "Separated/Divorced", "Widowed"]
  },
  "numberChildren": {
    type: Number,
    label: "How many dependents are in the family?",
  },
  "numberDependents": {
    type: Number,
    label: "How many dependents are claimed on your taxes?",
  },
  "parent1Gross": {
    type: Number,
    label: "Parent 1's current annual gross income (including child support, maintenance, interest income, rental income and any other):"
  },
  "parent1Adjusted": {
    type: Number,
    label: "Parent 1's adjusted income (line 37 on 1040 US Individual Income Tax Return). If you filed jointly, write the total income here:",
  },
  "parent2Gross": {
    type: Number,
    label: "Parent 2's current annual gross income (including child support, maintenance, interest income, rental income and any other):",
    optional: true
  },
  "parent2Adjusted": {
    type: Number,
    label: "Parent 2's adjusted income (line 37 on 1040 US Individual Income Tax Return). If you filed jointly, write $0",
    optional: true
  },
  "parsonage": {
    type: Number,
    label: "parsonage",
    optional: true
  },
  "otherIncome": {
    type: Number,
    label: "Other income",
  },
  "totalIncome": {
    type: Number,
    label: "Total income",
  },
  "taxReturnId": {
    type: String,
    optional: false,
    label: "First 2 pages of 2017 tax forms"
  },
  "aidLetterId": {
    type: String,
    label: "Financial aid letter received from the camp(s) applicant(s) will be attending?"
  },
  "extraordinaryExpenses": {
    type: [Object],
    label: "Please itemize other extraordinary expenses",
    //minCount: 1
  },
  "extraordinaryExpenses.$.name": {
    type: String,
    optional: true
  },
  "extraordinaryExpenses.$.amount": {
    type: Number,
    optional: true
  },
  "campers.$.name": {
    type: String,
    label: "Name",
    optional: true,
  },
  "campers.$.dob": {
    type: Date,
    label: "DOB"
  },
  "campers.$.livesWith": {
    type: String,
    allowedValues: ["Father", "Mother", "Both", "Other"],
    label: "Lives With",
    optional: true
  },
  "campers.$.schoolName": {
    type: String,
    label: "Name of School (If outside greater New Haven, include address)",
    optional: true,
  },
  "campers.$.grade": {
    type: String,
    label: "Grade",
    optional: true,
  },
  "campers.$.campName": {
    type: String,
    label: "Name of Camp/Program",
    optional: true,
  },
  "campers.$.campAddress": {
    type: String,
    label: "Camp Address",
    optional: true,
  },
  "campers.$.campCity": {
    type: String,
    label: "City",
    optional: true,
  },
  "campers.$.campState": {
    type: String,
    label: "State",
    allowedValues: _.keys(states),
    optional: true,
  },
  "campers.$.campZip": {
    type: String,
    label: "Zip",
    optional: true,
  },
  "campers.$.campStartDate": {
    type: Date,
    label: "Start date of camp/program",
    optional: true,
  },
  "campers.$.campEndDate": {
    type: Date,
    label: "End date of camp/program",
    optional: true,
  },
  "campers.$.campDesc": {
    type: String,
    label: "Brief description of camp/program",
    optional: true,
  },
  "campers.$.campTuition": {
    type: Number,
    label: "Tuition or camp/program fee including transportation",
    optional: true,
  },
  "campers.$.campOtherScholarship": {
    type: String,
    label: "Where else did you request scholarship (check all that apply)",
    allowedValues: ["Jewish Foundation Happy Camper","PJ Library One Happy Camper","Synagogue","Camp","Other","Nowhere else"],
    optional: true,
  },
  "campers.$.campHowMuchOutside": {
    type: Number,
    label: "How much outside scholarship do you expect to receive from these sources?",
    optional: true,
  },
  "campers.$.campPreviouslyReceivedFunds": {
    type: String,
    label: "Has the applicant previously received any funds from the Jewish Federation or Jewish Foundation of Greater New Haven?",
    allowedValues: ["Yes", "No"]
  },
  "campers.$.campAmountRequested": {
    type: String,
    label: "Please state the total specific dollar amount you are requesting",
  },
  "otherInfo": {
    type: String,
    label: "How did you find out about the Jewish Foundation's camp scholarship program?",
    allowedValues: ["Website", "Shalom New Haven", "Synagogue", "Camp", "Word of mouth", "Other"],
  }
});

