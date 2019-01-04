var system;

function setup() { 
  var cnv = createCanvas(700, 700);
  var x = (windowWidth - width) / 2 + 50;
  var y = 20;
  cnv.position(x, y);

  system = new ParticleSystem(createVector(width/2, 50));
} 

function draw(){
  background(51);
  system.addParticle();
  system.run();
}


class Particle {
  
  constructor(pos){
    this.acceleration = createVector(0, 0.5);
    this.velocity = createVector(random(-1,1), random(-1,0));
    this.position = pos.copy();
    this.lifespan = 255;

  }

  run(){
    this.update();
    this.display();
  }

  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  display(){
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  // we want particles to decay
  isDead(){
    return this.lifespan < 0;
  }

}


class ParticleSystem {

  constructor(pos){
    this.origin = pos.copy();
    this.particles = [];
  }

  addParticle(){
    this.particles.push(new Particle(this.origin));
  }

  run(){
    for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}