
var gameRound = 0;
var firstPick = 0;
var currentTurn = 0; 
var winner = 0; 
var A1 = 0;
var A2 = 0;
var A3 = 0;
var B1 = 0; 
var B2 = 0;
var B3 = 0;
var C1 = 0; 
var C2 = 0; 
var C3 = 0;


$('#random').click(function(){
	var number = Math.random();
	if(number > 1/2){
		firstPick = 1;
		currentTurn = firstPick;
		console.log(firstPick + " " + currentTurn);
	} else {
		firstPick = 0; 
		currentTurn = firstPick;
		console.log(firstPick + " " + currentTurn); 
	}
	gameRound += 1;
	$('.gameBegins').css('display','none');
	$('.gameStarts').css('display','block');
});
$('#redFirst').click(function(){
	firstPick = 0; 
	currentTurn = firstPick;
	console.log(firstPick + " " + currentTurn);
	$('.gameBegins').css('display', 'none');
	$('.gameStarts').css('display', 'block');
});
$('#blueFirst').click(function(){
	firstPick = 1;
	currentTurn = firstPick;
	console.log(firstPick + " " + currentTurn);
	$('.gameBegins').css('display', 'none');
	$('.gameStarts').css('display', 'block');
});
function changeCellValue(cellNumber){
	if (cellNumber === "A1"){
		if (currentTurn === 0){
			A1 = 1;
		} else {
			A1 = 2;
		}
	} else if (cellNumber === "A2"){
		if (currentTurn === 0){
			A2 = 1;
		} else {
			A2 = 2;
		}
	}
	if (cellNumber === "A3"){
		if (currentTurn === 0){
			A3 = 1;
		} else {
			A3 = 2;
		}
	}
	if (cellNumber === "B1"){
		if (currentTurn === 0){
			B1 = 1;
		} else {
			B1 = 2;
		}
	}else if (cellNumber === "B2"){
		if (currentTurn === 0){
			B2 = 1;
		} else {
			B2 = 2;
		}
	}else if (cellNumber === "B3"){
		if (currentTurn === 0){
			B3 = 1;
		} else {
			B3 = 2;
		}
	}
	if (cellNumber === "C1"){
		if (currentTurn === 0){
			C1 = 1;
		} else {
			C1 = 2;
		}
	}else if (cellNumber === "C2"){
		if (currentTurn === 0){
			C2 = 1;
		} else {
			C2 = 2;
		}
	}else if (cellNumber === "C3"){
		if (currentTurn === 0){
			C3 = 1;
		} else {
			C3 = 2;
		}
	}			
}
function getCurrentCell(cellNumber){
	if (cellNumber === "A1"){
		return A1;
	} else if (cellNumber === "A2"){
		return A2;
	} else if (cellNumber === "A3"){
		return A3;
	} else if (cellNumber === "B1"){
		return B1;
	} else if (cellNumber === "B2"){
		return B2;
	} else if (cellNumber === "B3"){
		return B3; 
	} else if (cellNumber === "C1"){
		return C1;
	} else if (cellNumber === "C2"){
		return C2;
	} else if (cellNumber === "C3"){
		return C3;
	} else {
		alert("There has been an error");
	}
}

function clearBoard(){
	A1 = 0; 
	A2 = 0; 
	A3 = 0; 
	B1 = 0; 
	B2 = 0; 
	B3 = 0; 
	C1 = 0; 
	C2 = 0; 
	C3 = 0; 
	$('.cell').css('background-color', 'white');
	$('.gameBegins').css('display', 'block');
	$('.gameStarts').css('display', 'none');
}

$('.cell').click(function(){
	var id = $(this).attr('id');
	var idString = "#"+id;

	if(getCurrentCell(id) === 0){
			if(currentTurn === 0){
				changeCellValue(id);
				$(idString).css('background-color', 'red')
				if(findWinner() === 1){
					alert("Red is the winner");
					clearBoard();
				}
				currentTurn = 1; 
			} else if (currentTurn === 1){
				changeCellValue(id);
				$(idString).css('background-color', 'blue')
				if(findWinner() === 2){
					alert("Blue is the winner");
					clearBoard();
				}
				currentTurn = 0; 
			}
		} else {
			alert("You cannot click there!");
		}
});

function findWinner(){
	if (currentTurn === 0){
		if(A1 === 1){
			if (B1 === 1){
				if(C1 === 1){
					return 1;  
				}
			} 
			if(A2 === 1){
				if(A3 === 1){
					return 1;
				}
			} 
			if(B2 === 1){
				if(C3 === 1){
					return 1; 
				}
			}
		} 
		if(A2 === 1){
			if(B2 === 1){
				if(C2 === 1){
					return 1;
				}
			}
		} 
		if(A3 === 1){
			if(B3 === 1){
				if(C3 === 1){
					return 1;
				}
			}
			if (B2 === 1){
				if (C1 === 1){
					return 1;
				}
			}
		}
		if (B1 === 1){
			if (B2 === 1){
				if(B3 === 1){
					return 1;
				}
			}
		} 
		if (C1 === 1){
			if(C2 === 1){
				if(C3 === 1){
					return 1; 
				}
			}
		}
	} else {
	//Finds if player 2 has won.
		if(A1 === 2){
			if (B1 === 2){
				if(C1 === 2){
					return 2;  
				}
			} 
			if(A2 === 2){
				if(A3 === 2){
					return 2;
				}
			} 
			if(B2 === 2){
				if(C3 === 2){
					return 2; 
				}
			}
		} 
		if(A2 === 2){
			if(B2 === 2){
				if(C2 === 2){
					return 2;
				}
			}
		} 
		if(A3 === 2){
			if(B3 === 2){
				if(C3 === 2){
					return 2;
				}
			} 
			if (B2 === 2){
				if (C1 === 2){
					return 2;
				}
			}
		}
		if (B1 === 2){
			if (B2 === 2){
				if(B3 === 1){
					return 1;
				}
			}
		}
		if (C1 === 2){
			if(C2 === 2){
				if(C3 === 2){
					return 2; 
				}
			}
		}
	}
	return 0;
}