class Rocket {
  
  constructor(position) {
    this.acceleration = createVector(0,0,0);
    this.velocity = createVector(0,0,0);
    this.position = position.copy();
    this.r = 8;
    this.target;
    this.maxSpeed = 10;
    this.maxForce = 0.5;
  }

  run() {
    // draw me!
    this.update();
    this.display();
  }

  update() {
    var x = floor(this.position.x / gridscale);
    var y = floor(this.position.y / gridscale);
    x = constrain(x, 0, width / gridscale - 1); // Make sure we are not off the edge
    y = constrain(y, 0, height / gridscale - 1); // Make sure we are not off the edge

    // apply steering force
    this.seek();

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0); // take acc back down to zero

    console.log(this.velocity);
  }

  display() {
    var theta = this.velocity.heading() + PI/2;
    fill(255);
    stroke(0);
    push();
    translate(this.position.x, this.position.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r*2);
    vertex(-this.r, this.r*2);
    vertex(this.r, this.r*2);
    endShape(CLOSE);
    pop();
  }

  seek() {
    var desired = p5.Vector.sub(this.target, this.position);
    desired.normalize();
    desired.limit(this.maxSpeed);

    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    
    // apply force
    this.acceleration.add(steer);
  }

  checkEdges() {
    if (this.position > width) {
      this.destroy()
    } else if (this.position > height) {
      this.destroy();
    }
  }

  destroy() {
    
  }

  
}