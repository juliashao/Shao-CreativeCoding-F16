var ballArray = [];
var squareArray = [];

function setup() {

	createCanvas(600,600);

	for(var i = 0; i < 7; i++){
		ballArray[i] = new Ball(random(0,width), random(0,height), 3, 4);
	}

	for(var i = 0; i < 2; i++){
		squareArray[i] = new Square(random(0,width), random(0,height), 240,200,100);
	}

}

function draw() {

	background(0);

	for(var i = 0; i < ballArray.length; i++){
		ballArray[i].animate();
		ballArray[i].display();
	}

	for(var i = 0; i < squareArray.length; i++){
		squareArray[i].colorChange();
		squareArray[i].display();
	}
  
}

function mouseDragged(){

	var tempSquare = new Square(mouseX, mouseY, 100, 20, 100);
	squareArray.push(tempSquare);
	
}

function Square(_x, _y, R, G, B){

	this._x = _x
	this._y = _y
	this.size = size
	this.size = size

	this.colorChange = function(){
		this.R = random(200,255);
		this.G = random(225,255);
		this.B = random(200,255);
	}

	this.display = function(){
		fill(this.R, this.G, this.B);
		rect(this._x, this._y, 40, 40);
	}

};

function mouseClicked(){

	var tempBall = new Ball(mouseX, mouseY, random(1,8), random(1,5))
	ballArray.push(tempBall);

}

function Ball(x, y, velx, vely){

	this.x = x
	this.y = y
	this.velx = velx;
	this.vely = vely;

	this.animate = function(){
		this.x += this.velx;
		this.y += this.vely;

		if(this.x > width || this.x < 0){
			this.velx = -this.velx;
		}

		if(this.y > height || this.y < 0){
			this.vely = -this.vely;
		}
	}

	this.display = function(){
		fill(255);
		ellipse(this.x,this.y,30,30);
	}
}