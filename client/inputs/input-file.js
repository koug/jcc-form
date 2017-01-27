Template.inputFileGen.events({
    "change input[type='file']": function(event, template){
        var tag = Template.currentData().tag,
            accept = Template.currentData().accept;
        $("#" + tag + "Status").text("");
        var mimeTypeArr = accept.split(/[\s,]+/);
         _.each(event.target.files, function(file) {
             if (mimeTypeArr.indexOf(file.type) === -1) {
                 $("#" + tag + "Status").text("File format not accepted");
                 return;
             }
             if (file.size > 1024 * 1024 * 2) {
                 $("#" + tag + "Status").text("File is too large and should be smaller than 2 MB. Current size: " + (file.size / 1024 / 1024).toFixed(2) + " MB");
                 return;
             }
             $("#" + tag + "Status").text("File uploading. Please wait...");

             $("button[type='submit']").prop("disabled", true);

             Meteor.saveFile(file, file.name, file.type, function(error, response) {
                 if (error) {
                     $("#" + tag + "Status").text("Error uploading file. Please try again.");
                     console.log("ERROR", error, error.getS);
                 }
                 else {
                     console.log("response", response);
                     $("#" + tag + "Status").text("File uploaded successfully.");
                     $("#" + tag + "Id").val(response);


                 }
                 $("button[type='submit']").prop("disabled", false);
             });
         })
    }
});

Template.inputFileGen.helpers({
    theId: function() {
        return Template.currentData().tag + "Id";
    }
});
