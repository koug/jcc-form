Template.registerHelper('nestedFieldOptions', function(field, index) {
	return field.replace('$', index);
}); 
Template.registerHelper('mapMultiple', function(obj) {
	return _.map(obj, function(o, i) {
       return { index: i, obj: o };
    });
}); 