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
	$('#contact_form').on("submit", function(){

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

			// Process the data
			$.post("../../process/contact_form.php", {
				name1: name,
				email1: email,
				message1: message
			}, function(data) {

				// Display returned message
				$("#returnmessage").append(data);
				
				// Reset the fields if the message was successfuly sent
				if (data == "<div class='contact_message'>Your message was successfully sent!</div>") {
					$("#contact_form")[0].reset();
				}

			});
		
		}

	// Ends Submission
	return false;

	});

});