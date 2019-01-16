console.log('reading this hehey js');


function setup() {
    background('#fbc4b6');
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    noStroke();
}

function draw() {
    // background('#FF0000');
    //speed of the mouse is used to determine the thickness of ellipse
    var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    // fill('#00FF00');
    ellipse(mouseX, mouseY, weight, weight);
    if (mouseIsPressed) { //if mouse pressed then change colors
        fill('#aed8d7');
    } else {
        fill('#eefdf5'); //else change to white
    }
}
