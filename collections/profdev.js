import '/imports/lists.js';

profdevindSchema = new SimpleSchema({
    "applicationType": {
        type: String,
    },
    "mainContact": {
        type: String,
        label: "Name"
    },
    "employment": {
        type: String,
        label: "Employment"
    },
    "program": {
        type: String,
        label: "Program to which applying"
    },
    "dates": {
        type: String,
        label: "Dates of program",
    },
    "cost": {
        type: String,
        label: "Cost of Program",
    },
    "whyattend": {
        type: String,
        label: "Why do you want to attend this program",
    },
    "impact": {
        type: String,
        label: "Describe the impact this program will have on your professional growth as an educator and on your students' learning experiences"
    },
    "funding": {
        type: String,
        label: "Currently the Jewish Foundation will only provide funding for up to 70% of the cost of the program. How will you fund the remaining 30%?"
    },
    "brochureId": {
        type: String,
        label: "Copy of the Professional Development Event Description or Brochure"
    },
    "costdocId": {
        type: String,
        label: "Copy of the documentation stating the cost of program"
    },
    "costtravelId": {
        type: String,
        label: "Copy of the documentation stating the cost of travel"
    },
    "costlodgingId": {
        type: String,
        label: "Copy of the documentation stating the cost of lodging (if applicable)"
    },

    "dateEntered": {
        type: Date,
    },
});

profdevgroupSchema = new SimpleSchema({
    "applicationType": {
        type: String,
    },
    "mainContact": {
        type: String,
        label: "Name of Organization"
    },
    "program": {
        type: String,
        label: "Describe program for which applying"
    },
    "dates": {
        type: String,
        label: "Dates of program",
    },
    "cost": {
        type: String,
        label: "Cost of Program",
    },
    "contact": {
        type: String,
        label: "Contact Person at your organization",
    },
    "educators": {
        type: String,
        label: "Organizations and/or educators who will participate:",
    },
    "why": {
        type: String,
        label: "Why are you sponsoring/organizing this program?"
    },
    "impact": {
        type: String,
        label: "Describe the impact this program will have on the professional growth of the participants and on their students' learning experiences."
    },
    "fundingOrganization": {
        type: String,
        label: "Currently the Jewish Foundation will only provide grant funding for up to 70% of the program costs. How will your organization fund the other 30%?"
    },
    "costdocId": {
        type: String,
        label: "Documentation showing the cost of the program."
    },
    "costtravelId": {
        type: String,
        label: "A copy of the documentation stating the cost of Travel (if applicable)"
    },
    "costlodgingId": {
        type: String,
        label: "A copy of the documentation stating the cost of Lodging (if applicable)"
    },
    "boardBudgetId": {
        type: String,
        label: "Please include your organization’s most recent board approved budget"
    },

    "dateEntered": {
        type: Date,
    },
});
