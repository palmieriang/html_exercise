$(document).ready(function() {

	var running = false;

	$('.sw-slot').click(function(){
		$('#pwr-sw').toggleClass('sw-on');
		if($('#pwr-sw').hasClass('sw-on')==false){
			console.log(1);
			$('.count').text('--');
			$('.count').addClass('led-off');			
			$('.push').removeClass('clickable').addClass('unclickable');
			$('#start').click(function() {
				startGame();
			});

		}else{
			console.log(2);
			$('.count').removeClass('led-off');
			running = false;
		}
	});


	function startGame() {
		console.log('start');
	}



});