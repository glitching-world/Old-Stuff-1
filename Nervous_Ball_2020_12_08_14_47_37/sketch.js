function setup() {

  createCanvas(400, 400);
  X = random(30, 370);
  Y = random(30, 370);

  Dx = true;
  Dy = true;

  Cr = (X + Y) / 2;
  Cg = (Y / 2);
  Cb = (X / 2) * 1.5;

  Ss = false;

  S = 50;
}

function draw() {

  stroke(Cr - 20, Cg - 20, Cb - 20);
  fill(Cr, Cg, Cb);
  ellipse(X, Y, S, S);

  if (Dx == true) {
    X = X + random(1, 3);
  }
  if (Dx == false) {
    X = X - random(1, 7);
  }
  if (X > 385) {
    Dx = false;
  }
  if (X < 15) {
    Dx = true;
  }

  if (Dy == true) {
    Y = Y + random(1, 7);
  }
  if (Dy == false) {
    Y = Y - random(1, 10);
  }
  if (Y > 385) {
    Dy = false;
  }
  if (Y < 15) {
    Dy = true;
  }

  Cr = (X + Y) / 2;
  Cg = (Y / 2);
  Cb = (X / 2) * 1.5;

  if (Ss == true) {
    S++;
  }
  if (Ss == false) {
    S--;
  }
  if (S > 75) {
    Ss = false;
  }
  if (S < 7) {
    Ss = true;
  }

}