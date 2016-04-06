Template.inputSelect.helpers({
    selected: function(val){
        return this.valueOf() === val ? "selected" : "";
    },
});
