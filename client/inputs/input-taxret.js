Template.inputFile.events({
    "change #taxRet": function(event, template){
         _.each(event.target.files, function(file) {
             if (file.type != 'application/pdf'
                && file.type != 'image/jpeg'
                && file.type != 'image/png'
            ) {
                $("#taxRetStatus").text("Scans can only be PDF, JPEG OR PNG");
                return;
            }
            if (file.size > 1024*1024*2) {
                $("#taxRetStatus").text("File is too large and should be smaller than 2 MB. Current size: "
                    + (file.size/1024/1024).toFixed(2) + " MB");
                return;
            }
             $("#taxRetStatus").text("File uploading. Please wait...");
             $("button[type='submit']").prop("disabled", true);

             Meteor.saveFile(file, file.name, file.type, function(error, response) {
                 if (error) {
                     $("#taxRetStatus").text("Error uploading file. Please try again.");
                     console.log("ERROR", error, error.getS);
                 }
                 else {
                     console.log("response", response);
                     $("#taxRetStatus").text("File uploaded successfully.");
                     $("#taxReturnId").val(response);

                 }
                 $("button[type='submit']").prop("disabled", false);
             });
         })
    }
});

Template.inputFile.helpers({
  fullTaxReturn: function(){
    if (Template.currentData().appType == "highschool")
      return true;
    return false;
  }
});
