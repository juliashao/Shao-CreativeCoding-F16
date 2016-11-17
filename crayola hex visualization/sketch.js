var myData;

function preload(){

	myData = loadJSON("crayola.json");
	myFont = loadFont('Futura-Medium.ttf');

}

function setup() {

	createCanvas(16000,windowHeight);

	//testing//

	for (var i = 0; i < myData.colors.length; i ++){
		println(myData.colors[i].color);
	}

}

function draw() {

	textFont(myFont);

	textSize(20);
	text("Side scroll to view Crayola names and colors.", 10, 10);

	background(255);
	for (var i = 0; i < myData.colors.length; i ++){

		// //I initially wanted to make a grid by setting a boolean for the X and Y position. 
		// //This is what I came up with but it does not function.

		// newXPos = xPos - windowWidth
		// yPos = 200 

		// //yPos is set back to the same position when its in the for loop, but when outside, it prints in a new line every time.


		// if (xPos > windowWidth){
		// 	xPos = newXPos
		// 	yPos += 200
		// 	hex = color(myData.colors[i].hex);
		// 	fill(hex);
		// 	strokeWeight(4);
		// 	rect(xPos, yPos, 100, 100);
		// } else{

		// 	hex = color(myData.colors[i].hex);
		// 	fill(hex);
		// 	strokeWeight(4);
		// 	rect(xPos, yPos, 100, 100);

		xPos = i * 250

		hex = color(myData.colors[i].hex);
		fill(hex);
		noStroke();
		rect(xPos, (windowHeight/2) - 125, 200, 200);

		stroke(hex);
		text(myData.colors[i].color, xPos,(windowHeight/2) + 100);

	}

  
}