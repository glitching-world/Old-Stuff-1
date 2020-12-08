function setup() {
  createCanvas(400, 400);
  frameRate(15);
  space = 10;
  x = 0;
  y = 0;
  sizeX = width;
  sizeY = height;
  s1 = 3;
  grow1 = true;
  s2 = 3;
  grow2 = true;
}

function draw() {
  background(0);

  for (i = 0; i < sizeY; i = i + space) {
    push();
    strokeWeight(s1);
    stroke(50,50,200);
    line(x + sizeX / 2, (y + 5) + i, x + sizeX, (y + 5) + i);
    if (grow1 == true) {
      s1++;
    }
    if (grow1 == false) {
      s1--;
    }
    if (s1 > 6) {
      grow1 = false;
      s1 = 6;
    }
    if (s1 < 0) {
      grow1 = true;
      s1 = 0;
    }
    pop();
  }
  
  for (i = 0; i < sizeY; i = i + space) {
    push();
    strokeWeight(s2);
    stroke(200,50,50);
    line(x, (sizeY - 5) - i, x + sizeX/2, (sizeY - 5) - i);
    if (grow2 == true) {
      s2--;
    }
    if (grow2 == false) {
      s2++;
    }
    if (s2 > 6) {
      grow2 = true;
      s2 = 6;
    }
    if (s2 < 0) {
      grow2 = false;
      s2 = 0;
    }
    pop();
  }
}