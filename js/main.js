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
for (var j = 0; j < dims; j++) {
	/* var cols = []; */
	for (var k = 0; k < dims; k++) {
		coordinates.push({x: -(j*(increment)), y: -(k*(increment))});
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
for (var i = 0; i < squares; i++) {
	var randomIdx = getRandomInt(0,coordinates.length);
	/* console.log("Current Random Idx = " + randomIdx); */
	var randomCoords = coordinates.splice(randomIdx,1);
	/* console.log(randomCoords); */
	var xCoord = randomCoords[0].x;
	/* console.log("x = " + xCoord); */
	var yCoord = randomCoords[0].y;
	/* console.log("y = " + yCoord); */
	/* console.log(randomCoords);
	console.log(coordinates);
	*/
	document.getElementById("img"+(i+1)).style.backgroundPosition = xCoord + "px " + yCoord + "px"; 
}
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




