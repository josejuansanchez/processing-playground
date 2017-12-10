function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255);
  line(width/2, height/2, mouseX, mouseY);
}