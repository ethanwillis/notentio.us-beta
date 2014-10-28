Template.leave_feedback.helpers ({
});

Template.leave_feedback.events ({
		'click #sendFeedback': function() {
			// insert fields into the feedback collection
			feedback.insert({'feedback': feedbackText.value, 'email': emailAddress.value, 'firstname': firstName.value, 'lastname': lastName.value});
			// Zero out form to allow for another piece of feedback to be received without a page reload
			feedbackText.value = "";
			emailAddress.value = "";
			firstName.value = "";
			lastName.value = "";
			// display an alert
			$("#successAlert").css('display', 'block');
		}
});

