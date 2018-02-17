import '/imports/lists.js';
import checkPack from 'meteor/check';

SimpleSchema.extendOptions({
  cl: Match.Optional(String),
  option: Match.Optional(String),
});

womenofvisionSchema = new SimpleSchema({
  "applicationType": {
      type: String,
  },
  "orgName": {
    type: String,
    label: "Organization Name"
  },
  "address": {
    type: String,
    label: "Address"
  },
  "cityGroup.city": {
    type: String,
    label: "City/Town",
    cl: "col-sm-4"
  },
  "cityGroup.zip": {
    type: String,
    label: "Zip",
    cl: "col-sm-4"
  },
  "cityGroup.state": {
    type: String,
    label: "State",
    allowedValues: _.keys(states),
    cl: "col-sm-4"
  },
  "contactEmail": {
    type: String,
    label: "Primary Contact Email",
    regEx: SimpleSchema.RegEx.Email,
  },
  "contactPhone": {
    type: String,
    label: "Primary Contact Phone"
  },
  "orgMission": {
    type: String,
    label: "Mission of you organization",
    option: "TextArea"
  },
  "projectTitle": {
    type: String,
    label: "Project Title",
  },
  "projectedBudget": {
    type: Number,
    label: "Total projected budget for this project",
  },
  "amountRequested": {
    type: Number,
    label: "Total amount requested from Women of Vision Society"
  },
  "newProject": {
    type: String,
    label: "Is this a new project?",
    allowedValues: [ "Yes", "No" ]
  },
  "receivedFunding": {
    type: String,
    label: "If no, has this project received funding from the WOV previously?",
    allowedValues: [ "Yes", "No" ]
  },
  "yearsRunning": {
    type: Number,
    label: "How many years has this project been running?"
  },
  "summary": {
    type: String,
    label: "In 50 words or less, concisely summarize this project",
    max: 50
  },
  "goalsRelations": {
    type: String,
    label: "How does your project relate to the goals stated in the Women of Vision Society 2018 Grant Making Guidelines? (Please be specific and include at least two goals to which your project relates)"
  },
  "objectives": {
    type: String,
    label: "What are 2-3 specific objectives that this project intends to accomplish?"
  },
  "methods": {
    type: String,
    label: "What method(s) will be employed to achieve and implement the desired outcomes?"
  },
  "measure": {
    type: String,
    label: "How will you measure whether the outcomes have been realized?"
  },
  "targetPopulation": {
    type: String,
    label: "Target Population"
  },
  "participants": {
    type: Number,
    label: "Anticipated number of participants",
  },
  "percentParticipants": {
    type: Number,
    label: "% new or current participants in your organization",
  },
  "hireNew": {
    type: String,
    label: "Will you need to hire new staff or use existing staff to run this project?",
    allowedValues: [ "Yes", "No" ]
  },
  "projectLead": {
    type: String,
    label: "Name and Title of project lead",
  },
  "budgetExpenses": {
    type: Object,
    label: "Budget Expenses"
  },
  "budgetExpenses.costs": {
    type: Number,
    label: "Costs (please specify each line item)"
  },
  "budgetExpenses.staffing": {
    type: Number,
    label: "Staffing"
  },
  "budgetExpenses.marketing": {
    type: Number,
    label: "Marketing"
  },
  "budgetExpenses.equipment": {
    type: Number,
    label: "Equipment"
  },
  "budgetExpenses.materials": {
    type: Number,
    label: "Materials"
  },
  "budgetExpenses.transport": {
    type: Number,
    label: "Transportation"
  },
  "budgetExpenses.rentals": {
    type: Number,
    label: "Rentals"
  },
  "budgetExpenses.other": {
    type: Number,
    label: "Other"
  },
  "budgetIncome": {
    type: Object,
    label: "Budget Income"
  },
  "budgetIncome.donations": {
    type: Number,
    label: "Donations"
  },
  "budgetIncome.grants": {
    type: Number,
    label: "Grants already received"
  },
  "budgetIncome.fees": {
    type: Number,
    label: "Fees/Admission/Couvert"
  },
  "budgetIncome.other": {
    type: Number,
    label: "OtherIncome (please specify)"
  },
  "budgetIncome.otherDesc": {
    type: String,
    label: "Have other sources of funds been sought or awarded for this project?"
  },
  "continuation": {
    type: String,
    label: "If applicable, describe a continuation of the project beyond the grant period.",
    optional: true,
  },
});

