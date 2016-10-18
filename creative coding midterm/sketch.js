var img1;
var img2;
var img3;
var myFont;
var Y_AXIS = 1;
var X_AXIS = 2;
var c1a, c1b, c1c, c1d;
var c2a, c2b, c2c, c2d;

var page2 = function(p) {

	var myFont;
	var img2;
	var c2a, c2b, c2c, c2d;

  p.setup = function() {
  	p.createCanvas(windowWidth,windowHeight);
	p.background(255);

	p.strokeWeight(7);
	p.stroke('#EE5B4F');
	p.fill(0);
	p.rectMode(RADIUS);
	p.rect(windowWidth/2,windowHeight/2, windowWidth/3.5,windowHeight/2.5);

	p.line(windowWidth/2, windowHeight/2 + windowHeight/2.5, windowWidth/2, windowHeight/2 - windowHeight/2.5);

	p.noStroke();
	p.textFont(myFont);
	p.textSize(20);
	p.text("Select a new palette.", windowWidth/12, windowHeight/12);

//left page photo//
	push();
		p.translate(windowWidth/2 - windowWidth/3.5, windowHeight/2 - windowHeight/2.5);
		p.image(img2,20,35, windowWidth/4, windowHeight/1.5);
	pop();


//right page gradient top//

	push();
		p.translate(windowWidth/1.8, windowHeight/2 - windowHeight/2.5);
		p.setGradient(20, 100, windowWidth/8, windowHeight/6, c2a, c2b, Y_AXIS);
	pop();

	//right page gradient bottom//

	push();
		p.translate(windowWidth/1.8, windowHeight/2);
		p.setGradient(20, 35, windowWidth/8, windowHeight/6, c2c, c2d, Y_AXIS);
	pop();

	}
  }

	p.mousePressed = function() {
	if (mouseX > windowWidth/2 && mouseY < windowHeight/2){
		p.createCanvas(windowWidth,windowHeight);
		p.background(255);

		p.strokeWeight(7);
		p.stroke('#EE5B4F');	
		p.fill(0);
		p.rectMode(RADIUS);
		p.rect(windowWidth/2,windowHeight/2, windowWidth/3.5,windowHeight/2.5);

		p.line(windowWidth/2, windowHeight/2 + windowHeight/2.5, windowWidth/2, windowHeight/2 - windowHeight/2.5);


		p.noStroke();
		p.textFont(myFont);
		p.textSize(20);
		p.text("Palette has been selected.", windowWidth/12, windowHeight/12);


		push();
			p.translate(windowWidth/2 - windowWidth/3.5, windowHeight/2 - windowHeight/2.5);
			p.image(img2,20,35, windowWidth/4, windowHeight/1.5);
		pop();

		push();
			p.translate(windowWidth/2, windowHeight/2 - windowHeight/2.5);
			p.setGradient(20, 35, windowWidth/4, windowHeight/1.5, c2a, c2b, Y_AXIS);
		pop();

	}

	if (mouseX > windowWidth/2 && mouseY > windowHeight/2){
			p.createCanvas(windowWidth,windowHeight);
			p.background(255);

			p.strokeWeight(7);
			p.stroke('#EE5B4F');	
			p.fill(0);
			p.rectMode(RADIUS);
			p.rect(windowWidth/2,windowHeight/2, windowWidth/3.5,windowHeight/2.5);

			p.line(windowWidth/2, windowHeight/2 + windowHeight/2.5, windowWidth/2, windowHeight/2 - windowHeight/2.5);


			p.noStroke();
			p.textFont(myFont);
			p.textSize(20);
			p.text("Palette has been selected.", windowWidth/12, windowHeight/12);


			push();
				p.translate(windowWidth/2 - windowWidth/3.5, windowHeight/2 - windowHeight/2.5);
				p.image(img2,20,35, windowWidth/4, windowHeight/1.5);
			pop();

			push();
				p.translate(windowWidth/2, windowHeight/2 - windowHeight/2.5);
				p.setGradient(20, 35, windowWidth/4, windowHeight/1.5, c2c, c2d, Y_AXIS);
			pop();

	}

	p.setGradient = function(x, y, w, h, c1, c2, axis){

		noFill();

		if (axis == Y_AXIS) {
		    for (var i = y; i <= y+h; i++){
		      var inter = map(i, y, y+h, 0, 1);
		      var c = lerpColor(c1, c2, inter);
		      stroke(c);
		      line(x, i, x+w, i);
		   }
		} 

	}
};

var myp5 = new p5(page2, 'myContainer');






function preload(){

	img1 = loadImage("FH010017.jpg");
	img2 = loadImage("000062690008.jpg");
	img3 = loadImage("000057090019.jpg");
	myFont = loadFont("Futura-Medium.ttf");

}

function setup() {

	createCanvas(windowWidth,windowHeight);
	background(255);

	strokeWeight(7);
	stroke('#EE5B4F');
	fill(0);
	rectMode(RADIUS);
	rect(windowWidth/2,windowHeight/2, windowWidth/3.5,windowHeight/2.5);

	line(windowWidth/2, windowHeight/2 + windowHeight/2.5, windowWidth/2, windowHeight/2 - windowHeight/2.5);

	noStroke();
	textFont(myFont);
	textSize(20);
	text("Select a palette.", windowWidth/12, windowHeight/12);

	 c1a = color('#1E474F');
 	 c1b = color('#8B7700');
 	 c1c = color('#E5D6D2');
 	 c1d = color('#DB776E');

 	 c2a = color('#F0F0F0');
 	 c2b = color('#41371A');
 	 c2c = color('#EFCE92');
 	 c2d = color('#A95F0D');

	 noLoop();

//left page photo//
	push();
		translate(windowWidth/2 - windowWidth/3.5, windowHeight/2 - windowHeight/2.5);
		image(img1,20,35, windowWidth/4, windowHeight/1.5);
	pop();


//right page gradient top//

	push();
		translate(windowWidth/1.8, windowHeight/2 - windowHeight/2.5);
		setGradient(20, 100, windowWidth/8, windowHeight/6, c1a, c1b, Y_AXIS);
	pop();

//right page gradient bottom//

	push();
		translate(windowWidth/1.8, windowHeight/2);
		setGradient(20, 35, windowWidth/8, windowHeight/6, c1c, c1d, Y_AXIS);
	pop();

}


function mousePressed(){

	if (mouseX > windowWidth/2 && mouseY < windowHeight/2){
		createCanvas(windowWidth,windowHeight);
		background(255);

		strokeWeight(7);
		stroke('#EE5B4F');	
		fill(0);
		rectMode(RADIUS);
		rect(windowWidth/2,windowHeight/2, windowWidth/3.5,windowHeight/2.5);

		line(windowWidth/2, windowHeight/2 + windowHeight/2.5, windowWidth/2, windowHeight/2 - windowHeight/2.5);


		noStroke();
		textFont(myFont);
		textSize(20);
		text("Palette has been selected.", windowWidth/12, windowHeight/12);


		push();
			translate(windowWidth/2 - windowWidth/3.5, windowHeight/2 - windowHeight/2.5);
			image(img1,20,35, windowWidth/4, windowHeight/1.5);
		pop();

		push();
			translate(windowWidth/2, windowHeight/2 - windowHeight/2.5);
			setGradient(20, 35, windowWidth/4, windowHeight/1.5, c1a, c1b, Y_AXIS);
		pop();

	}

	if (mouseX > windowWidth/2 && mouseY > windowHeight/2){
			createCanvas(windowWidth,windowHeight);
			background(255);

			strokeWeight(7);
			stroke('#EE5B4F');	
			fill(0);
			rectMode(RADIUS);
			rect(windowWidth/2,windowHeight/2, windowWidth/3.5,windowHeight/2.5);

			line(windowWidth/2, windowHeight/2 + windowHeight/2.5, windowWidth/2, windowHeight/2 - windowHeight/2.5);


			noStroke();
			textFont(myFont);
			textSize(20);
			text("Palette has been selected.", windowWidth/12, windowHeight/12);


			push();
				translate(windowWidth/2 - windowWidth/3.5, windowHeight/2 - windowHeight/2.5);
				image(img1,20,35, windowWidth/4, windowHeight/1.5);
			pop();

			push();
				translate(windowWidth/2, windowHeight/2 - windowHeight/2.5);
				setGradient(20, 35, windowWidth/4, windowHeight/1.5, c1c, c1d, Y_AXIS);
			pop();

	}


	// if (mouseX > windowWidth/2 && mouseY < windowHeight/2){
	// 	createCanvas(windowWidth,windowHeight);
	// 	background(255);

	// 	strokeWeight(7);
	// 	stroke('#EE5B4F');	
	// 	fill(0);
	// 	rectMode(RADIUS);
	// 	rect(windowWidth/2,windowHeight/2, windowWidth/3.5,windowHeight/2.5);

	// 	line(windowWidth/2, windowHeight/2 + windowHeight/2.5, windowWidth/2, windowHeight/2 - windowHeight/2.5);


	// 	noStroke();
	// 	textFont(myFont);
	// 	textSize(20);
	// 	text("Palette has been selected.", windowWidth/12, windowHeight/12);


	// 	push();
	// 		translate(windowWidth/2 - windowWidth/3.5, windowHeight/2 - windowHeight/2.5);
	// 		image(img2,20,35, windowWidth/4, windowHeight/1.5);
	// 	pop();

	// 	push();
	// 		translate(windowWidth/2, windowHeight/2 - windowHeight/2.5);
	// 		setGradient(20, 35, windowWidth/4, windowHeight/1.5, c2a, c2b, Y_AXIS);
	// 	pop();

	// }

	// if (mouseX > windowWidth/2 && mouseY > windowHeight/2){
	// 		createCanvas(windowWidth,windowHeight);
	// 		background(255);

	// 		strokeWeight(7);
	// 		stroke('#EE5B4F');	
	// 		fill(0);
	// 		rectMode(RADIUS);
	// 		rect(windowWidth/2,windowHeight/2, windowWidth/3.5,windowHeight/2.5);

	// 		line(windowWidth/2, windowHeight/2 + windowHeight/2.5, windowWidth/2, windowHeight/2 - windowHeight/2.5);


	// 		noStroke();
	// 		textFont(myFont);
	// 		textSize(20);
	// 		text("Palette has been selected.", windowWidth/12, windowHeight/12);


	// 		push();
	// 			translate(windowWidth/2 - windowWidth/3.5, windowHeight/2 - windowHeight/2.5);
	// 			image(img2,20,35, windowWidth/4, windowHeight/1.5);
	// 		pop();

	// 		push();
	// 			translate(windowWidth/2, windowHeight/2 - windowHeight/2.5);
	// 			setGradient(20, 35, windowWidth/4, windowHeight/1.5, c2c, c2d, Y_AXIS);
	// 		pop();

	// }

	

//flip page//

	if (mouseX > windowWidth/2 && mouseY > windowHeight/1.5){
		myp5;
	}

	// 	createCanvas(windowWidth,windowHeight);
	// 	background(255);

	// 	strokeWeight(7);
	// 	stroke('#EE5B4F');
	// 	fill(0);
	// 	rectMode(RADIUS);
	// 	rect(windowWidth/2,windowHeight/2, windowWidth/3.5,windowHeight/2.5);

	// 	line(windowWidth/2, windowHeight/2 + windowHeight/2.5, windowWidth/2, windowHeight/2 - windowHeight/2.5);

	// 	noStroke();
	// 	textFont(myFont);
	// 	textSize(20);
	// 	text("Select a new palette.", windowWidth/12, windowHeight/12);

	// //left page photo//
	// 	push();
	// 		translate(windowWidth/2 - windowWidth/3.5, windowHeight/2 - windowHeight/2.5);
	// 		image(img2,20,35, windowWidth/4, windowHeight/1.5);
	// 	pop();


	// //right page gradient top//

	// 	push();
	// 		translate(windowWidth/1.8, windowHeight/2 - windowHeight/2.5);
	// 		setGradient(20, 100, windowWidth/8, windowHeight/6, c2a, c2b, Y_AXIS);
	// 	pop();

	// //right page gradient bottom//

	// 	push();
	// 		translate(windowWidth/1.8, windowHeight/2);
	// 		setGradient(20, 35, windowWidth/8, windowHeight/6, c2c, c2d, Y_AXIS);
	// 	pop();



	// }

}



function setGradient(x, y, w, h, c1, c2, axis){

	noFill();

	if (axis == Y_AXIS) {
	    for (var i = y; i <= y+h; i++){
	      var inter = map(i, y, y+h, 0, 1);
	      var c = lerpColor(c1, c2, inter);
	      stroke(c);
	      line(x, i, x+w, i);
	    }
	} 

}