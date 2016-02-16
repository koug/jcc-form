Template.familyForm.helpers({
    // data: function() {
    // 	return Session.get("data");
    // },
    schema: function() {
        var mySchma = familyFormSchema;

        return mySchma;
    },
    action: function() {
        return function(els, callbacks, changed) {

            // Router.go('/expensesForm')
            console.log("[forms] Action running!");
            console.log("[forms] Form data!", this);
            console.log("[forms] HTML elements with `.reactive-element` class!", els);
            console.log("[forms] Callbacks!", callbacks);
            console.log("[forms] Changed fields!", changed);
            callbacks.success(); // Display success message.
            // callbacks.reset();   // Run each Element's custom `reset` function to clear the form.
			this.dateEntered = new Date();
            saveObj = this;

			Applications.insert(this);

        };
    }
});
