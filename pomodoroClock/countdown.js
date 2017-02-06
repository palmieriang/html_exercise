// $(document).ready(function() { 

	// function startCount() {

	// 	var defaultStart = 5;
 //        var seconds = defaultStart % 60;
 //        var minutes = Math.floor(defaultStart / 60) % 60;

 //        setInterval(function() {
 //        	seconds = 59;
 //        	seconds--;

 //        	$(".timer").html(seconds);

 //                seconds = 59;
 //                minutes--;
 //                if(minutes < 0)
 //                {
 //                    $scope.minutes = 59;
 //                }

 //        },1000);
	// }


// });


	// function startCount() {
		
	// 	var minutes = ('0' + new Date().getMinutes()).slice(-2);
	// 	var hours = ('0' + new Date().getHours()).slice(-2);
	// 	var time = hours + ':' + minutes;

	// 	$(".timer").html(time);

	// }



	// function getTimeRemaining(endtime) {
	// 	var defaultStart = 5;
 //        var seconds = defaultStart % 60;
 //        var minutes = Math.floor(defaultStart / 60) % 60;
 //        return {
	// 	    'minutes': minutes,
	// 	    'seconds': seconds        	
 //        }
 //        console.log(seconds);
 //        console.log(minutes);
	// }

	// function startCount() {
	// 	document.getElementById("demo").html(seconds);
	// }

	// function reduce() {
	// 	var start = 10;
	// 	start--;
	// 	$("#demo").html(start);
	// }


	// window.setInterval(function(){
	// 	reduce();
	// }, 1000);

        // setInterval(function() {
        // 	seconds = 59;
        // 	seconds--;

        // 	$("#demo").html(seconds);

        //         seconds = 59;
        //         minutes--;
        //         if(minutes < 0)
        //         {
        //             $scope.minutes = 59;
        //         }

        // },1000);



	
$(document).ready(function() {

	var minutesInit = parseInt($('#count').html());

	var minutes = minutesInit;

	var seconds = minutes * 60;

	var minutesBreakInit = parseInt($('#countBreak').html());

	var minutesBreak = minutesBreakInit;

	var secondsBreak = minutesBreak * 60;

	//console.log(minutes);

//  This function starts the countdown
	$('.startStop').click(function() {
		
		var counter = setInterval(timer, 1000);

		function timer() {
			minutes--;
			if(minutes===0) {
				clearInterval(counter);
				minutesBreak = minutesBreakInit;
				var startBreak = setInterval(breakTimer, 1000);
			}
			$('#count').html(minutes);

			function breakTimer() {
				minutesBreak--;
				console.log(minutesBreak);
				if(minutesBreak===0) {
					clearInterval(startBreak);	
					minutes = minutesInit;
					console.log(minutes);
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
		minutesBreakInit++;
		console.log(minutesBreak);
		minutesBreak = minutesBreakInit;
		$('#countBreak').html(minutesBreak);
	})

	$('.subMinuteBreak').click(function() {
		if(minutesBreakInit>1) {
			minutesBreakInit--;
			console.log(minutesBreak);
			minutesBreak = minutesBreakInit;
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




