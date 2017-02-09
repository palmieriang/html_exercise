$(document).ready(function() {

	var minutesInit = parseInt($('#count').html());

	var minutes = minutesInit; //I need this variable to restart the timer

	var minutesBreakInt = parseInt($('#countBreak').html());

	var minutesBreak = minutesBreakInt; //I need this variable to restart the break timer

	var running = false; //With this variable I can check if the main function is already running

	$('.progress-bar').hide();

	var counter = null; //If the main function is already running, I can stop it with this variable

//  This function starts the countdown
	$('.startStop').click(function() {
		
		if (!running) {	//If running = false it starts and sets the variable = true

			running = true;

			$('.fa-power-off').css('color', 'green'); //Change On/Off icon color. Red --> green

			counter = setInterval(timer, 1000);

			minutes*=60;

			function timer() {

				$('.timer00').hide();

				minutes--;

				var percentage = minutes / (minutesInit*60) * 100;

				$('.progress-bar-left').show();

				$('.heart').toggleClass('flash-icon');

				$('.loading-left').height(percentage+'%');

				if(minutes===0) {
					clearInterval(counter);
					$('.progress-bar-left').hide();
					minutesBreak = minutesBreakInt;
					var startBreak = setInterval(breakTimer, 1000);
				}

				if(minutes%60>=10) {
					$('#count').html('0'+Math.floor(minutes/60)+':'+minutes%60);
				} else {
					$('#count').html('0'+Math.floor(minutes/60)+':'+'0'+minutes%60);
				}

				minutesBreak*=60;

				function breakTimer() {

					$('.break00').hide();

					minutesBreak--;

					var percentage = minutesBreak / (minutesBreakInt*60) * 100;

					$('.progress-bar-right').show();

					$('.loading-right').height(percentage+'%');

					if(minutesBreak===0) {
						clearInterval(startBreak);
						$('.progress-bar-right').hide();
						minutes = minutesInit*60;
						counter = setInterval(timer, 1000);
					}
					if(minutesBreak%60>=10) {
						$('#countBreak').html('0'+Math.floor(minutesBreak/60)+':'+minutesBreak%60);
					} else {
						$('#countBreak').html('0'+Math.floor(minutesBreak/60)+':'+'0'+minutesBreak%60);
					}
				}
			}
		} else {
			clearInterval(counter); //If the main function is already running, this will stop it

			minutes = minutesInit; //Restart timer variables

			minutesBreak = minutesBreakInt; //Restart break timer variables

			running = false;
		}

	});

//	another way to do the same
	// $('.startStop').click(function() {
		
	// 	setInterval(function() {
	// 		defaultStart--;
	// 		$('#count').html(defaultStart);		
	// 	},1000);

	// });

//	add e subtract minute function for  timer
	$('.addMinute').click(function() {
		minutesInit++;
		console.log(minutes);
		minutes = minutesInit;
		if (minutes < 10) {
			$('#count').html('0'+minutes);
		} else {
			$('#count').html(minutes);
		}
	});

	$('.subMinute').click(function() {
		if(minutesInit>1) {
			minutesInit--;
			console.log(minutes);
			minutes = minutesInit;
			if (minutes < 10) {
				$('#count').html('0'+minutes);
			} else {
				$('#count').html(minutes);
			}
		}
	});

//	add e subtract minute function for  break timer
	$('.addMinuteBreak').click(function() {
		minutesBreakInt++;
		console.log(minutesBreak);
		minutesBreak = minutesBreakInt;
		$('#countBreak').html(minutesBreak);
		if (minutesBreak < 10) {
			$('#countBreak').html('0'+minutesBreak);
		} else {
			$('#countBreak').html(minutesBreak);
		}		
	})

	$('.subMinuteBreak').click(function() {
		if(minutesBreakInt>1) {
			minutesBreakInt--;
			console.log(minutesBreak);
			minutesBreak = minutesBreakInt;
			$('#countBreak').html(minutesBreak);
			if (minutesBreak < 10) {
				$('#countBreak').html('0'+minutesBreak);
			} else {
				$('#countBreak').html(minutesBreak);
			}
		}
	});

});


	// This way I need the onclick="function();" on each button

	// var defaultStart = parseInt($('#count').html());
	// var defaultStartBreak = parseInt($('#countBreak').html());


	// function addMin(ev) {
	// 	defaultStart++;
	// 	console.log(defaultStart);
	// 	$('#count').html(defaultStart);
	// }

	// function subMin(ev) {
		// if(defaultStart>1) {
		// 	defaultStart--;
		// 	console.log(defaultStart);
		// 	$('#count').html(defaultStart);
		// }
	// }

	// function addMinBreak(ev) {
	// 	defaultStart++;
	// 	console.log(defaultStart);
	// 	$('#count').html(defaultStart);
	// }

	// function subMinBreak(ev) {
		// if(defaultStart>1) {
		// 	defaultStart--;
		// 	console.log(defaultStart);
		// 	$('#count').html(defaultStart);
		// }
	// }




