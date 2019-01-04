// Demonstration of multiple force acting on 
// bodies (Mass class)
// Bodies experience gravity continuously
// Bodies experience fluid resistance when in "water"

var masses = [];
var liquid;

function setup() { 
  var cnv = createCanvas(700, 700);
  var x = (windowWidth - width) / 2 + 50;
  var y = 20;
  cnv.position(x, y);

  reset();
  // Create liquid object
  liquid = new Liquid(0, height/2, width, height/2, 0.1);
} 
  

function draw() { 
  background(127);

  // draw water
  liquid.display()

  for (var i = 1; i < masses.length; i++) {
    // Is the mass in the liquid?
    if (liquid.isMassInLiquid(masses[i])) {
      // Calculate drag force
      var dragForce = liquid.dragForce(masses[i]);
      // Apply drag force to mass
      masses[i].applyForce(dragForce);
    }

    // apply gravity (scaled by mass)
    var gravity = createVector(0, 0.1*masses[i].mass);
    masses[i].applyForce(gravity);

    masses[i].update();
    masses[i].display();
    masses[i].checkEdges();
  }
  
}


function mousePressed() {
  reset();
}

// Restart all the mass objects randomly
function reset() {
  for (var i = 0; i < 9; i++) {
    masses[i] = new Mass(random(0.5, 3), 40+i*70, 0);
  }
}


class Liquid {

  constructor(xPos, yPos, width, height, c) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.c = c;
  }

  isMassInLiquid(m){
   var l = m.position;
   return l.x > this.xPos && l.x < this.xPos + this.width &&
          l.y > this.yPos && l.y < this.yPos + this.height; 
  }

  dragForce(m){
    // Magnitude is coefficient * speed squared
    var speed = m.velocity.mag();
    var dragMagnitude = this.c * speed * speed;

    // Direction is inverse of velocity
    var dragForce = m.velocity.copy();
    dragForce.mult(-1);
    
    // Scale according to magnitude
    // dragForce.setMag(dragMagnitude);
    dragForce.normalize();
    dragForce.mult(dragMagnitude);
    return dragForce; 
  }

  display(){
    noStroke();
    fill(50);
    rect(this.xPos, this.yPos, this.width, this.height);
  }
}


class Mass {

  constructor(m, x, y){
    this.mass = m;
    this.position = createVector(x, y);
    this.velocity = createVector(0,0);
    this.acceleration =createVector(0,0);
  }

  // Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(F){
    var force = p5.Vector.div(F, this.mass);
    this.acceleration.add(force);
  }

  update(){
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    // position changes by velocity
    this.position.add(this.velocity);
    // We must clear acceleration each frame
    this.acceleration.mult(0);
  }

  display(){
    stroke(0);
    strokeWeight(2);
    fill(255,127);
    ellipse(this.position.x,this.position.y,this.mass*16,this.mass*16);
  }

  checkEdges(){
    if (this.position.y > (height - this.mass*8)) {
      // A little dampening when hitting the bottom
      this.velocity.y *= -0.9;
      this.position.y = (height - this.mass*8);
    }
  }
}