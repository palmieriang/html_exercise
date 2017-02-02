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



	function getTimeRemaining(endtime) {
		var defaultStart = 5;
        var seconds = defaultStart % 60;
        var minutes = Math.floor(defaultStart / 60) % 60;
        return {
		    'minutes': minutes,
		    'seconds': seconds        	
        }
        console.log(seconds);
        console.log(minutes);
	}




	function startCount() {
		document.getElementById("demo").html(seconds);
	}