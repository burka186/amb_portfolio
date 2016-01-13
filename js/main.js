var app = app || {};

app.main = (function(){

	console.log('Loading app.');

	var attachEvents = function(){

		console.log('Attaching events.');

		$('#project-one').off('click').on('click', function() {
			$('#project-one-text').css('visibility', 'visible');
		});

		$('#project-two').off('click').on('click', function() {
			$('#project-two-text').css('visibility', 'visible');
		});
	
	};

	var init = function(){
		console.log('Initializing app.');
		attachEvents();
	};

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);