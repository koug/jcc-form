Template.onehappycamper.helpers({
  appType: function() {
    var data = Template.currentData();
    return data;
  },
  schema: function() {
    var mySchema = onehappycamperSchema;

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

Template.onehappycamper.onRendered(function () {
  // Use the Packery jQuery plugin
  if (new Date() > Template.currentData().dateSub) {
      this.$('#message').show();
      this.$('#the-form').hide();
  }
  else {
      this.$('#message').hide();
      this.$('#the-form').show();
  }
});



Template.inputCampers.onCreated(function() {
  this.num = new ReactiveVar(1);
});

Template.inputCampers.events({
  'click .campers .add': function(event) {
    event.preventDefault();
    var num = Template.instance().num.get();
    Template.instance().num.set(++num);
  },
  'click .campers .remove': function(event) {
    event.preventDefault();
    var num = Template.instance().num.get();
    Template.instance().num.set(--num);
  }
})

Template.inputCampers.helpers({
  numberOfFields: function() {
    var num = Template.instance().num.get();
    return Template.instance().num.get();
  },
});

Template.onehappycamperEdit.helpers({
    appType: function() {
        var data = Template.currentData();
        if (data === null) {
            data = {};
        }
        return data;
    },
    typeDesc: function() {
        return Template.currentData().desc;
    },
    schema: function() {
        var mySchema = onehappycamperSchema;

        return mySchema;
    },
  taxReturnId: function() {
    return Template.currentData().data.taxReturnId;
  },
  essayId: function() {
    return Template.currentData().data.essayId;
  },
  aidLetterId: function() {
    return Template.currentData().data.aidLetterId;
  },
});

Template.inputCampersEdit.onCreated(function() {
  this.num = new ReactiveVar(1);
});

Template.inputCampersEdit.helpers({
  numberOfFields: function() {
    let obj = Template.instance().data.data.campers;
    return Object.keys(obj).length;
  },
});
