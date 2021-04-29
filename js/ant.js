class Ant {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [];

    this.update = function () {
      this.x += random(-3, 3);
      this.y += random(-3, 3);

      var v = createVector(this.x, this.y);
      this.history.push(v);

      if (this.history.length > 500) {
        this.history.splice(0, 1);
      }
    };

    this.show = function () {
      stroke(0);
      fill(0, 150);
      ellipse(this.x, this.y, 24, 24);

      for (var i = 0; i < this.history.length; i++) {
        var pos = this.history[i];
        ellipse(pos.x, pos.y, 2, 2);
      }
    };
  }
}
