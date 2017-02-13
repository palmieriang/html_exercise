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
		console.log(1);
		turn = "O";
		computersTurn = "X";
		$('#turnX').removeClass("btn-primary");
		$('#turnO').addClass("btn-primary");
	});
	//Change player's turn to O and computer's to X
	$('#turnO').click(function() {
		console.log(2);
		turn = "X";
		computersTurn = "O";
		$('#turnO').removeClass("btn-primary");
		$('#turnX').addClass("btn-primary");
	});

	function playerTurn(turn, id) {
		var spotTaken = $("#"+id).text();
		if (spotTaken === "#") {
			turns[id] = turn;
			$("#"+id).text(turn);
		}
	}

	$('.tic').click(function() {
		var slot = $(this).attr("id");
		playerTurn(turn, slot);
	});
});
