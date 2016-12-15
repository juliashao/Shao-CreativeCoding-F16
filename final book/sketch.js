var cover;
var firstSpread;
var secondSpread;
var myState;

var R;
var G;
var B;

var state0R;
var state0G;
var state0B;

var state1R = 255;
var state1G = 255;
var state1B = 255;

var state2R = 255;
var state2G = 255;
var state2B = 255;

var state3R = 255;
var state3G = 255;
var state3B = 255;

var Rtext;
var Gtext;
var Btext;
var TextSize;

var state0Rtext;
var state0Gtext;
var state0Btext;

var state1Rtext = 0;
var state1Gtext = 0;
var state1Btext = 0;

var state2Rtext = 0;
var state2Gtext = 0;
var state2Btext = 0;

var state3Rtext = 0;
var state3Gtext = 0;
var state3Btext = 0;

var title;
var submit;
var buttonC;
var button1a;
var button1b;
var button2a;
var button2b;
var button3;


var dropdown;

function preload(){

	Georgia = loadFont("assets/Georgia.ttf");
	AndaleMono = loadFont("assets/AndaleMono.ttf");
	Futura = loadFont("assets/Futura.ttf");

}

function setup() {

	createCanvas(windowWidth,windowHeight);

	R = createSlider(0,255,255);
	G = createSlider(0,255,255);
	B = createSlider(0,255,255);

	R.position(40,40);
	G.position(40,55);
	B.position(40,70);

	titleTextSize = createSlider(20,100,20);
	titleTextSize.position(40,125);

	Rtext = createSlider(0,255,255);
	Gtext = createSlider(0,255,255);
	Btext =createSlider(0,255,255);

	Rtext.position(40,180);
	Gtext.position(40,195);
	Btext.position(40,210);

	dropdown = createElement('select');
  	dropdown.position(40,235);
  	var options = ['Futura', 'Andale Mono','Georgia'];
  	for (var i = 0; i < options.length; i++) {
    	var option = createElement('option');
    	option.attribute('value',options[i]);
    	option.html(options[i]);
    	option.parent(dropdown);
  	}

  	var droptest = createDiv('what is selected?')

	dropdown.elt.onchange = function() {
		droptest.html(this.value);
	}

	title = createInput("Enter a title");
	title.position(40,270);
	buttonC = createButton("submit");
	buttonC.position(200,270);
	buttonC.mousePressed(readValue);
	myInputValue = ""

	text1a = createInput("Enter body text page 1");
	text1a.position(40,270);
	button1a = createButton("submit");
	button1a.position(200,270);
	button1a.mousePressed(readValue);
	myBodyValue1a = ""
	text1a.hide();
	button1a.hide();

	text1b = createInput("Enter body text page 2");
	text1b.position(40,300);
	button1b = createButton("submit");
	button1b.position(200,300);
	button1b.mousePressed(readValue);
	myBodyValue1b = ""
	text1b.hide();
	button1b.hide();

	text2a = createInput("Enter body text page 1");
	text2a.position(40,270);
	button2a = createButton("submit");
	button2a.position(200,270);
	button2a.mousePressed(readValue);
	myBodyValue2a = ""
	text2a.hide();
	button2a.hide();

	text2b = createInput("Enter body text page 2");
	text2b.position(40,300);
	button2b = createButton("submit");
	button2b.position(200,300);
	button2b.mousePressed(readValue);
	myBodyValue2b = ""
	text2b.hide();
	button2b.hide();

	text3 = createInput("Enter back text");
	text3.position(40,300);
	button3 = createButton("submit");
	button3.position(200,300);
	myBodyValue3 = ""
	text3.hide();
	button3.hide();

	bodyTextSize = createSlider(10,80,10);
	bodyTextSize.position(40,125);
	bodyTextSize.hide();


	myState = 0;
	
}

function readValue(){

	myInputValue = title.value();
	myBodyValue1a = text1a.value();
	myBodyValue1b = text1b.value();
	myBodyValue2a = text2a.value();
	myBodyValue2b = text2b.value();
	myBodyValue3 = text3.value();

}

function mouseClicked(){

	if (myState == 0){
		if (mouseX > windowWidth/2){
			state0R = R.value();
			state0G = G.value();
			state0B = B.value();

			R.value(state1R);
			G.value(state1G);
			B.value(state1B);

			state0Rtext = Rtext.value();
			state0Gtext = Gtext.value();
			state0Btext = Btext.value();

			Rtext.value(state1Rtext);
			Gtext.value(state1Gtext);
			Btext.value(state1Btext);

			titleTextSize.hide();
			title.hide();
			buttonC.hide();

			myState = 1;
		}
	}

	else if (myState == 1){
		if (mouseX < windowWidth/2 && mouseX > windowWidth/4){

			state1R = R.value();
			state1G = G.value();
			state1B = B.value();

			R.value(state0R);
			G.value(state0G);
			B.value(state0B);

			state1Rtext = Rtext.value();
			state1Gtext = Gtext.value();
			state1Btext = Btext.value();

			Rtext.value(state0Rtext);
			Gtext.value(state0Gtext);
			Btext.value(state0Btext);

			titleTextSize.show();
			title.show();
			buttonC.show();

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

			R.value(state2R);
			G.value(state2G);
			B.value(state2B);

			state1Rtext = Rtext.value();
			state1Gtext = Gtext.value();
			state1Btext = Btext.value();

			Rtext.value(state2Rtext);
			Gtext.value(state2Gtext);
			Btext.value(state2Btext);

			myState = 2;
		} 
	}

	else if (myState == 2){
		if (mouseX < windowWidth/2 && mouseX > windowWidth/4){

			state2R = R.value();
			state2G = G.value();
			state2B = B.value();

			R.value(state1R);
			G.value(state1G);
			B.value(state1B);

			state2Rtext = Rtext.value();
			state2Gtext = Gtext.value();
			state2Btext = Btext.value();

			Rtext.value(state1Rtext);
			Gtext.value(state1Gtext);
			Btext.value(state1Btext);

			titleTextSize.show();
			title.show();
			buttonC.show();

			text2a.hide();
			button2a.hide();
			text2b.hide();
			button2b.hide();
			bodyTextSize.hide();

			myState = 1;

		} 
		if (mouseX > windowWidth/2){

			state2R = R.value();
			state2G = G.value();
			state2B = B.value();

			R.value(state3R);
			G.value(state3G);
			B.value(state3B);

			state2Rtext = Rtext.value();
			state2Gtext = Gtext.value();
			state2Btext = Btext.value();

			Rtext.value(state3Rtext);
			Gtext.value(state3Gtext);
			Btext.value(state3Btext);

			text2a.hide();
			button2a.hide();
			text2b.hide();
			button2b.hide();

			text3.show();
			button3.show();

			myState = 3;
		} 
	}
	else if (myState == 3){
		if (mouseX < windowWidth/2 && mouseX > windowWidth/4){

			state3R = R.value();
			state3G = G.value();
			state3B = B.value();

			R.value(state2R);
			G.value(state2G);
			B.value(state2B);

			state3Rtext = Rtext.value();
			state3Gtext = Gtext.value();
			state3Btext = Btext.value();

			Rtext.value(state2Rtext);
			Gtext.value(state2Gtext);
			Btext.value(state2Btext);

			text2a.show();
			button2a.show();
			text2b.show();
			button2b.show();
			bodyTextSize.show();


			myState = 1;

		} 
	}

}


function coverPage() {

	var RedValue = R.value();
	var GreenValue = G.value();
	var BlueValue = B.value();

	var RtextValue = Rtext.value();
	var GtextValue = Gtext.value();
	var BtextValue = Btext.value();

	var textValue = titleTextSize.value();

	background(255);

	textSize(20);
	fill(0);
	text("Cover page", windowWidth/1.1, windowHeight/1.05);

	strokeWeight(3);
	stroke(0);
	fill(RedValue,GreenValue,BlueValue);
	rectMode(RADIUS);
	rect(windowWidth/2,windowHeight/2, windowWidth/6,windowHeight/2.5);

	stroke(200,200,200);
	strokeWeight(50);
	noFill();

	noStroke();
	textSize(15);
	fill(0);
	text("Page color (R, G, B): ", 40, 40);
	text("Title font size: ", 40, 120);
	text("Text color (R, G, B): ", 40, 180);

	fill(RtextValue, GtextValue, BtextValue);
	textFont(dropdown.elt.value);
	textSize(textValue);
	text(myInputValue, windowWidth/2 - 210, windowHeight/3,400);

}

function firstSpreadPage() {

	background(255);

	textSize(20);
	fill(0);
	text("First spread", windowWidth/1.1, windowHeight/1.05);

	var RedValue = R.value();
	var GreenValue = G.value();
	var BlueValue = B.value();

	var RtextValue = Rtext.value();
	var GtextValue = Gtext.value();
	var BtextValue = Btext.value();

	var bodyTextValue = bodyTextSize.value();

	strokeWeight(3);
	stroke(0);
	fill(RedValue,GreenValue,BlueValue);
	rectMode(RADIUS);
	rect(windowWidth/2,windowHeight/2, windowWidth/3.5,windowHeight/2.5);

	noStroke();
	fill(0);
	textSize(15);
	text("Page color (R, G, B): ", 40, 40);
	text("Body font size: ",40,120);
	text("Text color (R, G, B): ", 40, 180);

	strokeWeight(3);
	stroke(0);
	line(windowWidth/2, windowHeight/2 + windowHeight/2.5, windowWidth/2, windowHeight/2 - windowHeight/2.5);

	bodyTextSize.show();

	fill(RtextValue, GtextValue, BtextValue);
	textSize(bodyTextValue);

	noStroke();
	text1a.show();
	button1a.show();
	text(myBodyValue1a, windowWidth/4 - 20,windowHeight/4,400);

	text1b.show();
	button1b.show();
	text(myBodyValue1b, windowWidth/2 + 40,windowHeight/4,400);



}

function secondSpreadPage() {

	background(255);

	textSize(20);
	fill(0);
	text("Second spread",  windowWidth/1.1, windowHeight/1.05);

	var RedValue = R.value();
	var GreenValue = G.value();
	var BlueValue = B.value();

	var RtextValue = Rtext.value();
	var GtextValue = Gtext.value();
	var BtextValue = Btext.value();

	var bodyTextValue = bodyTextSize.value();

	strokeWeight(3);
	stroke(0);
	fill(RedValue,GreenValue,BlueValue);
	rectMode(RADIUS);
	rect(windowWidth/2,windowHeight/2, windowWidth/3.5,windowHeight/2.5);

	noStroke();
	fill(0);
	textSize(15);
	text("Page color (R, G, B): ", 40, 40);
	text("Body font size: ",40,120);
	text("Text color (R, G, B): ", 40, 180);

	strokeWeight(3);
	stroke(0);
	line(windowWidth/2, windowHeight/2 + windowHeight/2.5, windowWidth/2, windowHeight/2 - windowHeight/2.5);

	bodyTextSize.show();

	fill(RtextValue, GtextValue, BtextValue);
	textSize(bodyTextValue);

	noStroke();
	text2a.show();
	button2a.show();
	text(myBodyValue2a, windowWidth/4 - 20,windowHeight/4,400);

	text2b.show();
	button2b.show();
	text(myBodyValue2b, windowWidth/2 + 40,windowHeight/4,400);

}

function backPage() {

	var RedValue = R.value();
	var GreenValue = G.value();
	var BlueValue = B.value();

	var RtextValue = Rtext.value();
	var GtextValue = Gtext.value();
	var BtextValue = Btext.value();

	var textValue = titleTextSize.value();

	background(255);

	textSize(20);
	fill(0);
	text("Back page", windowWidth/1.1, windowHeight/1.05);

	strokeWeight(3);
	stroke(0);
	fill(RedValue,GreenValue,BlueValue);
	rectMode(RADIUS);
	rect(windowWidth/2,windowHeight/2, windowWidth/6,windowHeight/2.5);

	stroke(200,200,200);
	strokeWeight(50);
	noFill();

	noStroke();
	textSize(15);
	fill(0);
	text("Page color (R, G, B): ", 40, 40);
	text("Text font size: ", 40, 120);
	text("Text color (R, G, B): ", 40, 180);

	fill(RtextValue, GtextValue, BtextValue);
	textFont(dropdown.elt.value);
	textSize(textValue);
	text(myBodyValue3, windowWidth/2 - 210, windowHeight/3,400);

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
			backPage();
			break;
	}

}