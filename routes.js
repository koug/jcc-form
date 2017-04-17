// user with no role
if (Meteor.isClient) {
	var mustBeSignedIn = function() {
	    if (!(Meteor.user() || Meteor.loggingIn())) {
	        Router.go('form');
	    } else {
	        this.next();
	    }
	};
	Router.onBeforeAction(mustBeSignedIn, {
		except: [
			'form',
			'confirmation',
			'israel',
			'highschool',
			'stuartjdrell',
			'root'
		]
	});
}

Router.route('/', {
	name: 'root',
	action: function() {
		this.redirect('/form/religious');
	}
});
Router.route('/israel', {
	layoutTemplate: 'layout',
	data: function() {
		return ApplicationType.findOne({applicationType: "israel"});
	},
	waitOn: function() {
		return Meteor.subscribe("applicationType", "israel");
	}
});
Router.route('/highschool', {
	layoutTemplate: 'layout',
	data: function() {
		return ApplicationType.findOne({applicationType: "highschool"});
	},
	waitOn: function() {
		return Meteor.subscribe("applicationType", "highschool");
	}
});
Router.route('/stuartjdrell', {
	layoutTemplate: 'layout',
	data: function() {
		return ApplicationType.findOne({applicationType: "stuartjdrell"});
	},
	waitOn: function() {
		return Meteor.subscribe("applicationType", "stuartjdrell");
	}
});
Router.route('/form/:type',  {
	name: 'form',
	layoutTemplate: 'layout',
	template: 'familyForm',
	data: function() {
		return ApplicationType.findOne({applicationType: this.params.type});
	},
	waitOn: function() {
		return Meteor.subscribe("applicationType", this.params.type);
	}
});
Router.route('/admin', {
	name: 'admin',
	template: 'admin',
	// loadingTemplate: 'loading',
	layoutTemplate: 'layout',
	waitOn: function() {
        return [
            function() { return Meteor.subscribe('applications', false); },
            function() { return Meteor.subscribe('applicationTypes'); }
        ];
		//return Meteor.subscribe('applications', false);
	}
});
// Router.route('/test', function () {
// 	this.layout('layout')
// 	this.render('test');
// });
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
Router.route('/admin/:type/:_id', {
  name: 'adminWrapper',
  layoutTemplate: 'layout',
  data: function () {
    var apps = Applications.findOne({_id: this.params._id});
    return apps;
  },
  waitOn: function() {
    return Meteor.subscribe("application", this.params._id);
  },
  action: function() {
    var templ;
    if (['israel', 'highschool', 'stuartjdrell'].indexOf(this.params.type) != -1) {
      templ = this.params.type + "Edit";
    }
    else templ = 'AdminEdit';
    this.render(templ);
  }
});
Router.route('/reports', {
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

Router.route('/reportexport/:type', function() {
	var self = this;
	Meteor.call('reportExport', this.params.type, function(error, response) {
		if (error) {
			self.response.end("error: " + error);
		}
		else {
		    // The hard-coded attachment filename
		    var attachmentFilename = self.params.type + '.csv';
			//
		    // // Set the headers
		    self.response.writeHead(200, {
		        'Content-Type': 'text/csv',
		        'Content-Disposition': 'inline; filename=' + attachmentFilename
		    });
			//
		    // Pipe the file contents to the response
		    self.response.end(response);
		}
	})
}, {where:'server'});
