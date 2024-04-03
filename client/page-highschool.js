Template.highschool.helpers({
    appType: function() {
        var data = Template.currentData();
        return data;
    },
    schema: function() {
        var mySchema = highschoolSchema;

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
            this.studentQuestionnaireId = $("#studentQuestionnaireId").val();
            this.essayId = $("#essayId").val();
            this.hsTransId = $("#hsTransId").val();
            this.colAcceptId = $("#colAcceptId").val();
            // this.noteAknowledgementId = $("#noteAknowledgementId").val();

            var missingFiles = [];
            if (this.taxReturnId === "") missingFiles.push("tax return");
            if (this.studentQuestionnaireId === "") missingFiles.push("applicant financial questionnaire");
            if (this.essayId === "") missingFiles.push("essay");
            if (this.hsTransId === "") missingFiles.push("high scool transcript");
            if (this.colAcceptId === "") missingFiles.push("college acceptance letter");
            // if (this.noteAknowledgementId === "") missingFiles.push("note of aknowledgement");

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

Template.highschool.onRendered(function () {
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

Template.highschoolEdit.helpers({
    appType: function() {
        var data = Template.currentData();
        return data;
    },
    schema: function() {
        var mySchema = highschoolSchema;

        return mySchema;
    },
  taxReturnId: function() {
    return Template.currentData().data.taxReturnId;
  },
  studentQuestionnaireId: function() {
    return Template.currentData().data.studentQuestionnaireId;
  },
  studentTaxReturnId: function() {
    return Template.currentData().data.studentTaxReturnId;
  },
  essayId: function() {
    return Template.currentData().data.essayId;
  },
  cr1Id: function() {
    return Template.currentData().data.cr1Id;
  },
  cr2Id: function() {
    return Template.currentData().data.cr2Id;
  },
  cr3Id: function() {
    return Template.currentData().data.cr3Id;
  },
  hsTransId: function() {
    return Template.currentData().data.hsTransId;
  },
  colAcceptId: function() {
    return Template.currentData().data.colAcceptId;
  },
  noteAknowledgementId: function() {
    return Template.currentData().data.noteAknowledgementId;
  },
});

