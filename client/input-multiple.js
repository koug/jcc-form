// Add helpers for the custom state
Template.inputMultiple.helpers({
  numberOfFields: function () {
    var currentFieldCount = Template.instance().numberOfFields.get();
    var times = [];
    _.times(currentFieldCount, function (n) {
      times.push(n);
    });
    return times;
  },
  getValueFor: function (n, values) {
    if (n && values && values[n]) {
      return values[n];
    }
  }
});

// Add event to change custom state
Tempate.inputMultiple.events({
  'click .add-field': function (event, template) {
    var currentFieldCount = Template.instance().numberOfFields.get();
    Template.instance().numberOfFields.set(currentFieldCount++);
  }
});

// Add ReactiveVar here using the `created` callback
ReactiveForms.createElement({
  template: 'inputMultiple',
  validationEvent: 'keyup',
  validationValue: function (el, clean, template) {
    var values = $(el).find('input').map(function () {
      return $(this).val();
    });
    return values; // An array with all your input values
  },
  created: function () {
    this.numberOfFields = new ReactiveVar(1); // Default to one field
  }
});