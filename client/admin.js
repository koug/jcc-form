Template.admin.helpers({
  applications: function() {
    if (Session.equals("app", undefined)) {
       return Applications.find(
         {},
         { sort: { _id: -1 } }
       ); 
    }
    else { 
        return Applications.find(
          { applicationType: Session.get("app").applicationType }, 
          { sort: { _id: -1 } }
        );
    }
  },
  selectedAppTitle: function() { 
    if (Session.equals("app", undefined) ) {
        return "All";
    }
    else { 
       return Session.get("app").title;
    }
  },
  applicationTypes: function(){
    return ApplicationType.find({});
  },
  name: function() {

    switch (this.applicationType) {
      case "israel": return this.firstName + this.lastName; 
      case "highschool": return this.mainContact; 
      case "stuartjdrell": return this.mainContact; 
      case "profdevind": return this.mainContact; 
      case "profdevgroup": return this.mainContact; 
      case "csg": return this.applicant; 
      case "csg": return this.organization; 
      default: return this.parentsGuardians;
    }
  }
});

Template.admin.events({
  "click a.app": function() { 
    if (_.isEmpty(this)) {
      Session.set("app", undefined)
    }
    else
    {
       Session.set("app", this);
    }
    $(".dropdown").removeClass("open");
    return false;
  }
})

Template.adminEdit.helpers({
  data: function(){
    return Template.instance().data;
  },
  docId: function(){
    return Template.instance().data.taxReturnId;
  },
  schema: function() {
    return familyFormSchema;
  },
  action: function() {
    return function(els, callbacks, changed) {

      // Router.go('/expensesForm')
      console.log("[forms] Action running!");
      console.log("[forms] Form data!", this);
      console.log("[forms] HTML elements with `.reactive-element` class!", els);
      console.log("[forms] Callbacks!", callbacks);
      console.log("[forms] Changed fields!", changed);
      this.dateAdminReview = new Date();

      var idSelector = this._id;
      Applications.update({_id:idSelector}, {$set:{
        dateAdminReview: new Date(),
        adminComments: this.adminComments,
        adminStatus: this.adminStatus
      }});

      callbacks.success(); // Display success message.
      callbacks.reset();   // Run each Element's custom `reset` function to clear the form.

      Router.go("/admin");

      console.log("sub");
    };
  }

});
