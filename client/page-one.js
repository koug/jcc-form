Template.familyForm.helpers({
    // data: function() {
    // 	return Session.get("data");
    // },
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
            //callbacks.reset();   // Run each Element's custom `reset` function to clear the form.
            Meteor.call('insertApplication', this, function(error, result) {
                callbacks.success();
                Router.go("/confirmation/" + result);
            });

        };
    }
});
