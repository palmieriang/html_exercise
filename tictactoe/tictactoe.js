$(document).ready(function() {
	//Default player's turn to X
	var turn = "X";
	//Array stores values that we will check later for a winner
	var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
	//Default computer
	var computersTurn = "O";
	//Keeps track if it is the computer's turn
	var gameOn = false;
	//Change player's turn to X and computer's to O
	$('#turnX').click(function() {
		turn = "O";
		computersTurn = "X";
		$('#turnX').removeClass("btn-primary");
		$('#turnO').addClass("btn-primary");
	});
});