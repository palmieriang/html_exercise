$(document).ready(function() {

	var minutesInit = parseInt($('#count').html());

	var minutes = minutesInit;

	var minutesBreakInt = parseInt($('#countBreak').html());

	var minutesBreak = minutesBreakInt;

//  This function starts the countdown
	$('.startStop').click(function() {
		
		var counter = setInterval(timer, 1000);
		minutes*=60;

		function timer() {
			minutes--;
			if(minutes===0) {
				clearInterval(counter);
				minutesBreak = minutesBreakInt;
				var startBreak = setInterval(breakTimer, 1000);
			}

			if(minutes%60>=10) {
				$('#count').html(Math.floor(minutes/60)+':'+minutes%60);
			} else {
				$('#count').html('0:'+'0'+minutes);
			}
			
			function breakTimer() {
				minutesBreak--;
				console.log(minutesBreak);
				if(minutesBreak===0) {
					clearInterval(startBreak);
					minutes = minutesInit*60;
					counter = setInterval(timer, 1000);
				}
				$('#countBreak').html(minutesBreak);
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
		$('#count').html(minutes);
	})

	$('.subMinute').click(function() {
		if(minutesInit>1) {
			minutesInit--;
			console.log(minutes);
			minutes = minutesInit;
			$('#count').html(minutes);			
		}
	});

//	add e subtract minute function for  break timer
	$('.addMinuteBreak').click(function() {
		minutesBreakInt++;
		console.log(minutesBreak);
		minutesBreak = minutesBreakInt;
		$('#countBreak').html(minutesBreak);
	})

	$('.subMinuteBreak').click(function() {
		if(minutesBreakInt>1) {
			minutesBreakInt--;
			console.log(minutesBreak);
			minutesBreak = minutesBreakInt;
			$('#countBreak').html(minutesBreak);			
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




