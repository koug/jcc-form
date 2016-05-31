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
                return "August 26th, 2016"
                break;
            case "day":
                return "August 26th, 2016"
                break;
            case "camp":
                return "August 26th, 2016"
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
