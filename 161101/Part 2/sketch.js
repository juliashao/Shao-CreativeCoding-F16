
var balls = [];

function setup(){
	createCanvas(600,600);
	background(255);
	for (var i=1; i<9; i+=1){
		balls.push(new Ball(200 + (40 * i), 300 + (40 * i), .10, .10, 80, 100, 50, 80));
	}
}

function draw(){
	background(255);

	for (var i=1; i<balls.length; i+=1){

		balls[i].ballDisp();
		balls[i].animate();
		balls[i].colorChange();

	}

}

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

	this.colorChange = function(){
		this.R = random(0,255);
		this.G = random(0,255);
		this.B = random(0,255);
	}

	this.ballDisp = function(){
		
		fill(this.R, this.G, this.B);
		ellipse(this.x, this.y, this.size, this.size);

	}
};