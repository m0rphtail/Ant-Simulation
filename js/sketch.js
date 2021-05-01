var ants = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  ants.push(new Ant(innerWidth / 2, innerHeight / 2));
}

function mousePressed() {
  ants.push(new Ant(mouseX, mouseY));
}

function keyPressed() {
  if (key == "x") {
    ants.splice(ants.length - 1, 1);
  }
}

function draw() {
  background(0);
  strokeWeight(1);
  for (var i = 0; i < ants.length; i++) {
    ants[i].update();
    ants[i].show();
  }
}
