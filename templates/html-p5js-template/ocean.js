let yoff = 0, t = 0, ball_x = -100, ball_y = 0;

function setup_() {

    colorMode(HSB);
    frameRate(30);
    randomSeed(39304930);
}

function draw_() {
    t += 1;
    scale(1.1)
    translate(-width * .05, 0)
    background(198, 20, 100);
    stroke(40, 30, 100);
    strokeWeight(100);
    ellipse(3 * width / 4, height / 4 + 50, 1, 1);
    let xoff = 0;
    let ball_placed = false;
    for (let waves = 0; waves < 20; waves++) {
        stroke(0, 0)
        fill(color(198 - waves, 100, 100, .9));
        beginShape();
        for (let x = 0; x <= width; x += 2) {
            let turb = 2;
            let y_offset = 60 * Math.sin((-t + waves * 10 + x / 10) * 3.14 / 180)
            let y = map(noise(xoff, yoff), 0, turb, 100 + waves * waves + y_offset, waves * waves + 200 + y_offset);
            vertex(x, y);
            if (x == ball_x)
                ball_y = y;
            xoff += 0.02;
        }
        vertex(width, height);
        vertex(0, height);
        endShape(CLOSE);
        if (!ball_placed & waves == 4) {
            ball_placed = true;
            stroke(0, 90, 100, .9);
            strokeWeight(40);
            if (ball_y != 0)
                ellipse(ball_x, ball_y, 1, 1);
            ball_x += 2;
            if (ball_x > width + 100) {
                ball_x = -500;
                ball_y = 0;
            }
        }
    }
    yoff += .02;
}