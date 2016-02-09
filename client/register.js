ReactiveForms.createFormBlock({
  template: 'formJCC',
  submitType: 'normal'
});

ReactiveForms.createElement({
  template: 'inputText',
  validationEvent: 'keyup',
  validationValue: function (el, clean, template) {
    // This is an optional method that lets you hook into the validation event
    // and return a custom value to validate with.

    // Shown below is the ReactiveForms default. Clearly, this won't work in the case
    // of a multi-select form, but you could get those values and put them in an array.

    // The `clean` argument comes from SimpleSchema, but has been wrapped--
    // it now takes and returns just a value, not an object.
    console.log('Specifying my own validation value!');
    value = $(el).val();
    return clean(value, {removeEmptyStrings: false});
  },
  reset: function (el) {
    $(el).val('');
  }
});

ReactiveForms.createElement({
  template: 'inputGroup',
});

ReactiveForms.createFormBlock({
  template: 'basicFormBlock',
  submitType: 'normal'
});

ReactiveForms.createElement({
  template: 'basicInput',
  validationEvent: 'keyup',
  reset: function (el) {
    $(el).val('');
  }
});