// When our counter is rendered, draw the flip-down counter
// with out jquery library
Template.signup_counter.rendered = function() {
	$('#signupCounter').flipcountdown({ size: 'lg', tick: 1000});
}

Template.index.rendered = function() {
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-56146416-1', 'auto');
  ga('send', 'pageview');
}

Template.signup_form.events({
	'click #signupBtn': function(evnt, tmpl) {
		var email = emailAddress.value;
		var receive_communications = receiveCommunications.checked;
		beta_signup.insert({'email_address': email, 'receive_communications': receive_communications}); 
		$("#successAlert").css('display', 'block');
	},
	'submit #signupForm': function(evnt) {
		var email = emailAddress.value;
		var receive_communications = receiveCommunications.checked;
		beta_signup.insert({'email_address': email, 'receive_communications': receive_communications});
		$("#successAlert").css('display', 'block');
		return false;
	}

});
