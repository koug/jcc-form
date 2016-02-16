Router.route('/', function () {
	this.layout('layout')
	this.render('familyForm');
})
Router.route('/admin', function () {
	this.layout('layout')
	this.render('admin');
})
Router.route('/admin/:_id', function () {
	this.layout('layout')
  	this.render('adminEdit', {
    data: function () {
      return Applications.findOne({_id: this.params._id});
    }
  });
});
