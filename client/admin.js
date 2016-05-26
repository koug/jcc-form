
Template.admin.helpers({
    applications: function() {
        return Applications.find({});
    },
});

Template.adminEdit.helpers({
    data: function(){
        return Template.instance().data;
    },
    docId: function(){
        return Template.instance().data.taxReturnId;
    },
    schema: function() {
        return familyFormSchema;
    },
    action: function() {
        return function(els, callbacks, changed) {

            // Router.go('/expensesForm')
            console.log("[forms] Action running!");
            console.log("[forms] Form data!", this);
            console.log("[forms] HTML elements with `.reactive-element` class!", els);
            console.log("[forms] Callbacks!", callbacks);
            console.log("[forms] Changed fields!", changed);
            this.dateAdminReview = new Date();

            var idSelector = this._id;
            Applications.update({_id:idSelector}, {$set:{
                dateAdminReview: new Date(),
                adminComments: this.adminComments,
                adminStatus: this.adminStatus
            }});

            callbacks.success(); // Display success message.
            callbacks.reset();   // Run each Element's custom `reset` function to clear the form.

            Router.go("/admin");

            console.log("sub");
        };
    }

});
