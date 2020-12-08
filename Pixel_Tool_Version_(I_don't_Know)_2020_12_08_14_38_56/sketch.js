/*
Using old library of p5.js ->
Why? In the current library pixels aren't getting updated while the mouse is being dragged.
*/

let img
let pixel
let brush_setup
let X, Y

function preload() {
  img = loadImage('blue.png')
}

function setup() {
  frameRate(10);
  createCanvas(img.width, img.height)

  image(img, 0, 0)

  loadPixels()
  for (let i = 0; i < img; i++) {
    pixels[i + img] = pixels[i]
  }
  updatePixels()

  brush_setup = 1

  noStroke()

  print("Brush Setup: ", brush_setup)
}

function draw() {
  pixel = get(mouseX, mouseY)
  fill(pixel)
}

function mouseDragged() {
  brush_change()
}

function keyPressed() {
  if (keyCode === 'a' || 'A') {
    brush_setup = brush_setup + 1
    print("Brush Setup: ", brush_setup)
  }
}

function brush_change() {
  if (brush_setup === 1) {
    X = mouseX - (mouseX % 5)
    Y = mouseY - (mouseY % 5)
    rect(X, Y, 5, 5)
  } else if (brush_setup === 2) {
    X = mouseX - (mouseX % 10)
    Y = mouseY - (mouseY % 10)
    rect(X, Y, 10, 10)
  } else if (brush_setup === 3) {
    X = mouseX - (mouseX % 15)
    Y = mouseY - (mouseY % 15)
    rect(X, Y, 15, 15)
  } else if (brush_setup === 4) {
    X = mouseX - (mouseX % 20)
    Y = mouseY - (mouseY % 20)
    rect(X, Y, 20, 20)
  } else if (brush_setup === 5) {
    X = mouseX - (mouseX % 5)
    Y = mouseY - (mouseY % 5)
    rect(X, Y, 4, 4)
  } else if (brush_setup === 6) {
    X = mouseX - (mouseX % 10)
    Y = mouseY - (mouseY % 10)
    rect(X, Y, 8, 8)
  } else if (brush_setup === 7) {
    X = mouseX - (mouseX % 15)
    Y = mouseY - (mouseY % 15)
    rect(X, Y, 12, 12)
  } else if (brush_setup === 8) {
    X = mouseX - (mouseX % 20)
    Y = mouseY - (mouseY % 20)
    rect(X, Y, 16, 16)
  } else if (brush_setup === 9) {
    X = mouseX - (mouseX % 30)
    Y = mouseY - (mouseY % 30)
    rect(X, Y, 24, 24)
  } else if (brush_setup === 10) {
    X = mouseX - (mouseX % 40)
    Y = mouseY - (mouseY % 40)
    rect(X, Y, 32, 32)
  } else {
    brush_setup = 1
  }
}