/*
*
* contact_form.js - Moon Template
* Processes the Information Submitted
*
*/

$(document).ready(function() {

	// Enable User Strict Mode
	'use strict';

	// Form is submitted
	$('.btn-default').on("click", function(){

		// Store name, email and message
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		
		// Cleans previous message
		$("#returnmessage").empty();
	
		// Checks for blank fields
		if (name == '' || email == '') {
			alert("Please fill the required fields.");
		} else {
			$("#returnmessage").append("<div class='contact_message'>Your message was successfully sent!</div>");
		}

	// Ends Submission
	return false;

	});

});