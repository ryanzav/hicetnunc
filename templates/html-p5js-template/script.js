
p5.disableFriendlyErrors = false;

document.title = "ocean";

let description = "An ocean scene.", cnv;
let actual_width;
function preload() { }

function setup() {
  let desired_width = 1024
  actual_width = desired_width;
  if (windowWidth<desired_width)
    actual_width = windowWidth;
  cnv = createCanvas(actual_width, actual_width/4);
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
    actual_width = windowWidth;  
  resizeCanvas(actual_width, actual_width/4)
  centerCanvas();
}