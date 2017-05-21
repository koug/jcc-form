Template.israel.helpers({
    appType: function() {
        var data = Template.currentData();
        if (data === null) {
            data = {};
            data.country = 'US';
        }
        return data;
    },
    typeDesc: function() {
        return Template.currentData().desc;
    },
    schema: function() {
        var mySchema = israelSchema;

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
            this.taxReturnId = $("#taxReturnId").val();
            this.essayId = $("#essayId").val();
            this.recomId = $("#recomId").val();

            var missingFiles = [];
            if (this.taxReturnId === "") missingFiles.push("tax return");
            if (this.essayId === "") missingFiles.push("essay");
            if (this.recomId === "") missingFiles.push("recommendations");

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

Template.israel.events({
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

Template.israelEdit.helpers({
    appType: function() {
        var data = Template.currentData();
        if (data === null) {
            data = {};
            data.country = 'US';
        }
        return data;
    },
    typeDesc: function() {
        return Template.currentData().desc;
    },
    schema: function() {
        var mySchema = israelSchema;

        return mySchema;
    },
  taxReturnId: function() {
    return Template.currentData().data.taxReturnId;
  },
  essayId: function() {
    return Template.currentData().data.essayId;
  },
  recomId: function() {
    return Template.currentData().data.recomId;
  },
});
