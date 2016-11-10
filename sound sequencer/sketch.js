var ballArray = []
var squareArray = []
var audio1;
var audio2;
var audio3;

function preload(){

	// audio1 = loadSound('distort-ring.wav');
	// audio2 = loadSound('audio2.wav');
	// audio3 = loadSound('audio3.wav');
}

function setup() {

	createCanvas(700,700);

	ballArray[0] = new Ball(0, 50, 5);
	ballArray[1] = new Ball(650, 0, 5);
	ballArray[2] = new Ball(700, 650, 5);
	ballArray[3] = new Ball(50, 650, 5);
	

	squareArray[0] = new Square(100,300,10,10);
	squareArray[1] = new Square(200,300,5,5);
	squareArray[2] = new Square(300,300,10,10);
	squareArray[3] = new Square(400,300,5,5);
	squareArray[4] = new Square(500,300,10,10);

}

function draw() {

	background(0);

	ballArray[0].animateQ1();
	ballArray[0].display();

	ballArray[1].animateQ2();
	ballArray[1].display();

	ballArray[2].animateQ1();
	ballArray[2].display();

	ballArray[3].animateQ2();
	ballArray[3].display();

	for(var i = 0; i < squareArray.length; i++){
		squareArray[i].animate();
		squareArray[i].display();
	}
  
}

function mouseClicked(){

	var tempBall = new Ball(mouseX, mouseY, random(1,8));
	ballArray.push(tempBall);
}

function Square(xVal, yVal, size, R, G, B){

	this.x = xVal;
	this.y = yVal;
	this.minSize = size;
	this.maxSize = size + 80;
	this.currSize = size

	this.animate = function(){

		this.currSize +=2
		if (this.currSize > this.maxSize){
			this.currSize = -this.currSize;
			// audio2.play();
		}
	}

	this.colorChange = function(){

		this.R = random(200,255);
		this.G = random(225,255);
		this.B = random(200,255);

	}

	this.display = function(){

		fill(this.R, this.G, this.B);
		rect(this.x, this.y, this.currSize, this.currSize);
	}

};

function Ball(xVal, yVal, xVeloc){

	this.x = xVal;
	this.y = yVal;
	this.xVeloc = xVeloc;

	this.animateQ1 = function(){

		this.x += this.xVeloc;

		if(this.x > width || this.x < 0){
			this.xVeloc = -this.xVeloc;
			// audio1.play();
		}

	}

	this.animateQ2 = function(){

		this.y += this.xVeloc;

		if(this.y > width || this.y < 0){
			this.xVeloc = -this.xVeloc;
			// audio3.play();
		}

	}

	this.display = function(){

		fill(255);
		ellipse(this.x, this.y, 30,30);
	}

};