// JavaScript Document

//
//	You need a textfield with ID: imageRemoved
//	and a textfield with ID: index
//
//
imageName = ["invis.gif",
			"manchester_1x1.gif","manchester_1x2.gif","manchester_1x3.gif",
			"manchester_2x1.gif","manchester_2x2.gif","manchester_2x3.gif",
			"manchester_3x1.gif","manchester_3x2.gif","manchester_3x3.gif"];

imageGrid = [];
numImages = imageName.length;
numPieces = numImages - 1;
idSuffix = "manchester";
lenSuffix = idSuffix.length;

function initialiseBoard()
{
	for (c = 1; c <= numPieces; ++c)
		imageGrid[c] = c;
	document.getElementById("imageRemoved").value = 0;
	document.getElementById("numMoves").value = 0;
	

}

function shuffle(n)
{
	for (c = 0; c < n; ++c) {
		//	pick a number from 1 .. numImages ... twice
		a = Math.floor(numPieces*Math.random() + 1);
		b = Math.floor(numPieces*Math.random() + 1);
		temp = imageGrid[a];
		imageGrid[a] = imageGrid[b];
		imageGrid[b] = temp;
	}
}

function displayBoard()
{
	for (p = 1; p <= numPieces; ++p)
		document.getElementById(idSuffix+ p).src = imageName[imageGrid[p]];
//	printGrid();
}

function printGrid()
{
	str = "<table border='1'>";
	p = 1;
	for (r = 1; r < 5; ++r){
		str += "<tr>";
		for (c = 1; c < 5; ++c)
			str += "<td>"+ imageGrid[p++] +"</td>";
		str += "</tr>";;
	}
	document.getElementById("grid").innerHTML = str + "</table>";
}

function resetBoard()
{
	initialiseBoard();
	displayBoard();
}


function movePiece(id) {
	index = +id.substr(lenSuffix);
	imgnum = imageGrid[index];
	if (document.getElementById('imageRemoved').value == 0) {
		document.getElementById('imageRemoved').value = imgnum;
	}
	else {
		//alert("moving from position " + index + " to " + document.getElementById('index').value); 
		imageGrid[document.getElementById('index').value] = imgnum;
	}
	imageGrid[index] = 0;
	document.getElementById('index').value = index;
	displayBoard();
	document.getElementById("numMoves").value++;
	win = 1;
	for (c = 1; c <= numPieces; ++c) {
		if (imageGrid[c] == 0)
			continue;	
		if (imageGrid[c] != c) {
			win = 0;
			break;
		}
	}

	if (win == 1) {
		alert("Congratulations!")
	}
}

function play()
{
	initialiseBoard();
	shuffle(30);
	displayBoard();
}

function congrats()
{
	win = 1;
	for (c = 1; c <= numPieces; ++c) {
		if (imageGrid[c] == 0)
			continue;	
		if (imageGrid[c] != c) {
			win = 0;
			break;
		}
	}

	if (win == 1) {
		alert("Congratulations!")
	}
}

