Template.inputExtraordinaryExpenses.onCreated(function() {
  this.num = new ReactiveVar(1);
});

Template.inputExtraordinaryExpenses.events({
  'click .extraordinaryExpenses .add': function(event) {
    event.preventDefault();
    var num = Template.instance().num.get();
    Template.instance().num.set(++num);
  },
  'click .extraordinaryExpenses .remove': function(event) {
    event.preventDefault();
    var num = Template.instance().num.get();
    Template.instance().num.set(--num);
  }
})

Template.inputExtraordinaryExpenses.helpers({
  numberOfFields: function() {
    var num = Template.instance().num.get();
    return Template.instance().num.get();
  },
});
