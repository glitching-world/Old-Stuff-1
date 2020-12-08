//missing original image

let modeC1 = 1;
let modeC2 = 1;

function preload() {
  img = loadImage('mad_lego.jpg')
}

function setup() {

  createCanvas(864, 480)
  noStroke()
  image(img, 0, 0)
  loadPixels()
  for (let i = 0; i < img; i++) {
    pixels[i + img] = pixels[i]
  }
  updatePixels()
}

function draw() {
  pixel = get(mouseX, mouseY)
  noStroke()
  fill(pixel)
}

function mouseDragged() {
  mode1()
  mode2()

  //console.log("mode spacing = " + modeC1)
  //console.log("mode size = " + modeC2)
  //console.log("key = " + keyCode)
}

function keyPressed() {
  if (keyCode === 49) {
    modeC1 = modeC1 + 1
  }
  if (keyCode === 50) {
    modeC2 = modeC2 + 1
  }
}

function mode1() {
  if (modeC1 === 1) {
    X = mouseX
    Y = mouseY
  } else if (modeC1 === 2) {
    X = mouseX - (mouseX % 30)
    Y = mouseY - (mouseY % 30)
  } else if (modeC1 === 3) {
    X = mouseX - (mouseX % 20)
    Y = mouseY - (mouseY % 20)
  } else if (modeC1 === 4) {
    X = mouseX - (mouseX % 10)
    Y = mouseY - (mouseY % 10)
  } else if (modeC1 === 5) {
    X = mouseX - (mouseX % 100)
    Y = mouseY - (mouseY % 10)
  } else {
    modeC1 = 1
  }
}

function mode2() {
  if (modeC2 === 1) {
    rect(X, Y, random(5, 10), random(5, 10))
  } else if (modeC2 === 2) {
    rect(X, Y, 30, 30)
  } else if (modeC2 === 3) {
    rect(X, Y, 20, 20)
  } else if (modeC2 === 4) {
    rect(X, Y, 10, 10)
  } else if (modeC2 === 5) {
    rect(X, Y, 250, 10)
  } else {
    modeC2 = 1
  }
}