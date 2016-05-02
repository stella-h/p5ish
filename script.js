function setup() {
  createCanvas(1000, 600);
  background(51);

}

function draw() {
  if (mouseIsPressed) {
    fill (0)
  } else {
    // var red = random (255);
    // var green = random (255);
    // var blue = random (255);
    fill (255,204,0);

  }
  ellipse( mouseX, mouseY, 100, 100);
}