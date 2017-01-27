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
        value = $(el).val();
        return clean(value, {
            removeEmptyStrings: true
        });
    },
    reset: function(el) {
        $(el).val('');
    },
});

// ReactiveForms.createElement({
//     template: 'inputFile',
//     validationEvent: 'change', // Can also be an array of events as of 1.13.0!
//     validationValue: function(el, clean, template) {
//         // This is an optional method that lets you hook into the validation event
//         // and return a custom value to validate with.
//
//         // Shown below is the ReactiveForms default. Clearly, this won't work in the case
//         // of a multi-select form, but you could get those values and put them in an array.
//
//         // The `clean` argument comes from SimpleSchema, but has been wrapped--
//         // it now takes and returns just a value, not an object.
//         console.log('file!');
//         value = $(el).val();
//         // for (var i = 0, f; f = el.files[i]; i++) {
//         //     var reader = new FileReader();
//         //
//         //     reader.onload = (function(f){
//         //         var fileName = f.name;
//         //         return function(e){
//         //             console.log(fileName);
//         //             console.log(e.target.result);
//         //         };
//         //     })(f);
//         //
//         //     reader.readAsArrayBuffer(f);
//         // }
//
//         return el.files[0];
//         // return clean(value, {
//         //     removeEmptyStrings: false
//         // });
//     },
//     reset: function(el) {
//         $(el).val('');
//     }
// });
ReactiveForms.createElement({
    template: 'inputTextarea',
    validationEvent: 'keyup',
    validationValue: function(el, clean, template) {
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
      value = $(el).is(':checked');
      return value;
      //return clean(value, { removeEmptyStrings: false });
    },
    reset: function(el) {
        $(el).val('');
    }
});

ReactiveForms.createElement({
  template: 'inputSelect',
  validationEvent: 'change',
  validationValue: function (el, clean, template) {
    return $(el).val();
  }
});

ReactiveForms.createElement({
  template: 'inputHidden',
  passThroughData: true,
  validationEvent: 'change',
  validationValue: function (el, clean, template) {
    return $(el).val();
  }
});

ReactiveForms.createElement({
    template: 'inputText',
});

ReactiveForms.createElement({
    template: 'inputDate',
    validationEvent: 'change',
});

ReactiveForms.createElement({
    template: 'displayElement'
})
