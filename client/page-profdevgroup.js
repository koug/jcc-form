Template.profdevgroup.helpers({
  appType: function() {
    var data = Template.currentData();
    if (data === null) data = {};
    return data;
  },
  schema: function() {
    var mySchema = profdevgroupSchema;

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

      // Make sure to check files as hidden validations don't work
      this.costdocId = $("#costdocId").val();
      this.costtravelId = $("#costtravelId").val();
      this.costlodgingId = $("#costlodgingId").val();
      this.boardBudgetId = $("#boardBudgetId").val();

      var missingFiles = [];
      if (this.costdocId === "") missingFiles.push("documentation stating cost of program");
      if (this.boardBudgetId === "") missingFiles.push("organization most recent board approved budget");

      if (missingFiles.length > 0) {
        var strFiles = missingFiles[0];
        for (var i = 1; i < missingFiles.length; i++) {
          strFiles += (i===missingFiles.length -1 ? " and " : ", ") +
            missingFiles[i];
        }
        callbacks.failed("Please upload all necessary files: " +
          missingFiles.join(", ") + " are missing");
      }
      else {
        Meteor.call('insertApplication', this, function(error, result) {
          callbacks.success();
          Router.go("/confirmation/" + result);
        });
      }
      //callbacks.reset();   // Run each Element's custom `reset` function to clear the form.

    };
  }
});

Template.profdevgroup.events({
  "change #program": function(event, template){
    var selectedOption = $("option:selected", "#" + this.id).text(),
      dateSummer = Template.currentData().dateSummer,
      dateGap = Template.currentData().dateGap,
      now = new Date();

    if ((selectedOption === "Summer Trip" && now > dateSummer) ||
      (selectedOption === "Gap Program" && now > dateGap)) {
      $("#message").show();
      $("#the-form").hide()
      $("button[type='submit']").hide();
    }
    else {
      $("#message").hide();
      $("#the-form").show()
      $("button[type='submit']").show();

    }
  },
  "change #more-funds": function() {
    if ($("#" + this.id).is(":checked")) $("#div-more-funds").show();
    else $("#div-more-funds").hide();
  }
});

Template.profdevgroupEdit.helpers({
  appType: function() {
    var data = Template.currentData();
    if (data === null) {
      data = {};
    }
    return data;
  },
  schema: function() {
    var mySchema = profdevgroupSchema;

    return mySchema;
  },
  costdocId: function() {
    return Template.currentData().data.costdocId;
  },
  costtravelId: function() {
    return Template.currentData().data.costtravelId;
  },
  costlodgingId: function() {
    return Template.currentData().data.costlodgingId;
  },
  boardBudgetId: function() {
    return Template.currentData().data.boardBudgetId;
  }
});
