new p5()

var nr = 50
var nrShow = 10

X = new float(nr)
Y = new float(nr)

Xx = new float(nr)
Yy = new float(nr)

velX = new float(nr)
velY = new float(nr)

size = new float(nr)

function setup() {

  createCanvas(700, 400)

  mouseX = width / 2
  mouseY = height / 2

  for (i = 0; i < nr; i++) {
    X[i] = random(width)
    Y[i] = random(height)
    velX[i] = random(-2, 2)
    velY[i] = random(-2, 2)
    size[i] = random(5, 15)
  }
}

function draw() {

  if (nrShow >= nr - 10) {
    nrShow = nr - 10
  }
  if (nrShow <= 10) {
    nrShow = 10
  }
  if (mouseY < height / 4) {
    nrShow++
  }
  if (mouseY > (height / 4) * 3) {
    nrShow--
  }
  background(0)

  for (i = 0; i < nrShow; i++) {

    X[i] = X[i] + velX[i]
    Y[i] = Y[i] + velY[i]

    if (X[i] > width) {
      X[i] = 1
    }
    if (X[i] < 0) {
      X[i] = width
    }
    if (Y[i] > height) {
      Y[i] = 1
    }
    if (Y[i] < 0) {
      Y[i] = height
    }

    fill(100, 150, 255)
    noStroke()
    ellipse(X[i], Y[i], size[i], size[i])

    fill(255, 100, 100)
    noStroke()
    ellipse(mouseX, mouseY, 25, 25)
    distance2 = dist(mouseX, mouseY, X[i], Y[i])
    if (distance2 < size[i] * 9) {
      stroke(255, 100, 100)
      line(mouseX, mouseY, X[i], Y[i])
    }

    angle = atan2(mouseX - X[i], mouseY - Y[i])
    newX = cos(angle) * velX[i] + X[i]
    newY = sin(angle) * velY[i] + Y[i]
    X[i] = newX
    Y[i] = newY
  }

  for (i1 = 0; i1 < nrShow; i1++) {
    for (i2 = 0; i2 < nrShow; i2++) {
      distance1 = dist(X[i1], Y[i1], X[i2], Y[i2]);
      if (distance1 < size[i1] * 7) {
        push()
        stroke(100, 150, 255);
        line(X[i1], Y[i1], X[i2], Y[i2]);
        pop()
      }
    }
  }
}