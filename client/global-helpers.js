Template.registerHelper('nestedFieldOptions', function(field, index) {
	return field.replace('$', index);
}); 