$(document).ready(function() {

	var player = 1;

	var count = 0;

	var score1 = 0;

	var score2 = 0;

	$('.square').on('click', function() {
		var squareSelected = $(this);
		if(squareSelected.hasClass('fa fa-times') || squareSelected.hasClass('fa fa-circle-o')) {
			console.log('This square has already been selected');
		} else {
			// all the rest
			if (player === 1) {
				squareSelected.addClass('fa fa-times');
				count++;
				// this function will return true or false
				if(checkIfPlayerWon('fa fa-times')) { 
					alert('Player ' + player + ' has won!');
					score1++;
					$('#score1').html(score1);
					reset();
				} else {
					player = 2;
				}
			} else {
				squareSelected.addClass('fa fa-circle-o');
				count++;
				if(checkIfPlayerWon('fa fa-circle-o')) {
					alert('Player ' + player + ' has won!');
					score2++;
					$('#score2').html(score2);
					reset();
				} else {
					player = 1;
				}
			}
		}
	});

	function checkIfPlayerWon(symbol) {
		if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
			return true;
		} else if($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
			return true;
		} else if($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
			return true;
		}else if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
			return true;
		}else if($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
			return true;
		}else if($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
			return true;
		}else if($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
			return true;
		}else if($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
			return true;
		} else if(count === 9) {
			alert('Tie');
			reset();
			return false;
		} else {
			return false;
		}
	}

	function reset() {
		$('.square').removeClass('fa fa-times');
		$('.square').removeClass('fa fa-circle-o');
		count = 0;
	}


});
