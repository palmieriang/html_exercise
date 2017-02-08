$(document).ready(function() {

	var minutesInit = parseInt($('#count').html());

	var minutes = minutesInit;

	var minutesBreakInt = parseInt($('#countBreak').html());

	var minutesBreak = minutesBreakInt;

	$('.progress-bar').hide();

//  This function starts the countdown
	$('.startStop').click(function() {
		
		$('.fa-power-off').css('color', 'green');

		var counter = setInterval(timer, 1000);
		minutes*=60;

		function timer() {
			$('.timer00').hide();
			minutes--;

			var percentage = minutes / (minutesInit*60) * 100;

			$('.progress-bar-left').show();

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
					$('.progress-bar-left').hide();
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




