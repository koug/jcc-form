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

Template.registerHelper("logVar", function(input) {
    console.log(input);
});
Template.registerHelper("isZero", function(index) {
    return index === 0;
});
Template.registerHelper("jump", function(index) {
    $('html, body').animate({
        scrollTop: $("input.error:first").offset().top
    }, 500);
    $("input.error:first").focus();
});

Template.registerHelper("or", function(arg1, arg2){
    return arg1 || arg2;
});

Template.registerHelper("stateName", function(key){
    return states[key];
});

Template.registerHelper("countryName", function(key){
    return countries[key];
});

Template.registerHelper("logVar", function(theVar){
    console.log(theVar);
});
Template.registerHelper("objToArray", function(obj){
    var arr = [];
    for (var key in obj) {
        arr.push(obj[key]);
    }
    return arr;
});
Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM-DD-YYYY');
});
Template.registerHelper('formatDateNice', function(date) {
  return moment(date).format('dddd, MMMM DD, YYYY');
});
