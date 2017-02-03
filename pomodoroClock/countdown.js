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

	var defaultStart = parseInt($('#count').html());

	var defaultStartBreak = parseInt($('#countBreak').html());

	console.log(defaultStart);

//	add e subtract minute function for  timer
	$('.addMinute').click(function() {
		defaultStart++;
		console.log(defaultStart);
		$('#count').html(defaultStart);
	})

	$('.subMinute').click(function() {
		if(defaultStart>1) {
			defaultStart--;
			console.log(defaultStart);
			$('#count').html(defaultStart);			
		}
	});

//	add e subtract minute function for  break timer
	$('.addMinuteBreak').click(function() {
		defaultStart++;
		console.log(defaultStart);
		$('#countBreak').html(defaultStart);
	})

	$('.subMinuteBreak').click(function() {
		if(defaultStart>1) {
			defaultStart--;
			console.log(defaultStart);
			$('#countBreak').html(defaultStart);			
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




