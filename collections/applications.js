Applications = new Meteor.Collection('applications');

//Applications.permit(['insert']).apply();

var applicationsSchema = new SimpleSchema({
	// autoform: {"label-class":"col-sm-3", "input-col-class":"col-sm-9", "template":"bootstrap-horizontal"},
	"parentsGuardians": {
		type: [String],
		minCount: 1,
		maxCount:3,
		label: "Parents/Guardians",
	},
	"mainContact": {
		type: String,
		label: "Main Contact Name",
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
	"householdMembers": {
		type: [Object],
		minCount: 1
	},
	"householdMembers.$.name": {
		type: String,
		label: "Name",
	},
	"householdMembers.$.age": {
		type: Number,
		label: "Age",
	},
	// gross income
	"grossIncome": {
		type: Object,
		label: "Gross Income",
	},
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
		label: "Other"
	},
	"homeType": {
		type: String,
		allowedValues: ["Rent", "Own home"],
		label: "Check one"

	},
	// spending on Jewish life
	"spending.daySchool": {
		type: Object,
		label: "Day School Tuition"
	},
	"spending.daySchool.where": {
		type: String
	},
	"spending.daySchool.amount": {
		type: Number
	},
	"spending.tuition": {
		type: Object,
		label: "Tuition"
	},
	"spending.tuition.where": {
		type: String
	},
	"spending.tuition.amount": {
		type: Number
	},
	"spending.synagogue": {
		type: Object,
		label: "Synagogue Dues"
	},
	"spending.synagogue.where": {
		type: String
	},
	"spending.synagogue.amount": {
		type: Number
	},
	"religiousSchoolFees": {
		type: Number,
		label: "Religious School Fees"
	},
	"spending.jewishCamp": {
		type: Object,
		label: "Jewish Camp"
	},
	"spending.jewishCamp.where": {
		type: String
	},
	"spending.jewishCamp.amount": {
		type: Number
	},
	"spending.jccDues": {
		type: Object,
		label: "JCC Dues"
	},
	"spending.jccDues.amountPerMonth": {
		type: Number
	},
	"spending.jccDues.amount": {
		type: Number
	},
	"spending.youthPrograms": {
		type: Object,
		label: "Youth Programs"
	},
	"spending.youthPrograms.where": {
		type: String
	},
	"spending.youthPrograms.amount": {
		type: Number
	},
	// extraordinary expenses
	"extraordinaryExpenses": {
		type: [Object],
		label: "Please itemize other extraordinary expenses"
	},
	"extraordinaryExpenses.$.name": {
		type: String
	},
	"extraordinaryExpenses.$.amount": {
		type: Number
	},

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
	"programParticipants.$.Tuition": {
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
		label: "Please list any special circumstances evaluators should be aware of"
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


applicationsSchema.schema();
//Applications.attachSchema(applicationsSchema);