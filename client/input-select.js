ReactiveForms.createElement({
  template: 'inputSelect',
  validationEvent: 'change',
  validationValue: function (el, clean, template) {
    return $(el).val();
  }
});
