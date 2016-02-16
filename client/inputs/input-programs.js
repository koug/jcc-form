Template.inputPrograms.onCreated(function() {
  this.num = new ReactiveVar(1);
});

Template.inputPrograms.events({
  'click .programs .add': function(event) {
    event.preventDefault();
    var num = Template.instance().num.get();
    Template.instance().num.set(++num);
  },
  'click .programs .remove': function(event) {
    event.preventDefault();
    var num = Template.instance().num.get();
    Template.instance().num.set(--num);
  }
})

Template.inputPrograms.helpers({
  numberOfFields: function() {
    var num = Template.instance().num.get();
    return Template.instance().num.get();
  },
});
