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

function draw() {
    document.onkeydown=skyd;
        for (let index = 0; index < bullets.length; index++) {
        bullets[index].display();
        bullets[index].move();
        }  
        if (onCooldown === true) {
            console.log("TimerActive")
            checkCooldown()
        }
        if (onCooldown1 === true) {
            console.log("TimerActive")
            checkCooldown1()
        }
    
}


let retning1 = 4;
let retning2 = 4;

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


function skyd(h){
    if(h.keyCode === 76 && onCooldown === false) {
        var patron = new ball(100, 150, 40, 255, retning1)
        bullets.push(patron);
        disableState(3);
    console.log("bang!")
    }

    if(h.keyCode === 66 && onCooldown1 === false) {
        var bullet = new ball(200, 300, 40, 255, retning2)
        bullets.push(bullet);
        disableState1(3);
    console.log("bumbum")
    }

}

console.log(bullets)