let Spiller1 = new Spiller(300, 20, 50, 75, 0, 0);


function keyReleased() { //der er her palds til forbedringer i forhold til helt clean movement. 
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
        Spiller1.speedX = 0;
    }
    return false
}


function controls(e) {
    //alert(e.KeyCode);
        if(e.keyCode==37) {
            console.log("Venstre pil")
            Spiller1.speedX = -1
        }
        if(e.keyCode==38) {
            console.log("Op pil")
            if (Spiller1.jumpActive === false) {
                Spiller1.jump();
            }
        }
        if(e.keyCode==39) {
            console.log("Højre pil")
            Spiller1.speedX = 1
        }
        if(e.keyCode==40) {
            console.log("Ned pil")
            if (Spiller1.collision === true) {
                Spiller1.ned()
            }
        }
}


function setup() {
    createCanvas(1600, 740);
    background(153);
    rect(100, 100, 300, 10);
    frameRate(60);
    Spiller1.tegn();
}


function draw() {
    Spiller1.move();
    Spiller1.collisionButtonY();
    background(153);
    Spiller1.tegn();
    rect(100, 100, 300, 10);
    Spiller1.updateJump();
    Spiller1.fall();
    document.onkeydown = controls;
}