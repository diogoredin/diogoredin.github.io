/*
*
* contact_form.js - Moon Template
* Processes the Information Submitted
*
*/

$(document).ready(function () {

	// Enable User Strict Mode
	'use strict';

	// Form is submitted
	$('#contact_form').on("submit", function () {

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

			$.ajax({
				url: "https://formspree.io/diogoredin@gmail.com",
				method: "POST",
				data: { message: message },
				dataType: "json",
				success: function (data) {
					$("#returnmessage").append(data);
					$("#contact_form")[0].reset();
				}
			});

		}

		// Ends Submission
		return false;

	});

});