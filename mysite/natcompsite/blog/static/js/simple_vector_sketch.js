function setup() { 
  var cnv = createCanvas(700, 700);
  var x = (windowWidth - width) / 2 + 50;
  var y = 20;
  cnv.position(x, y);
} 
  

function draw() { 
  background(220);

  var mousePos = createVector(mouseX, mouseY);
  var center = createVector(width/2, height/2);
  mousePos.sub(center);
  drawArrow(center, mousePos, 'red');

  var endpoint = createVector(width/2+50, height/2);
  var referenceVec = endpoint.sub(center);
  drawArrow(center, referenceVec, 'green');

  var angleBetween = referenceVec.angleBetween(mousePos);
  noStroke();
  text(
    'angle between: ' +
      angleBetween.toFixed(2) +
      ' radians or ' +
      degrees(angleBetween).toFixed(2) +
      ' degrees',
    10,
    50,
    90,
    50
  );
  
  

}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  var arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

