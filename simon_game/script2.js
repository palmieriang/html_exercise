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
		$('.count').removeClass('led-off');
		
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

	$('.green').on('mousedown', function() {
		if(!running) {
			return;
		}
		$(this).addClass('light');
		greenSound.play();
	}).on('mouseup', function() {
		if(!running) {
			return;
		}
		$(this).removeClass('light');
	});

	$('.red').on('mousedown', function() {
		if(!running) {
			return;
		}
		$(this).addClass('light');
		redSound.play();
	}).on('mouseup', function() {
		if(!running) {
			return;
		}
		$(this).removeClass('light');
	});

	$('.yellow').on('mousedown', function() {
		if(!running) {
			return;
		}
		$(this).addClass('light');
		yellowSound.play();
	}).on('mouseup', function() {
		if(!running) {
			return;
		}
		$(this).removeClass('light');
	});

	$('.blue').on('mousedown', function() {
		if(!running) {
			return;
		}
		$(this).addClass('light');
		blueSound.play();
	}).on('mouseup', function() {
		if(!running) {
			return;
		}
		$(this).removeClass('light');
	});

	function player(btnPush) {
		console.log('Player');
		if(!running) {
			return;
		}
		btnID = btnPush;
		console.log(btnID);

		endCheck(btnPush, playerTurns);
		playerTurns++;

		if(playerTurns<seqArray.length) {
			return;
		}
		nextRound();
	}

	function endCheck(btnPush, i) {
		if(i > winRounds) {
			alert('Winer!');
			$('.count').html('--');
			seqArray = [];
			i = 0;
			this.i = 0;
			var btnID = '';
			var playerTurns = 0;
			if(interval) {
				clearInterval(interval);
				interval = null;
			}
		} else if((btnPush !== seqArray[i]) && strictMode == false) {
			$('.count').html('!!');
			wrongAns.play();
			$('.count').html('!!');
			playSeq(seqArray);
		} else if((btnPush !== seqArray[i]) && strictMode == true) {
			$('.count').html('!!');
			wrongAns.play();
			$('.count').html('--');
			seqArray = [];
			this.i = 0;
			var btnID = '';
			var playerTurns = 0;
			if (interval) {
				clearInterval(interval);
				interval = null;
			}
		}
	}

	function nextRound() {
		console.log("I = " + i);
		$('.count').html(i + 1);
		seqArray.push(getRandomArbitrary(0,4));
		playSeq(seqArray);
		i++;
	}

	$('.push').on('click', function() {
		if(!running) {
			return;
		}
		btnPush = Number(this.id);

		player(btnPush);
	});

	function playerTurn() {
		playerTurns = 0;
	}

	function playSeq(seqArray) {
		var j = 0;
		if(interval === null) {
			interval = setInterval(function() {
				playIt(seqArray[j]);
				flashIt(seqArray[j]);
				j++;
				if(j >= seqArray.length) {
					clearInterval(interval);
					interval = null;
					playerTurn();
				}
			}, 1000);
		}
	}

	function flashIt(j) {
		if(j == 0) {
			$('.green').addClass('light');
			setTimeout(function() {
				$('.green').removeClass('light');
			}, 300);
		}

		if(j == 1) {
			$('.red').addClass('light');
			setTimeout(function() {
				$('.red').removeClass('light');
			}, 300);
		}

		if(j == 2) {
			$('.yellow').addClass('light');
			setTimeout(function() {
				$('.yellow').removeClass('light');
			}, 300);
		}

		if(j == 3) {
			$('.blue').addClass('light');
			setTimeout(function() {
				$('.blue').removeClass('light');
			}, 300);
		}
	}

	function playIt(j) {
		if(j == 0) {
			greenSound.play();
		}

		if(j == 1) {
			redSound.play();
		}

		if(j == 2) {
			yellowSound.play();
		}

		if(j == 3) {
			blueSound.play();
		}
	}

	function getRandomArbitrary(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

});
