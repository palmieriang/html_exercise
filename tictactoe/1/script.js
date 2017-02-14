$(document).ready(function() {
	//Default player's turn to X
	var turn = "X";
	//Array stores values that we will check later for a winner
	var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
	//Default computer
	var computersTurn = "O";
	//Keeps track if it is the computer's turn
	var gameOn = false;
	//Keeps track of computers turn so no loop
	var count = 0;

	//Change player's turn to X and computer's to O
	$('#turnX').click(function() {
		console.log(1);
		turn = "O";
		computersTurn = "X";
		$('#turnX').removeClass("btn-primary");
		$('#turnO').addClass("btn-primary");
		reset();
	});
	//Change player's turn to O and computer's to X
	$('#turnO').click(function() {
		console.log(2);
		turn = "X";
		computersTurn = "O";
		$('#turnO').removeClass("btn-primary");
		$('#turnX').addClass("btn-primary");
		reset();
	});

	function computerTurn(turn, id) {
		//This variable is used to break the while loop
		var taken = false;
		while(taken===false && count!==5) {
			//Generate computer's random turn
			var computersMove =(Math.random()*10).toFixed();
			var move = $('#'+computersMove).text();
			if(move==='#') {
				$('#'+computersMove).text(computersTurn);
				taken = true;
				turns[computersMove] = computersTurn;
			} 
		}
	}

	function playerTurn(turn, id) {
		var spotTaken = $("#"+id).text();
		if (spotTaken === "#") {
			count++;
			turns[id] = turn;
			$("#"+id).text(turn);
			winCondition(turns, turn);
			if(gameOn === false) {
				computerTurn();
				winCondition(turns, computersTurn);
			}
		}
	}

	function winCondition(turnArray, currentTurn) {
		if(turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
			gameOn = true;
			reset();
		} else {
			gameOn = false;
		}
	}

	$('.tic').click(function() {
		var slot = $(this).attr("id");
		playerTurn(turn, slot);
	});

	function reset() {
		turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
		count = 0;
		$('.tic').text('#');
		gameOn = false;
	}
});
