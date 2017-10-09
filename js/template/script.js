/*
*
* script.js - Moon Template
* Animates Images and Adds Effects to Links
*
*/

$(document).ready(function() {
	
	// Enable User Strict Mode
	'use strict';

	// Focus Images and Logos
	$('.focus, .img-responsive').on( {

		// When mouse enters decrease opacity
		mouseenter: function () {
			$(this).stop().fadeTo(300,0.5);
    	},

    	// When mouse leaves increase opacity
		mouseleave: function () {
			$(this).stop().fadeTo(300,1);
		}

	});

	// Top Tabs, Menu Anchors and Go to Top
	$( "#tabs" ).tabs();
	$('ul#menu a, ul.dropdown-menu a, a#top').smoothScroll();

	// WayPoint Discover App
	$("#app_content").waypoint(function() {
		$('#app_content').addClass('fadeInLeft animated');
		$('.app_image').addClass('fadeInRight animated');
	}, { offset: '100%'});

});