Router.route('/',  {
	name: 'form',
	layoutTemplate: 'layout',
	template: 'familyForm'
})
// Router.route('/admin', function () {
// 	this.layout('layout');
// 	this.render('admin', {
// 		data: function() {
// 			return Applications.find({});
// 		}
// 	});
// });
Router.route('/admin', {
	name: 'admin',
	template: 'admin',
	// loadingTemplate: 'loading',
	layoutTemplate: 'layout',
	waitOn: function() {
		return Meteor.subscribe('applications', false);
	}
});
Router.route('/test', function () {
	this.layout('layout')
	this.render('test');
});
Router.route('/admin/:_id', {
	name: 'adminEdit',
	template: 'adminEdit',
	layoutTemplate: 'layout',
	data: function () {
      return Applications.findOne({_id: this.params._id});
 	},
	waitOn: function() {
		return Meteor.subscribe("application", this.params._id);
	}
});
Router.route('/report', {
	name: 'report',
	template: 'report',
	layoutTemplate: 'layout',
	waitOn: function() {
		return Meteor.subscribe("reports");
	}
});
Router.route('/report/:_id', {
	name: 'reportEdit',
	template: 'reportEdit',
	layoutTemplate: 'layout',
	data: function () {
      return Applications.findOne({_id: this.params._id});
 	},
	waitOn: function() {
		return Meteor.subscribe("application", this.params._id);
	}
});
Router.route('/confirmation/:_id', {
	name: 'confirmation',
	template: 'confirmation',
	layoutTemplate: 'layout',
	data: function() {
		return this.params._id;
	}
});

Router.route('/files/:id', function() {
	var self = this;
	Meteor.call('getFile', this.params.id, function(error, response) {
		if (error) {
			self.response.end("error " + error);
		}
		else {
			self.response.end(response.blob, "BINARY");
		}

	})
}, {where:'server'});

// user with no role
if (Meteor.isClient) {
	var mustBeSignedIn = function() {
	    if (!(Meteor.user() || Meteor.loggingIn())) {
	        Router.go('form');
	    } else {
	        this.next();
	    }
	};
	Router.onBeforeAction(mustBeSignedIn, {except: ['form', 'confirmation']});
}
