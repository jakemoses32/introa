
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


//Chooses random first pick
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
	//Hide the gameBegins div and show the gameStarts div here.
	$('.gameBegins').css('display','none');
	$('.gameStarts').css('display','block');
});
//Red goes first
$('#redFirst').click(function(){
	firstPick = 0; 
	currentTurn = firstPick;
	console.log(firstPick + " " + currentTurn);
	//Hide the gameBegins div and show the gameStarts div here.
	$('.gameBegins').css('display', 'none');
	$('.gameStarts').css('display', 'block');
});
//Blue goes first
$('#blueFirst').click(function(){
	firstPick = 1;
	currentTurn = firstPick;
	console.log(firstPick + " " + currentTurn);
	//Hide the gameBegins div and show the gameStarts div here.
	$('.gameBegins').css('display', 'none');
	$('.gameStarts').css('display', 'block');
});

//Changes the current cell value in the JS database - Clossest to Setter Method in OOP
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
//Retrieves the currentCell - Closest to getter method in OOP. 
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

//Resets the board
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
	//Since we're clearing the board, what are we doing? We need to make each cell white
	//We need to show the gameBegins div and hide the gameStarts div.
	$('.cell').css('background-color', 'white');
	$('.gameBegins').css('display', 'block');
	$('.gameStarts').css('display', 'none');
}

//Whenever a div is clicked
$('.cell').click(function(){
	var id = $(this).attr('id');
	//Here's an HTML string based on the div that's been clicked on screen
	var idString = "#"+id;

	if(getCurrentCell(id) === 0){
		//Based on who's turn it is, we need to set the color of the div associated with idString to red or blue.
		//Implement one line of JS in each part of this if statement to handle this.
		//currentTurn == 0: red, currentTurn == 1: blue
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


//Figures out who is the winner via recurrsion. 
//Starts at A1 - A2 - A3 - B1 - C1 
//Finds Down, Sideways, and then Diagonal. 
function findWinner(){
	//Finds if player 1 has won; 
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