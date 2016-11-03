var rotateAmount = 0

function setup() {

	background(255);
	createCanvas (600,600);

}

function draw() {

	push();
		translate(100,300);

	rotAmount = map(mouseX, 0, width, 0, 2*PI);

	rotate(rotAmount);

	ellipse(10,10,60,80);

	pop();


	push();
		translate(200,300);

	rotate(PI/2);

	stroke(200,50,180);

	ellipse(0,0,40,60);

	pop();



	push();
		translate(300,300);

	rotate(PI/6);

	stroke(170,50,200);

	ellipse(0,0,40,60);

	pop();
  
}