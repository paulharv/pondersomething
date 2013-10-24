$(document).ready(function(){
	$('.container section').first().removeClass('hidden');
	$('nav a').click(function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		console.log(id);
		$('.container section').addClass('hidden');
		$(id)
			.removeClass('hidden')
			.removeClass('offstage')
			.addClass('onstage');
		$('.ponder').removeClass('onstage').addClass('offstage');
		$('header.main').removeClass('hidden');
		$('nav').removeClass('hidden');
	});
	$('article').click(function(){
		$('header.main').addClass('hidden');
		$('nav').addClass('hidden');
		$('.container section').addClass('offstage');
		$('.ponder').removeClass('offstage').addClass('onstage');
		$('#ponderControls').removeClass('hidden').addClass('faintlyVisible');
	});
	$('.next, .prev').click(function(e){
		e.preventDefault();
		var direction = ($(this).attr('class').indexOf('next'))>-1 ? 'next' : 'prev';
		var currentPhrase = $('.currentPhrase');
		var nextPhrase = direction=='prev' ? currentPhrase.prev('p') : currentPhrase.next('p');
		currentPhrase.removeClass('currentPhrase');
		nextPhrase.addClass('currentPhrase');
		var text = nextPhrase.text();
		console.log(text);
		$('.phrase').addClass('hidden');
		setTimeout(function() {
			$('.phrase').removeClass('hidden');
			$('.phrase').text(text);
		}, 1000);
	});
});