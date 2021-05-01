class Ant {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [];

    this.update = function () {
      // this.x += random(-5, 5);
      // this.y += random(-5, 5);
      // console.log(get(this.x, this.y));

      // var choice = floor(random(0, 4));
      // if (choice == 0) {
      //   var tempColor = get(this.x+5, this.y+5);
      //   if (
      //     tempColor[0] == 0 &&
      //     tempColor[1] == 0 &&
      //     tempColor[2] == 0 &&
      //     tempColor[3] == 255
      //   ) {
      //     this.x += 5;
      //     this.y += 5;
      //     // console.log("34809384");
      //   }
      // } else if (choice == 1) {
      //   var tempColor = get(this.x+5, this.y+5);
      //   if (
      //     tempColor[0] == 0 &&
      //     tempColor[1] == 0 &&
      //     tempColor[2] == 0 &&
      //     tempColor[3] == 255
      //   ) {
      //     this.x += 5;  // x = x+5
      //     this.y -= 5;
      //   }
      // } else if (choice == 2) {
      //   var tempColor = get(this.x+5, this.y+5);
      //   if (
      //     tempColor[0] == 0 &&
      //     tempColor[1] == 0 &&
      //     tempColor[2] == 0 &&
      //     tempColor[3] == 255
      //   ) {
      //     this.x -= 5;
      //     this.y += 5;
      //   }
      // } else if (choice == 3) {
      //   var tempColor = get(this.x+5, this.y+5);
      //   if (
      //     tempColor[0] == 0 &&
      //     tempColor[1] == 0 &&
      //     tempColor[2] == 0 &&
      //     tempColor[3] == 255
      //   ) {
      //     this.x -= 5;
      //     this.y -= 5;
      //   }
      // }
      // console.log(choice);

      var possible_neighbors = [
        [this.x, this.y - 5],
        [this.x, this.y + 5],
        [this.x + 5, this.y],
        [this.x - 5, this.y],
      ];
      //console.log(possible_neighbors);
      var valid = [];
      // var p = [];
      for (var i = 0; i < possible_neighbors.length; i++) {
        var tempColor = get(possible_neighbors[i][0], possible_neighbors[i][1]);
      console.log(tempColor);
        if (
          tempColor[0] == 0 &&
          tempColor[1] == 0 &&
          tempColor[2] == 0 &&
          tempColor[3] == 255
        ) {
          valid.push(possible_neighbors[i]);
          //console.log(valid);
        }
      }
      var choice = [];
      if (valid.length == 0) {
        choice = random(0, 3);
        console.log("dsfhskjdhfkjshfdjkshjdfkjdhf")
        if (choice == 0) {
          this.x = this.x + 5;
          console.log("hello")
        }
        if (choice == 1) {
          this.x = this.x - 5;
        }
        if (choice == 2) {
          this.y = this.y + 5;
        }
        if (choice == 3) {
          this.y = this.y - 5;
        }
      } else {
        var temp1 = floor(random(0, valid.length));
        //choice = valid[];
        // console.log(temp1);
        // console.log("vaild",valid);
        this.x = valid[temp1][0];
        this.y = valid[temp1][1];
      }

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

      if (this.history.length > 100) {
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
