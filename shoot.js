var x = 100;
var y = 100; 
var diam = 40;
var xspeed = 4;
var yspeed = 0;

function setup() {
    creteCanvas(600,600)
}

function draw() {
    background(0);
    display();
    moveBy();
}

function display() {
    stroke(255);
    strokeWeight(3);
    fill(0,0,0);
    ellipse(x, y, diam, diam); 
}

function move() {
y += yspeed;
x += xspeed;
}