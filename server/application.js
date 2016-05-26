Meteor.publish('applications', function(includeReviewed) {
    if (includeReviewed) {
        return Applications.find({});
    }
    else {
        return Applications.find({adminStatus: {$ne: "Reviewed"}});
    }
});
Meteor.publish('reports', function() {
    return Applications.find({adminStatus: "Reviewed"});
});
Meteor.publish('application', function(id) {
    return Applications.find({ _id: id });
});
Meteor.publish('file', function(id) {
    return Files.find({ _id: id });
});
