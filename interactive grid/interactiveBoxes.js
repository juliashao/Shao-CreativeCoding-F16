function setup() {
	
	createCanvas(600,500);

}

function draw(){

  if (mouseX <= 300 && mouseY <= 166){
    if (mouseIsPressed)
      fill(144,232,152);
      rect(0,0,300,166);
    
  }
   
  if (mouseX <=300 && mouseY >166){
    if(mouseIsPressed)
      fill(255,0,117);
      rect(0,166,300,334);
    
  }
  
  if (mouseX > 300){
     if (mouseIsPressed)
       fill(255,131,102);
       rect(300,0,300,height);
    
  }
  
  if (mouseX >500){
    if (mouseIsPressed)
      fill(136,176,232);
      rect(500,0,100,height);
  }
}