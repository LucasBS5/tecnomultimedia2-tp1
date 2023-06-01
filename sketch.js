let img, img2, img3, img4;
let r, g, b;
let y, x;

function setup() {
  createCanvas(windowWidth, windowHeight);
    img = loadImage('data/f1.png');
    img2 = loadImage('data/fd2.png');    
    img3 = loadImage('data/c.png');
    img4 = loadImage('data/cd2.png');
    y = random(0,100);
    x = random(600,0);
    r = random(255);
    g = random(255);
    b = random(255);

}

function draw() {
  background(0);
    tint(r, g, b, 300);
    image(img3, x, y, 400,550);
    image(img3, x*2, y*2, 400,550);
    image(img3, x*3, y*3, 400,550);
    if (mouseY == pmouseY && mouseX == pmouseX) {
    tint(r+2, g+2, b+2, 200);
    image(img4, x, y, 400, 550);
    image(img4, x*2, y*2, 400, 550);
    image(img4, x*3, y*3, 400, 550);
    }
    x += floor(movedX);
  tint(0, 153, 204);
  image(img, 0, 0);
  tint(0, 200, 10);
  image(img2, 0, 0);
}

function mouseMoved() {
  r = random(255);
  g = random(255);
  b = random(255);
}