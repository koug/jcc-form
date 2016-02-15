ReactiveForms.createFormBlock({
  template: 'formJCC',
  submitType: 'normal'
});

ReactiveForms.createElement({
  template: 'inputSimple',
  validationEvent: 'keyup',
  validationValue: function (el, clean, template) {
    console.log('Specifying my own validation value!' + $(el));
    value = $(el).val();
    return clean(value, {removeEmptyStrings: true});
  },
  reset: function (el) {
    $(el).val('');
  }
});

ReactiveForms.createElement({
  template: 'inputTextarea',
  validationEvent: 'keyup',
  validationValue: function (el, clean, template) {
    console.log('Specifying my own validation value!' + $(el));
    value = $(el).val();
    return clean(value, {removeEmptyStrings: true});
  },
  reset: function (el) {
    $(el).val('');
  }
});

ReactiveForms.createElement({
  template: 'inputCheckbox',
  validationEvent: 'change',
  validationValue: function (el, clean, template) {
    console.log('Specifying my own validation value!' + $(el));
    value = $(el).val();
    return clean(value, {removeEmptyStrings: true});
  },
  reset: function (el) {
    $(el).val('');
  }
});

ReactiveForms.createElement({
  template: 'inputText',
});
