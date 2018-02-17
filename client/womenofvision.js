Template.wrapperObject.helpers({
  keys: function() {
    let item = Template.parentData();
    let schema = Template.currentData().schema;
    return _.map(schema._objectKeys[item + "."], function(key) { return item + "." + key; });

  },
  data: function() {
    return { item: Template.currentData(), schema: Template.parentData().schema }
  },
});
Template.wrapperForm.helpers({
  isObject: function(item) {
    let schema = Template.parentData().schema;
    if (schema._objectKeys[item + "."] != undefined) return true;
    return false;
  },
  keys: function()
  {
    let item = Template.currentData();
    let schema = Template.parentData().schema;
    return _.map(schema._objectKeys[item + "."], function(key) { return item + "." + key; });
  },
  data: function() {
    let item = Template.currentData();
    let schema = Template.parentData().schema;
    return { item: item, schema: schema }
  },
  data2: function() {
    let item = Template.currentData();
    let schema = Template.parentData(2).schema;
    return { item: item, schema: schema }
  },
  theSchema: function() {
    return Template.parentData().schema;
  }
});
Template.womenofvision.helpers({
  appType: function() {
    let data = Template.currentData();
    return data;
  },
  schema: function() {
    let mySchema = womenofvisionSchema;

    return mySchema;
  },
  action: function() {
    return function(els, callbacks, changed) {

      // Router.go('/expensesForm')
      console.log("[forms] Action running!");
      console.log("[forms] Form data!", this);
      console.log("[forms] HTML elements with `.reactive-element` class!", els);
      console.log("[forms] Callbacks!", callbacks);
      console.log("[forms] Changed fields!", changed);

      this.taxReturnId = $("#taxReturnId").val();
      this.aidLetterId = $("#aidLetterId").val();

      // Make sure to check files as hidden validations don't work
      //
      Meteor.call('insertApplication', this, function(error, result) {
        callbacks.success();
        Router.go("/confirmation/" + result);
      });
      //callbacks.reset();   // Run each Element's custom `reset` function to clear the form.

    };
  }
});

Template.womenofvisionEdit.helpers({
  appType: function() {
    var data = Template.currentData();
    if (data === null) {
      data = {};
    }
    return data;
  },
  schema: function() {
    var mySchema = womenofvisionSchema;

    return mySchema;
  },
});

