//Template.registerHelper('nestedFieldOptions', function(field, index) {
//	return field.replace('$', index);
//});

Template.registerHelper("nestedFieldOptions", function (name, kw) {
  kw.hash.field = name.replace(/\$/, kw.hash.index);
  return kw.hash;
});
Template.registerHelper("numberOfFieldsToArray", function (i) {
  var times = [];
  _.times(i, function (n) {
    times.push(n);
  });
  return times;
});

Template.registerHelper("add", function (a, i) {
  return a + i;
});

Template.registerHelper("logVar", function (input) {
  console.log(input);
});
Template.registerHelper("isZero", function (index) {
  return index === 0;
});
Template.registerHelper("jump", function (index) {
  $("html, body").animate(
    {
      scrollTop: $("input.error:first").offset().top,
    },
    500
  );
  $("input.error:first").focus();
});

Template.registerHelper("or", function (arg1, arg2) {
  return arg1 || arg2;
});

Template.registerHelper("stateName", function (key) {
  return states[key];
});

Template.registerHelper("countryName", function (key) {
  return countries[key];
});

Template.registerHelper("logVar", function (theVar) {
  console.log(theVar);
});
Template.registerHelper("objToArray", function (obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
});
Template.registerHelper("formatDate", function (date) {
  return moment(date).format("MM-DD-YYYY");
});
Template.registerHelper("formatDateNiceNoDay", function (date) {
  return moment(date).format("MMMM DD, YYYY");
});
Template.registerHelper("formatDateNice", function (date) {
  return moment(date).format("dddd, MMMM DD, YYYY");
});
Template.registerHelper("isNowAfter", function (date) {
  return moment().isAfter(date);
});
Template.registerHelper("getYear", function (date, addYear = 0) {
  return moment(date).add(addYear, "y").year();
});
Template.registerHelper("getTemplate", function (data) {
  let item = data.item;
  let schema = data.schema;
  let obj = schema._schema[item];

  if (item === "applicationType") return "inputHidden";
  if (obj.type === String && obj.option === "TextArea") return "inputTextarea";
  if (obj.type === String && obj.allowedValues != undefined)
    return "inputSelect";
  if (obj.type === String) return "inputText";
  return "inputText";
});
Template.registerHelper("getTabData", function (data) {
  let item = data.item;
  let schema = data.schema;
  //if (schema._objectKeys[item + "."] != undefined) return {schema: schema };

  let obj = schema._schema[item];
  let ret = { field: item, showLabel: true };

  if (obj.cl != undefined) ret.class = obj.cl;

  return ret;
});
