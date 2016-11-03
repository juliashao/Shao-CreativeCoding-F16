var rotation = 0;

function setup(){

	createCanvas(600,600);
	background(245,10,250);

}

function draw(){

	for (var i=1; i<5; i+=1){

		push();
			translate((width/5)*i, height/2);
			rotation = map(mouseX, 0, width, 0, PI/2);
			rotate(PI * i);
			rotate(rotation);
			rect(0,0,60,40);
		pop();

	}
}


