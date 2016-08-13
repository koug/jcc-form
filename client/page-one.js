Template.familyForm.helpers({
    data: function() {
    	return { applicationType: Template.currentData() };
    },
    typeDesc: function() {
        var val = Template.currentData().data == undefined ?
            Template.currentData() : Template.currentData().data.applicationType;
        switch (val) {
            case "religious":
                return "religious school"
                break;
            case "day":
                return "day school"
                break;
            case "camp":
                return "camp"
                break;
            default:
                return "";
        }
    	return Template.currentData();
    },
    typeDate: function() {
        switch (Template.currentData()) {
            case "religious":
                return "Friday, September 9th, 2016"
                break;
            case "day":
                return "July 15th, 2017"
                break;
            case "camp":
                return "Friday, August 26th, 2016"
                break;
            default:
                return "";
        }
    	return Template.currentData();
    },
    typeTitle: function() {
        switch (Template.currentData()) {
            case "religious":
                return `<h2>Religious School Scholarship Application</h2>
                    <h3><b>Qualifying programs include: Catchment area synagogue religious schools</b></h3>`;
                break;
            case "day":
                return `<h2>Day School and Preschool Scholarship Application</h2>
                    <h3><b>Qualifying programs include: Ezra Academy, Southern CT Hebrew
                    Academy, Beis Chana and catchment area Jewish Preschool programs</b></h3>`;
                break;
            case "camp":
                return `<h2>Camp Scholarship Application</h2>
                    <h3><b>Qualifying programs include: Camp Laurelwood, JCC Day Camp and Camp Gan Israel</b></h3>`;
                break;
            default:
                return "";
        }
    	return Template.currentData();
    },
    schema: function() {
        var mySchema = familyFormSchema;

        return mySchema;
    },
    action: function() {
        return function(els, callbacks, changed) {

            // Router.go('/expensesForm')
            console.log("[forms] Action running!");
            console.log("[forms] Form data!", this);
            console.log("[forms] HTML elements with `.reactive-element` class!", els);
            console.log("[forms] Callbacks!", callbacks);
            console.log("[forms] Changed fields!", changed);

            this.taxReturnId = $("#taxReturnId").val();
            //callbacks.reset();   // Run each Element's custom `reset` function to clear the form.
            Meteor.call('insertApplication', this, function(error, result) {
                callbacks.success();
                Router.go("/confirmation/" + result);
            });

        };
    }
});
