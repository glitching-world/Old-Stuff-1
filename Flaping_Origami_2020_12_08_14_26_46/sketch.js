var size;
var bound;

function setup() {
  createCanvas(400, 400);
  size = 100;
  bound = 150;
  mouseX = width / 2;
  mouseY = height / 2;
  background(0);
}

function draw() {

  if (mouseX > (width / 2) - bound && mouseX < (width / 2) + bound &&
    mouseY > (height / 2) - bound && mouseY < (height / 2) + bound) {
    fill(0);
    stroke('#00AAED');
    triangle(mouseX, mouseY, (width / 2) + size, (height / 2) + size, (width / 2) - size, (height / 2) + size);
  }
}

function mouseClicked() {
  background(0);
}