var baseUrl;
var url;
var globalData;
var lat;
var lng;
var myData;
var sunrise;

var h;
var m;

var c1, c2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  baseUrl = 'http://api.sunrise-sunset.org/json'

  lat = "40.7128"
  lng = "74.0059"

  url = baseUrl + "?lat=" + lat + "&lng=" + lng +"&date=today";

  myData = loadJSON(url, gotData);

  // Define colors
  b1 = color('#9dcce6');
  b2 = color('#eb5a4c');
  c1 = color('#e9a9cc');
  c2 = color(0, 102, 153);

  h = hour();
  m = minute();

  noLoop();
}

function setGradient(x, y, w, h, c1, c2) {

  noFill();

  for (var i = y; i <= y+h; i++) {
    var inter = map(i, y, y+h, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x+w, i);
    }

};

function gotData(myData){

	globalData = myData;
	console.log(globalData);

};

function draw() {

  // Background
  setGradient(0, 0, width/2, height, b1, b2);
  setGradient(width/2, 0, width/2, height, c2, c1);


  if (m < 10){
    m = "0" + m
    currentTime = h + ":" + m;
  }else {
    currentTime = h + ":" + m;
  }

  textSize(15);
  stroke(255);
  text('Sunrise and sunset times in New York, New York. Updating in real time (UTC). \n Current time is ' + currentTime, 15, 30);


// HERE IS MY PROBLEM!!!!!!

  if (globalData){
    sunrise = globalData.results.sunrise;
    sunset = globalData.results.sunset;

    textSize(40);
    noFill();
    stroke(255);
    
    text(sunrise,windowWidth/5,windowHeight/2);
    text(sunset,windowWidth/1.4,windowHeight/2);
  } else {
    text("nooooo", 300, 300);
  }

}