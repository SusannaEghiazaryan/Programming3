function main() {
     console.log("YES");
    var socket = io.connect('http://localhost:8080');

var value = 0;
function setup() {

  createCanvas(700, 700);
  background(200, 200, 200);
}
function draw() {

  fill(value);
 
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

function mouseDragged() {
  ellipse(mouseX, mouseY,20, 20);

  return false;
}
mouseDragged();
    

window.onload = main;
main();
}