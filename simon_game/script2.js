// br backg by s

$(document).ready(function() {


	var strictMode = false;
	var btnID = '';
	var seqArray = [];
	var i = 0;
	var running = false;
	var interval = null;
	var playerTurns = 0;
	var winRounds = 20;

	var greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
	var redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
	var yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
	var blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
	var wrongAns = new Audio('http://scottemcwilliams.com/imagedep/242503__gabrielaraujo__failure-wrong-action.wav');

	// $('#pwr-sw').on('click', function() {

	// 	$('#pwr-sw').toggleClass('sw-on');
	// 	if (running) {
	// 		console.log(1);
	// 		running = false;
	// 		$('#pwr-sw').removeClass('sw-on');
	// 		$('.count').addClass('led-off');
	// 		seqArray = [];
	// 		i = 0;
	// 		if (interval) {
	// 			clearInterval(interval);
	// 			interval = null;
	// 		}
	// 	} else {
	// 		console.log(2);
	// 		running = true;
	// 		startButton();
	// 		$('.count').removeClass('led-off');
	// 		$('.count').text('--');
	// 	}
	// });

	$('#pwr-sw').on('click', function() {
		$('#pwr-sw').toggleClass('sw-on');
		if(running) {
			$('#pwr-sw').removeClass('sw-on');
			running = false;
			$('.count').addClass('led-off');
			seqArray = [];
			i = 0;
			if (interval) {
				clearInterval(interval);
			interval = null;
			}
			return;
		}
		running = true;
		$('.count').text('--');

		$('#start').on('click', function(e) {
			if(!running) {
				return;
			}
			$('.count').text('--');
			seqArray = [];
			i = 0;
			this.i = 0;
			var btnID = "";
			var playerTurns = 0;
			if(interval) {
				clearInterval(interval);
				interval = null;
			}
			nextRound();
		});
	});

	$('#strict').on('click', function(e) {
		$('#mode-led').toggleClass('led-on');
		if(!strictMode) {
			strictMode = true;
		} else {
			strictMode = false;
		}
	});













});
