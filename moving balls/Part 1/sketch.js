// var x;
// var velocity;
var ballObj;
var ball2;
function setup(){
	createCanvas(600,600);
	ballObj = new Ball(200,300, 10,10, 100, 100,100,100);
	ball2 = new Ball(300,400, 5,5, 80, 150,80,80);
	background(255);
}

function draw(){
background(255);
	ballObj.ballDisp();
	ballObj.animate();

	ball2.ballDisp();
	ball2.animate();
	
	// animate();
	// ellipse(x,200,30,30);
}

// function animate(){
// 	x += velocity;
// }

function Ball(xVal, yVal, xVelocity, yVelocity, size, R, G, B){
	this.x = xVal;
	this.y = yVal;
	this.xVelocity = xVelocity;
	this.yVelocity = yVelocity;
	this.size = size;
	this.R = R;
	this.G = G;
	this.B = B;


	this.animate = function(){
		this.x += this.xVelocity;
		this.y += this.yVelocity;
		if (this.x > 500 || this.x < 0)  {
			this.xVelocity = -this.xVelocity;
		}
		if (this.y > 500 || this.y < 0)  {
			this.yVelocity = -this.yVelocity;
		}
	}

	this.ballDisp = function(){
		
		fill(this.R, this.G, this.B);
		ellipse(this.x, this.y, this.size, this.size);

	}
};