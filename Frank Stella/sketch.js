function setup() {

	createCanvas(400,750);
	background(0);

}

function draw() {

	line(200,0,200,800);
	//for symmetry in Quadrant I and Quadrant IV
	line(200,380,800,380);
	line(200,390,800,390);
	
	stroke(255);
	strokeWeight(3);

	for (var i = 0; i < 200; i += 20){
		//Quadrant II
		line(i+20, 0, i+20, i+200);
		line(0,i+200,i+20,i+200);
		//Quadrant III
		line(i+20, 570 - i,i + 20,800);
		line(0, 570-i, i+20, 570-i);
	}

	for (var i = 200; i < 400; i += 20){
		//Quadrant I
		line(i + 20, 0, i+20, 560-i);
		line(i+20, 560-i, 800, 560-i);
		//Quadrant IV
		line(i+20, i+210, i+20, 800);
		line(i+20, i+210, 800, i+210);

	}
  
}