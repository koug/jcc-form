
Template.admin.helpers({
    applications: function() {
        return Applications.find({});
    }
});

Template.adminEdit.helpers({
    data: function(){
        return Template.instance().data;
    },
    schema: function() {
        return familyFormSchema;
    },

});
