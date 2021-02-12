class ball{

    constructor(x, y, diam, farve, xs){
    this.x = x;
    this.y = y;
    this.h = diam;
    this.col = farve;
    this.xspeed = xs;
    }



    display(){
      fill(this.col);
      stroke(255);
      ellipse(this.x, this.y, this.h, this.h);   
    }

    move(){
        this.x += this.xspeed;
    }
}

var bullets = [];

let retning1 = 4;
let retning2 = 4;
let hand1;
let hand2;

function keyPressed(){
    if (keyCode === 37){
        retning1 = -4
    } else if (keyCode === 39){
        retning1 = 4 
    }

    if (keyCode === 68){
        retning2 = 4;
    } else if (keyCode === 65){
        retning2 = -4;
    }

    if (keyCode === 37){
        hand1 = 50;
    } else if (keyCode === 39){
        hand1 = 0;
    }

    if (keyCode === 68){
        hand2 = 50;
    } else if (keyCode === 65){
        hand2 = 0;
    }
    

}

function disableState(seconds) {
    timeSeconds = seconds * 60
    onCooldown = true
    checkCooldown();
}
function checkCooldown() {
    if (timeSeconds > 0){
        timeSeconds--
        console.log(timeSeconds)
    } else
    onCooldown = false
}

function disableState1(seconds) {
    timeSeconds = seconds * 60
    onCooldown1 = true
    checkCooldown();
}
function checkCooldown1() {
    if (timeSeconds > 0){
        timeSeconds--
        console.log(timeSeconds)
    } else
    onCooldown1 = false
}

var onCooldown = false;
var onCooldown1 = false;



console.log(bullets)