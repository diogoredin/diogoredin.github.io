/*
*
* mailchimp.js - Moon Template
* Processes the new Subscription Email
*
*/

$(document).ready(function() {

	// Enable User Strict Mode
	'use strict';

	// Form is submitted
	$('#mailchimp_form').on("submit", function(){

		// Grabs the attributes and values from the form
		var data = {email: $('#mailchimp_email').val()};
		var endpoint = $(this).attr('action');

		// Make the ajax request
		$.ajax({
			method: 'POST',
			dataType: "json",
			url: endpoint,
			data: data
		}).success(function(data){

			// Sucess
			if(data.id){

				$("p#newsletter_message").empty();
				$("p#newsletter_message").append('Thanks for signing up.');

			// Memeber already subscribed
			} else if (data.title == 'Member Exists') {

				$("p#newsletter_message").empty();
				$("p#newsletter_message").append('Thanks, but you are alredy signed up.');

			// Another Error
			} else {

				$("p#newsletter_message").empty();
				$("p#newsletter_message").append('Sorry but there is something wrong. Please try later.');

			}

		// Connection or Sever Error
		}).error(function(){
		
			$("p#newsletter_message").empty();
			$("p#newsletter_message").append('Sorry but there is something wrong. Please try later.');

		});

	// Ends Submission
	return false;

	});

});