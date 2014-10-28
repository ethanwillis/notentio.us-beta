Router.configure({
  layoutTemplate: 'main'
});

Router.onAfterAction(function() {
    var projectName='notentious_beta';
    if (this.route.name !== "index"){
        document.title = projectName + ' | ' + this.route.name.replace(/_/g, ' ');
    }
    else {
        document.title = projectName;
    }
});

Router.map(function () {

    this.route('index', {
        path: '/'
    });
		
		this.route('leave_feedback', {
				path: '/leave_feedback'
		});

});
