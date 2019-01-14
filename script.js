console.log('reading js');

function setup() {
  // change size to createCanvas
  // create a variable to reference the canvas
  var myCanvas = createCanvas(800, 250);
  // connect myCanvas to mySketch
  myCanvas.parent('mySketch');
}

function draw() {
  ellipse(mouseX, mouseY, 50, 50);
}
