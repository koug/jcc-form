Template.inputHousehold.onCreated(function () {
    this.num = new ReactiveVar(1);
    this.fields = [
        "householdMembers.$.name",
        "householdMembers.$.age"];
});

// Add helpers for the custom state
Template.inputHousehold.helpers({
    numberOfFields: function () {
        var num = Template.instance().num.get();
        console.log(num);
        return Template.instance().num.get();
    },
    getValueFor: function (n, values) {
        if (n && values && values[n]) {
            return values[n];
        }
    }
});

Template.inputHousehold.events({
    'click .add': function(event) { 
        event.preventDefault();
        var num = Template.instance().num.get();
        Template.instance().num.set(++num);
    }
})
