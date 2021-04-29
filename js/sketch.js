var ants = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  ants.push(new Ant(innerWidth / 2, innerWidth / 2));
}

function mousePressed() {
  ants.push(new Ant(mouseX, mouseY));
}

function draw() {
  background(200);
  strokeWeight(2)
  for (var i = 0; i < ants.length; i++) {
    ants[i].update();
    ants[i].show();
  }
}
