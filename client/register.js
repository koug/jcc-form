ReactiveForms.createFormBlock({
    template: 'formJCC',
    submitType: 'normal'
});
ReactiveForms.createFormBlock({
    template: 'formView',
    submitType: 'normal'
});

ReactiveForms.createElement({
    template: 'inputSimple',
    validationEvent: 'keyup',
    validationValue: function(el, clean, template) {
        console.log('Specifying my own validation value!' + $(el));
        value = $(el).val();
        return clean(value, {
            removeEmptyStrings: true
        });
    },
    reset: function(el) {
        $(el).val('');
    },
});

ReactiveForms.createElement({
    template: 'inputTextarea',
    validationEvent: 'keyup',
    validationValue: function(el, clean, template) {
        console.log('Specifying my own validation value!' + $(el));
        value = $(el).val();
        return clean(value, {
            removeEmptyStrings: true
        });
    },
    reset: function(el) {
        $(el).val('');
    }
});

ReactiveForms.createElement({
    template: 'inputCheckbox',
    validationEvent: ['keyup', 'click'],
    validationValue: function (el, clean, template) {
      console.log('Specifying my own validation value!', $(el).is(':checked'));
      value = $(el).is(':checked');
      return value;
      //return clean(value, { removeEmptyStrings: false });
    },
    reset: function(el) {
        $(el).val('');
    }
});

ReactiveForms.createElement({
    template: 'inputText',
});

ReactiveForms.createElement({
    template: 'displayElement'
})
