var rx, ry, rr, star, count;

function setup() {
  frameRate(10);
  createCanvas(400, 400);
  background(0);

  rectMode(CORNER);

  rx = width / 2;
  ry = height / 2;

  rr = 0;

  star = 5; //change value here

  textSize(9);

  count = 0;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    star++;
    count = 0;
    background(0);
  } else if (keyCode === DOWN_ARROW) {
    star--;
    count = 0;
    background(0);
  }
}

function draw() {
  if (star <= 1) {
    star = 2;
  }

  push();
  noFill();
  strokeWeight(3);
  //stroke(20, 100, 150);
  stroke(random(50, 200), random(50, 200), random(50, 200));
  translate(rx, ry);
  rr = rr + (PI / star);
  rotate(rr);
  rect(0, 0, 100, 100);
  pop();

  push();
  fill(0);
  rect(0, 0, 50, 50);
  fill(20, 100, 150);
  text("count: " + count, 10, 20);
  text("star:  " + star, 10, 30);
  pop();

  if (count < star * 2) {
    count++;
  }
}