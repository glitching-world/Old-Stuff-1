function setup() {
  frameRate(60);
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  noFill();

  let hr = hour();
  let mn = minute();
  let sc = second();


  strokeWeight(15);

  rotate(-65);
  stroke(91, 192, 235);
  let endsc = map(sc, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, endsc);
  stroke(91, 192, 235, 75);
  line(-50, 0, 150, 0);

  rotate(45);
  stroke(253, 231, 76);
  let endmn = map(mn, 0, 60, 0, 360);
  arc(0, 0, 215, 215, 0, endmn);
  stroke(253, 231, 76, 75);
  line(-40, 0, 160, 0);

  rotate(45);
  stroke(195, 66, 63);
  let endhr = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 180, 180, 0, endhr);
  stroke(195, 66, 63, 75);
  line(-30, 0, 170, 0);
}