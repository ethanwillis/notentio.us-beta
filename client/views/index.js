// When our counter is rendered, draw the flip-down counter
// with out jquery library
Template.signup_counter.rendered = function() {
	$('#signupCounter').flipcountdown({ size: 'lg', tick: 1000});
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
