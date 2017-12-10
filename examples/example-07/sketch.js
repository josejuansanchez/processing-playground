function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255);
  line(mouseX, mouseY, pmouseX, pmouseY);
}