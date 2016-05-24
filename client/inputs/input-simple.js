Template.inputSimple.events({
    "change input.expense": function(event, template){
        var sum = 0.0;
        $("input.expense").each(function() {
            var val = parseFloat(this.value);
            if (!_.isNaN(val)) sum += val;
        })
        $("#total-expenses span").text("Total: $" + sum);
    }
});
