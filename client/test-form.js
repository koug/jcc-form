Template.testForm.helpers({
	schema: function () {
	    // return new SimpleSchema({
	    //   "address": {
	    //     type: String,

	    //     instructions: "Enter a value!"
	    //   }
	    // });
        var mySchma = new SimpleSchema({
			"parentsGuardians": {
				type: [String],
				minCount: 1,
				maxCount:3,
				label: "Parents/Guardians",
			},
			"mainContact": {
				type: String,
				label: "Main Contact Name",
				instructions: "test"
			},
			"address": {
				type: String,
				label: "Address",
				instructions: "addrs"
			},
			"city": {
				type: String,
				label: "City/Town"
			},
			"zip": {
				type: Number,
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
//			"householdMembers": {
//				type: [Object],
//				minCount: 1
//			},
//			"householdMembers.$.name": {
//				type: String,
//				label: "Name",
//			},
//			"householdMembers.$.age": {
//				type: Number,
//				label: "Age",
//			},
//			// gross income
//			"grossIncome": {
//				type: Object,
//				label: "Gross Income",
//			},
//			"grossIncome.father": {
//				type: Number,
//				label: "Father",
//			},
//			"grossIncome.mother": {
//				type: Number,
//				label: "Mother"
//			},
//			"grossIncome.other": {
//				type: Number,
//				label: "Other"
//			},
//			"homeType": {
//				type: String,
//				allowedValues: ["Rent", "Own home"],
//				label: "Check one"
//
//			},
//			// spending on Jewish life
//			"spending.daySchool": {
//				type: Object,
//				label: "Day School Tuition"
//			},
//			"spending.daySchool.where": {
//				type: String
//			},
//			"spending.daySchool.amount": {
//				type: Number
//			},
//			"spending.tuition": {
//				type: Object,
//				label: "Tuition"
//			},
//			"spending.tuition.where": {
//				type: String
//			},
//			"spending.tuition.amount": {
//				type: Number
//			},
//			"spending.synagogue": {
//				type: Object,
//				label: "Synagogue Dues"
//			},
//			"spending.synagogue.where": {
//				type: String
//			},
//			"spending.synagogue.amount": {
//				type: Number
//			},
//			"religiousSchoolFees": {
//				type: Number,
//				label: "Religious School Fees"
//			},
//			"spending.jewishCamp": {
//				type: Object,
//				label: "Jewish Camp"
//			},
//			"spending.jewishCamp.where": {
//				type: String
//			},
//			"spending.jewishCamp.amount": {
//				type: Number
//			},
//			"spending.jccDues": {
//				type: Object,
//				label: "JCC Dues"
//			},
//			"spending.jccDues.amountPerMonth": {
//				type: Number
//			},
//			"spending.jccDues.amount": {
//				type: Number
//			},
//			"spending.youthPrograms": {
//				type: Object,
//				label: "Youth Programs"
//			},
//			"spending.youthPrograms.where": {
//				type: String
//			},
//			"spending.youthPrograms.amount": {
//				type: Number
//			},
//			// extraordinary expenses
//			"extraordinaryExpenses": {
//				type: [Object],
//				label: "Please itemize other extraordinary expenses"
//			},
//			"extraordinaryExpenses.$.name": {
//				type: String
//			},
//			"extraordinaryExpenses.$.amount": {
//				type: Number
//			},
//
//			// program participants
//			"programParticipants": {
//				type: [Object],
//				minCount: 1,
//				label: "Please list the following for each child"
//			},
//			"programParticipants.$.name": {
//				type: String,
//				label: "Program Participant"
//			},
//			"programParticipants.$.school": {
//				type: String,
//				label: "School/Program"
//			},
//			"programParticipants.$.level": {
//				type: String,
//				label: "Level"
//			},
//			"programParticipants.$.Tuition": {
//				type: Number,
//				label: "Program Participant"
//			},
//			"programParticipants.$.scholarshipFromProgram": {
//				type: Number,
//				label: "Scholarship From Program"
//			},
//			"programParticipants.$.tuitionBalance": {
//				type: Number,
//				label: "Tuition Balance"
//			},
//			"programParticipants.$.officeComments": {
//				type: String,
//				label: "Office Comments"
//			},
//			"notBeenInformOfAward": {
//				type: Boolean,
//				label: "I have not been informed of my scholarship award from school/program"
//			},
//			"comments": {
//				type: String,
//				label: "Please list any special circumstances evaluators should be aware of"
//			},
//
//			// timestamps
//			"dateEntered": {
//				type: Date,
//			},
//			"dateReviewed": {
//				type: Date,
//			},
//			"dateApproved": {
//				type: Date,
//			},
//			"dateDenied": {
//				type: Date,
//			},
//			"dateLetterSent": {
//				type: Date,
//			}
		});
        return mySchma;
	},
	action: function() {
		return function (els, callbacks, changed) {
			console.log("[forms] Action running!");
			console.log("[forms] Form data!", this);
			console.log("[forms] HTML elements with `.reactive-element` class!", els);
			console.log("[forms] Callbacks!", callbacks);
			console.log("[forms] Changed fields!", changed);
			callbacks.success(); // Display success message.
			callbacks.reset();   // Run each Element's custom `reset` function to clear the form.
		};
	}
});

