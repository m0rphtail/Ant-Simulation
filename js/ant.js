class Ant {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [];

    this.update = function () {
      this.x += random(-10, 10);
      this.y += random(-10, 10);

      if (this.x > innerWidth) {
        this.x -= 10;
      }
      if (this.x < 0) {
        this.x += 10;
      }
      if (this.y > innerHeight) {
        this.y -= 10;
      }
      if (this.y < 0) {
        this.y += 10;
      }
      var v = createVector(this.x, this.y);
      this.history.push(v);

      if (this.history.length > 500) {
        this.history.splice(0, 1);
      }
    };

    var colorR = random(100, 255);
    var colorG = random(100, 255);
    var colorB = random(100, 255);

    this.show = function () {
      stroke(colorR, colorG, colorB);
      fill(colorR, colorG, colorB);
      ellipse(this.x, this.y, 10, 10);

      noFill();
      beginShape();
      for (var i = 0; i < this.history.length; i++) {
        var pos = this.history[i];
        vertex(pos.x, pos.y);
      }
      endShape();
    };
  }
}
