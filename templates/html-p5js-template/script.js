
p5.disableFriendlyErrors = false;

document.title = "ocean";

let description = "An ocean scene.", cnv;
function preload() { }

function setup() {
  let desired_width = 1024
  if (windowWidth<desired_width)
    desired_width = windowWidth;
  cnv = createCanvas(desired_width, desired_width/4);
  centerCanvas();
  describe(description);
  setup_()
}

function draw() {
  draw_()
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  let desired_width = 1024
  if (windowWidth<desired_width)
    desired_width = windowWidth;  
  resizeCanvas(desired_width, desired_width/4)
  centerCanvas();
}