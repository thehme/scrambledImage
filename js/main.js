/*
Randomanization calculation
*/
var xyDims = 400;
var squares = 9;
var dims = Math.sqrt(squares);
var increment = xyDims/dims; 
/*
console.log(dims);
console.log(increment);
*/
/* Create coordinates array*/
var coordinates = [];
var coordinatesCopy = [];
for (var j = 0; j < dims; j++) {
	/* var cols = []; */
	for (var k = 0; k < dims; k++) {
		coordinates.push({x: -(j*(increment)), y: -(k*(increment))});
		coordinatesCopy.push({x: -(j*(increment)), y: -(k*(increment))});
	}
	/* coordinates[j] = cols; */
}

/* 
console.log("Coordinates Length = " + coordinates.length);
console.log(coordinates);
*/

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
/* console.log(coordinates[getRandomInt(0,9)]); */
/*
for (var i = 0; i < squares; i++) {
	var randomIdx = getRandomInt(0,coordinates.length);
	/* 
	console.log("Current Random Idx = " + randomIdx); 
	*/
	/*
	var randomCoords = coordinates.splice(randomIdx,1); 
	*/
	/* 
	console.log(randomCoords); 
	*/
	/*
	var xCoord = randomCoords[0].x;
	*/
	/* 
	console.log("x = " + xCoord); 
	*/
	/*
	var yCoord = randomCoords[0].y;
	*/
	/* 
	console.log("y = " + yCoord); 
	*/
	/* 
	console.log(randomCoords);
	console.log(coordinates);
	*/
	/*
	document.getElementById("img"+(i+1)).style.backgroundPosition = xCoord + "px " + yCoord + "px"; 
}
*/
/*
var newSection = document.createElement("div");
newSection.className = "scrambled";
document.getElementsByClassName('container')[0].appendChild(newSection);
*/
/*createTextNode('<h1>Scrambled</h1>'); */

/* for each row, create a new div to contain n columns */
for (var m = 0; m < dims; m++){
	var newSection = document.getElementsByClassName('scrambled')[0];
	var newRow = document.createElement("div");
	/*
	document.getElementsByTagName('body')[0].appendChild(newSection);	
	*/
	var curCoords = {'x': 0, 'y': 0};
	newRow.setAttribute("class", "section");
	newSection.appendChild(newRow);
	/* for each row m, a new column div n needs to be added*/
	for (var n = 0; n < dims; n++){
		var newCol = document.createElement('div');
		var randomIdx = getRandomInt(0,coordinates.length);
			var randomCoords = coordinates.splice(randomIdx,1);
			var xCoord = randomCoords[0].x;
			var yCoord = randomCoords[0].y;
		newCol.setAttribute("class", "chopped");
		//newCol.setId("id", "img");
		newRow.appendChild(newCol);
		//document.getElementById("img").style.backgroundPosition = xCoord + "px " + yCoord + "px";
		newCol.style.backgroundPosition = xCoord + "px " + yCoord + "px";
	}
}

/*
newDiv.setAttribute("style", "background-position: -" + curCoords[0].x + "px -" + curCoords[0].y + "px");
*/
/*
var newDiv2 = document.createElement("div");
document.getElementsByTagName('body')[0].appendChild(newSection);
var curCoords = {'x': 0, 'y': 0};
newDiv2.setAttribute("class", "chopped");
newSection.appendChild(newDiv2);
*/
/* Creat m x n matrix of image pieces */
/* number of columns */
/*
for (var m = 0; m < dims; m++){
	/* number of rows */
	/*
	for (var n = 0; n < dims; n++) {
	}
}
*/

/* 
var curImg = document.createElement("img");
curImg.setAttribute("src", "./images/image.jpg");
curImg.setAttribute("height", xyDims);
curImg.setAttribute("width", xyDims);
curImg.setAttribute("alt", "lostCatSign");
document.getElementById("two").appendChild(curImg);
*/

/*
for (var i = 0; i < squares; i++) {
	var curImg = document.createElement("img");
	curImg.setAttribute("src","./images/image.jpg");
	curImg.setAttribute("height", xyDims+"");
	curImg.setAttribute("width", xyDims+"");
	document.getElementById("one").appendChild(curImg);
}
*/
/*initial coordinates array are empty*/
/*
var coords = [];

function addCoordinatePair(x, y, coordsArray) {
	coordsArray.push({ x: x, y: y });
};
*/

/*
Print values in coords array

for (var i = 0; i < coords.length; i++){
	var x = coords[i].x;
	var y = coords[i].y;
	console.log("x = " + x, "y =" + y);
}
*/




