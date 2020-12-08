var cr, cg, cb, ca, qx, qy, qr;

function setup() {
  createCanvas(500, 500);
  background(0);

  rectMode(CENTER);

  strokeWeight(3);

  textSize(9);

  ca = 50;
  qr = 0;
}

function draw() {
  //background(0);

  if (mouseIsPressed) {
    qr = qr + 0.1;
  } else {
    qr = qr;
  }

  push();
  translate(width / 2, height / 2);
  rotate(qr);
  quartz();
  pop();

  vars();

  //print(" cr: " + cr + " cg: " + cg + " cb: " + cb);
  //print(" qx: " + qx + " qy: " + qy + " qr: " + qr);

  push();
  fill(0, 200, 0);
  text(" red:     " + cr, 10, 20);
  text(" green:   " + cg, 10, 30);
  text(" blue:    " + cb, 10, 40);
  text(" quartzX: " + qx, 10, 50);
  text(" quartzY: " + qy, 10, 60);
  text(" quartzR: " + round(qr), 10, 70);
  pop();
}

function quartz() {
  stroke(cr, cg, cb);
  fill(cr, cg, cb, ca);
  rect(0, 0, mouseX, mouseY);
}

function vars() {
  cr = qx / 2;
  cg = qx / 2;
  cb = ((qx + qy) / 4);

  qx = mouseX;
  qy = mouseY;
}