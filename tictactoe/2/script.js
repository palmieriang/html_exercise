$(document).ready(function() {

	var player = 1;

	$('.square').on('click', function() {
		var squareSelected = $(this);
		if(squareSelected.hasClass('ex') || squareSelected.hasClass('oh')) {
			console.log('This square has already been selected');
		} else {
			// all the rest
			if (player === 1) {
				squareSelected.addClass('ex');
				player = 2;
			} else {
				squareSelected.addClass('oh');
				player = 1;
			}
		}
	});


});
