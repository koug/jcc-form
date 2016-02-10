Template.testForm.onCreated(function() {
    this.parentsGuardiansNum = new ReactiveVar(1);
    this.householdMembersNum = new ReactiveVar(1);
});

Template.testForm.events({
    'click .addParent': function(event) {
        event.preventDefault();
        var num = Template.instance().parentsGuardiansNum.get();
        Template.instance().parentsGuardiansNum.set(num+1);
        console.log(num);
    }
})

Template.testForm.helpers({
    pg: function() {
        return _.times(
            Template.instance().parentsGuardiansNum.get(), 
            function(n) { 
                return { 
                    input: "parentsGuardians." + n,
                    index: n
                }
            });
    },
    hm: function() {
        return [
                "householdMembers.0.name",
                "householdMembers.0.age",
               ];
    },
	schema: function () {
	    // return new SimpleSchema({
	    //   "address": {
	    //     type: String,

	    //     instructions: "Enter a value!"
	    //   }
	    // });
        var mySchma = applicationsSchema;
        
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

