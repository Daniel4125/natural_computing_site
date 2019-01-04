
  function setup() { 
    var cnv = createCanvas(700, 700);
    var x = (windowWidth - width) / 2 + 50;
    var y = 20;
    cnv.position(x, y);
  } 
    

  function draw() { 
    background(220);

    // target
    ellipse(mouseX, mouseY, diam, diam)
    target = createVector(mouseX, mouseY);
    rocket.target = target;
    rocket.run();
  }



