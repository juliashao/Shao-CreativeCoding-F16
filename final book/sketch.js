var cover;
var firstSpread;
var secondSpread;
var myState;

var R;
var G;
var B;

var state0R
var state0G
var state0B

var state1R
var state1G
var state1B

var Rtext;
var Gtext;
var Btext;
var TextSize;

var title;
var submit;
var button;
var button1a;
var button1b;

function setup() {

	createCanvas(windowWidth,windowHeight);

	R = createSlider(0,255,255);
	G = createSlider(0,255,255);
	B = createSlider(0,255,255);

	R.position(10,20);
	G.position(10,35);
	B.position(10,50);

	title = createInput("Enter a title");
	title.position(10,130);
	buttonC = createButton("submit");
	buttonC.position(200,130);
	buttonC.mousePressed(readValue);
	myInputValue = ""

	text1a = createInput("Enter body text page 1");
	text1a.position(10,250);
	button1a = createButton("submit");
	button1a.position(200,250);
	button1a.mousePressed(readValue);
	myBodyValue1a = ""
	text1a.hide();
	button1a.hide();

	text1b = createInput("Enter body text page 2");
	text1b.position(10,290);
	button1b = createButton("submit");
	button1b.position(200,290);
	button1b.mousePressed(readValue);
	myBodyValue1b = ""
	text1b.hide();
	button1b.hide();

	titleTextSize = createSlider(10,80,10);
	titleTextSize.position(10,100);

	bodyTextSize = createSlider(10,80,10);
	bodyTextSize.position(10,220);
	bodyTextSize.hide();

	myState = 0;
	
}

function readValue(){

	myInputValue = title.value();
	myBodyValue1a = text1a.value();
	myBodyValue1b = text1b.value();

}

function mouseClicked(){

	if (myState == 0){
		if (mouseX > windowWidth/2){
			state0R = R.value();
			state0G = G.value();
			state0B = B.value();
			myState = 1;
		}
	}

	else if (myState == 1){
		if (mouseX < windowWidth/2){
			R.value(state0R);
			G.value(state0G);
			B.value(state0B);

			text1a.hide();
			button1a.hide();
			text1b.hide();
			button1b.hide();
			bodyTextSize.hide();

			myState = 0;
		} 
		if (mouseX > windowWidth/2){
			state1R = R.value();
			state1G = G.value();
			state1B = B.value();
			myState = 2;
		} 
	}

	else if (myState == 2){
		if (mouseX < windowWidth/2){
			myState = 1;
		} 
		if (mouseX > windowWidth/2){
			myState = 3;
		} 
	}

}


function coverPage() {

	var RedValue = R.value();
	var GreenValue = G.value();
	var BlueValue = B.value();

	var textValue = titleTextSize.value();

	background(255);
	strokeWeight(3);
	stroke(0);
	fill(RedValue,GreenValue,BlueValue);
	rectMode(RADIUS);
	rect(windowWidth/2,windowHeight/2, windowWidth/6,windowHeight/2.5);

	noStroke();
	textSize(15);
	fill(0);
	text("Page color: ",12,14);
	textSize(15);
	text("Title font size: ",10,90);

	textSize(textValue);
	text(myInputValue, windowWidth/2 - 100,windowHeight/4);

}

function firstSpreadPage() {

	var RedValue = R.value();
	var GreenValue = G.value();
	var BlueValue = B.value();

	var textValue = titleTextSize.value();

	strokeWeight(3);
	stroke(0);
	fill(RedValue,GreenValue,BlueValue);
	rectMode(RADIUS);
	rect(windowWidth/2,windowHeight/2, windowWidth/3.5,windowHeight/2.5);

	textSize(15);
	text("Body font size: ",10,200);

	line(windowWidth/2, windowHeight/2 + windowHeight/2.5, windowWidth/2, windowHeight/2 - windowHeight/2.5);
	textSize(textValue);

	bodyTextSize.show();

	text1a.show();
	button1a.show();
	textSize(textValue);
	text(myBodyValue1a, windowWidth/4,windowHeight/4);

	text1b.show();
	button1b.show();
	textSize(textValue);
	text(myBodyValue1b, windowWidth/2 + 10,windowHeight/4);

}

function secondSpreadPage() {

	var RedValue = R.value();
	var GreenValue = G.value();
	var BlueValue = B.value();

	strokeWeight(3);
	stroke(0);
	fill(RedValue,GreenValue,BlueValue);
	rectMode(RADIUS);
	rect(windowWidth/2,windowHeight/2, windowWidth/3.5,windowHeight/2.5);

	line(windowWidth/2, windowHeight/2 + windowHeight/2.5, windowWidth/2, windowHeight/2 - windowHeight/2.5);

}


function draw() {

	switch(myState){
		case 0:
			coverPage();
			break;

		case 1:
			firstSpreadPage();
			break;

		case 2:
			secondSpreadPage();
			break;

		case 3:
			thirdSpreadPage();
			break;
	}

}