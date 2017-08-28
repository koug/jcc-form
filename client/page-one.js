Template.familyForm.helpers({
    appType: function() {
        return Template.currentData();
    },
    hasTaxReturn: function() {
      if (Template.currentData().data.applicationType == "religious")
        return false;
      return true;
    },
    typeDesc: function() {
        return Template.currentData().desc;
    },
    schema: function() {
        var mySchema = familyFormSchema;

        return mySchema;
    },
  hasDisclaimer: function() {
      return Template.currentData().applicationType === "camp";
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
