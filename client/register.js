// ReactiveForms.createElement({
// 	template: 'testForm',
// 	validationEvent: 'keyup'
// });
ReactiveForms.createFormBlock({
  template: 'jccForm',
  submitType: 'normal'
});

ReactiveForms.createElement({
  template: 'textInput',
  validationEvent: 'keyup',
  reset: function (el) {
    $(el).val('');
  }
});