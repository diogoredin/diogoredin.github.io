$(document).ready(function() {
	'use strict';

	/* Enable LaTeX auto-detection and render */
	renderMathInElement(document.body);

	/* Retrieve previous mode selected */
	if (localStorage.getItem('mode') === 'dark') {
		$('#dark-mode').addClass('is-active');
	} else {
		$('#dark-mode').removeClass('is-active');
	}

	/* Allow changing of mode */
	$('#dark-mode').on('click', function() {
		if (localStorage.getItem('mode') === 'dark') {
			$('#dark-mode').removeClass('is-active');
			document.getElementById('dark-theme').disabled=true;
			localStorage.setItem('mode', 'light');
		} else {
			$('#dark-mode').addClass('is-active');
			document.getElementById('dark-theme').disabled=false;
			localStorage.setItem('mode', 'dark');
		}
	});

	/* Sign in and Sign up popup */
	$('#user-actions').on('click', function(event) {
		$('#user-dropdown').toggleClass('is-active');
		event.stopPropagation();
	});

	$(window).on('click', function() {
		$('#user-dropdown').removeClass('is-active');
	});

	/* Enable zoom on post and page images */
	$('.content img').attr('data-action', 'zoom');

	/* Add icons to prism toolbar */
	$('.code-toolbar pre.language-shell').next()
		.each(function() {
			const copyIcon = '<span class="icon"><i class="far fa-copy"></i></span>';
			const shellIcon = '<span class="icon"><i class="fas fa-terminal"></i></span>';

			$(this).find('.toolbar-item span').prepend(shellIcon);
			$(this).find('.toolbar-item button').prepend(copyIcon);
		});

	$('.code-toolbar pre.language-terminal').next()
		.each(function() {
			const copyIcon = '<span class="icon"><i class="far fa-copy"></i></span>';
			const terminalIcon = '<span class="icon"><i class="fas fa-window-maximize"></i></span>';

			$(this).find('.toolbar-item span').prepend(terminalIcon);
			$(this).find('.toolbar-item button').prepend(copyIcon);
		});

	$('.code-toolbar pre')
		.not('.language-shell, .language-terminal').next()
		.each(function() {
			const copyIcon = '<span class="icon"><i class="far fa-copy"></i></span>';
			const codeIcon = '<span class="icon"><i class="fas fa-code"></i></span>';

			$(this).find('.toolbar-item span').prepend(codeIcon);
			$(this).find('.toolbar-item button').prepend(copyIcon);
		});

	/* Remove empty bio */
	$('ul.author-links').each(function() {
		if (this.children.length === 0) {
			this.remove();
		}
	});

	/* Search */
	$('#search-field').ghostHunter({
		results: "#search-results",
		onKeyUp: true,
		zeroResultsInfo: false,
		displaySearchInfo: false,
		result_template:
			`<div id="gh-{{ref}}" class="gh-search-item">
				<div class="box">
					<div class="post-card-content">
						<h1 class="post-card-title">
							<a href="{{link}}">{{title}}</a>
						</h1>
						<p class="post-card-description">{{description}}</p>

						<nav class="level post-meta">
							<div class="level-left">

								<p class="date">
									<span class="icon">
										<i class="far fa-clock"></i>
									</span>
									{{pubDate}}
								</p>

							</div>
						</nav>
					</div>

				</div>
			</div>`
	});

	$('#open-search').on('click', function() {
		$('.search-overlay').fadeIn('fast', function() {
			$('body').addClass('no-scroll');
			$('form.search input').focus();
		});
	});

	$('#close-search').on('click', function() {
		$('body').removeClass('no-scroll');
		$('.search-overlay').fadeOut('fast');
	});

	/* Mobile menu */
	$('#open-menu').on('click', function() {
		$('.menu-overlay').fadeIn('fast');
	});

	$('#close-menu').on('click', function() {
		$('.menu-overlay').fadeOut('fast');
	});

	/* Show email submitted on loading input */
	$('.members-form').submit(function() {
		const originalInput = $(this).find('.members-form-controls input');
		const loadingInput = $(this).find('.members-form-controls-loading input');
		loadingInput.val(originalInput.val());
	});

	/* Sign top notifications */
	const urlParams = new URLSearchParams(window.location.search);

	/* e.g. converts action=subscribe&success=true to action-subscribe-success-true */
	const action = urlParams.toString().replace(/=|&/g, '-');
	const notification = `#${action}`

	/* Display the notification based on the dynamic ID */
	$(window).scrollTop(0);
	$(notification).slideDown(200, function() {
		$('html, body').delay('200').animate({
		scrollTop: $(this).offset().top
		}, 200);
	});

	$('.close-notification').on('click', function() {
		$(this).parent().remove();
	});

	/* Make top icons keyboard accessible */
	$('#user-dropdown').on('keyup', function(event) {
		if (event.keyCode == 13) {
			$('#user-actions').click();
		}
	});

	/* Enable close search with escape key */
	$('#user-dropdown').on('keyup', function(event) {
		if (event.keyCode == 27) {
			$('#user-actions').click();
		}
	});

	$('#dark-mode').on('keyup', function(event) {
		if (event.keyCode == 13) {
			$(this).click();
		}
	});

	$('#open-search').on('keyup', function(event) {
		if (event.keyCode == 13) {
			$(this).click();
		}
	});

	$('#close-search').on('keyup', function(event) {
		if (event.keyCode == 13) {
			$(this).click();
		}
	});

	/* Enable close search with escape key */
	$('.search-overlay').on('keyup', function(event) {
		if (event.keyCode == 27) {
			$('#close-search').click();
		}
	});
});