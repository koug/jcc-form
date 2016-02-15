Template.inputHousehold.onCreated(function() {
  this.num = new ReactiveVar(1);
  this.fields = [
    "householdMembers.$.name",
    "householdMembers.$.age"
  ];
});

Template.inputHousehold.helpers({
  numberOfFields: function() {
    var num = Template.instance().num.get();
    return Template.instance().num.get();
  },
});

Template.inputHousehold.events({
  'click .household .add': function(event) {
    event.preventDefault();
    var num = Template.instance().num.get();
    Template.instance().num.set(++num);
  },
  'click .household .remove': function(event) {
    event.preventDefault();
    var num = Template.instance().num.get();
    Template.instance().num.set(--num);
  }
})
