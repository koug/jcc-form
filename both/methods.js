if(Meteor.isServer){
    Meteor.methods({
        insertApplication:function(obj){
            if (Counters.find({}).fetch().length === 0) {
                setCounter("counters", "currentId", 10000);
            }
            var newId = incrementCounter("counters", "currentId");

            obj._id = newId.toString();
            obj.dataEntered = new Date();

            Applications.insert(obj);

            return newId;

        }
    });
}
