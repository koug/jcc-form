//Template.registerHelper('nestedFieldOptions', function(field, index) {
//	return field.replace('$', index);
//});

Template.registerHelper('nestedFieldOptions', function(name, kw) {
  kw.hash.field = name.replace(/\$/, kw.hash.index);
  return kw.hash;
});
Template.registerHelper('numberOfFieldsToArray', function(i) {
    var times = [];
    _.times(i, function(n) {
        times.push(n);
    })
    return times;
});

Template.registerHelper("logVar", function(input){
    console.log(input);
});
Template.registerHelper("isZero", function(index){
    return index === 0;
});
