//Akash Kumar & Julia Shao

int mainRandom = int(random(0,255));
int whichRGB = int(random(0,2));
color mainColor;
color sib1;
color sib2;
int red;
int blue;
int green;
int offset1;
int offset2;

void setup()
{
  size(900,900);

  background(#FFFFFF);
  red = int(random(0,255));
  blue = int(random(0,255));
  green = int(random(0,255));
  mainColor=color(red,blue,green);
  offset1 = int(random(10,15));
  offset2 = int(random(10,25));
      if (whichRGB == 0)
      {
        sib1=color(red+offset1, blue, green);
        sib2=color(red-offset2, blue, green);
        println(sib1);
        println(sib2);

      }
      else if (whichRGB == 1)
      {
        sib1=color(red, blue+offset1, green);
        sib2=color(red, blue-offset2, green);
        println(sib1);
        println(sib2);
      }
      else
      {
        sib1=color(red, blue, green+offset1);
        sib2=color(red, blue, green-offset2);
        println(sib1);
        println(sib2);
      }
}

void draw()
{
  textSize(20);
  text("colorGame by Akash and Julia" , 30,40);
  textSize(14);
  text("Select the matching color." , 35, 65);
  text("Green if you Win, Red if you lose" , 35, 85);
  fill(mainColor);
  ellipse(450,300,200,200);
  fill(mainColor);
  ellipse(150,750,100,100);
  fill(sib1);
  ellipse(450,750,100,100);
  fill(sib2);
  ellipse(750,750,100,100);
}
void mousePressed()
{
  if (mouseY >=700 && mouseY <=800)
  {
    if (mouseX >=100 && mouseX <= 200)
    {
      println("Circle 1");
      fill(148,232,144);
      rect(0,0,900,900);
    }
    else if (mouseX >=400 && mouseX <= 500)
    {
      println("Circle 2");
      fill(148,31,46);
      rect(0,0,900,900);
    }
    else if (mouseX >=700 && mouseX <= 800)
    {
     println("Circle 3");
     fill(148,31,46);
     rect(0,0,900,900);
    }
  else
  {
      println("Out of bounds");
     fill(255,255,255);
     rect(0,0,900,900);
  }

}
else
{
  println("Out of bounds");
     fill(255,255,255);
     rect(0,0,900,900);
}
}