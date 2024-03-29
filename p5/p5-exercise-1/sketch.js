
let carX = 50;
let vroom;


function setup() {
  createCanvas(500, 500);
  vroom = new p5.Oscillator('square');
  vroom.start();
}

function draw() {
  background(255,182,193);

  // tie sound frequence to carX
  vroom.freq(carX);

  // Below are two nested if statements
  // First is timer to start moving car after 120 frames = 2 seconds
  // Second controls speed: when car hits edge (500px), it resets
  // when carX hits 300, speed it up, increasing by 6
  // otherwise have it increase by 3

  if (frameCount > 120) {
    if (carX >= 500) {
      carX = -50;
    } else if (carX >= 300) {
      carX += 6;
    } else { // otherwise it's just increasing by 3
      carX += 3;
    }

  }
  // drawing car body
  noStroke();
  fill(0, 128, 128);
  triangle(carX, 50, carX + 60, 80, carX, 80);

  // drawing car wheels
  fill(0);
  ellipse(carX, 80, 20, 20);
  ellipse(carX + 50, 80, 20, 20);
}


// mute it with mouse click!
function mousePressed() {
  vroom.stop();
}
