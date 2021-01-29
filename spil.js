//var canvas = document.querySelector('#canvas');
//var context = canvas.getContext('2d');

startPosC1X = 200;
startPosC1Y = 10;

var prexPos = startPosC1X;
var preyPos = startPosC1Y;

var characterSizeX = 0;
var characterSizeY = 0;

var centerxPos = startPosC1X + (characterSizeX / 2);
var centeryPos = startPosC1Y + (characterSizeY / 2);



character1Pos = {
    characterSizeX : 50,
    characterSizeY : 50,

    centerxPos : startPosC1X + (characterSizeX / 2),
    centeryPos : startPosC1Y + (characterSizeY / 2),

//    prexPos : centerxPos,
//    preyPos : centeryPos,
    
    xPosTL : centerxPos - characterSizeX / 2,    //top left
    yPosTL : centeryPos - characterSizeY / 2,    //top left
    xPosTR : centerxPos + characterSizeX / 2,    //top right
    yPosTR : centeryPos - characterSizeY / 2,    //top right
    xPosBL : centerxPos - characterSizeX / 2,    //button left
    yPosBL : centeryPos + characterSizeY / 2,    //button left
    xPosBR : centerxPos + characterSizeX / 2,    //button right
    yPosBR : centeryPos + characterSizeY / 2,    //button right

    speedX : 0,
    speedY : 0,
}


/*function jump(char) {
    jumpActive = true;
    char.speedY = -15;
}

function updateJump(char) {
    if (jumpActive === true) {
        if (char.speedY < 1) {
            char.speedY++;
        } else if (coll === true) {
            jumpActive = false;
        }
    }
}

function ned(char) {
    char.speedY++
}

function fall(char) {
    if (coll === false && jumpActive === false) {
        char.speedY = 1
    } else if (coll === true && jumpActive === false)
        char.speedY = 0;
}

function move(char) {
    char.xPosTL += char.speedX;
    char.yPosTL += char.speedY;
}



function collisionButtonY(char) {
    if (100 < char.xPosTL &&
        char.xPosTL < 349 &&
        (char.yPosTL + 50) === 99
        ||
        100 <= char.xPosTL + 50 &&
        char.xPosTL <= 349 + 50 &&
        char.yPosTL + 50 === 99
        ) {
            coll = true
            console.log("collision med blok")
    } else
    coll = false
}

function keyReleased() { //der er her palds til forbedringer i forhold til helt clean movement. 
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
        character1Pos.speedX = 0;
    }
    return false
}*/


function controls(e) {
    //alert(e.KeyCode);
        if(e.keyCode==37) {
            console.log("Venstre pil")
            character1Pos.speedX = -1;
        }
        if(e.keyCode==38) {
            console.log("Op pil")
            if (jumpActive === false) {
                jump(character1Pos);
            }
        }
        if(e.keyCode==39) {
            console.log("Højre pil")
            character1Pos.speedX = 1;
        }
        if(e.keyCode==40) {
            console.log("Ned pil")
            if (coll === true) {
                ned(character1Pos)
            }
        }
    }


let Spiller1 = new Spiller(300, 20, 50, 75, 0, 0);


function setup() {
    createCanvas(1600, 740);
    background(153);
    rect(character1Pos.xPosTL, character1Pos.yPosTL, character1Pos.characterSizeX, character1Pos.characterSizeY);
    rect(100, 100, 300, 10);
    frameRate(60);
    Spiller1.tegn();
    //coll = false
    //onCooldown = false
    //jumpActive = false
}




function draw() {
    //move(character1Pos)
    Spiller1.move();
    //collisionButtonY(character1Pos)
    Spiller1.collisionButtonY();
    background(153);
    //rect(character1Pos.xPosTL, character1Pos.yPosTL, character1Pos.characterSizeX, character1Pos.characterSizeY);
    Spiller1.tegn();
    rect(100, 100, 300, 10);
    //updateJump(character1Pos)
    Spiller1.updateJump();
    //fall(character1Pos)
    Spiller1.fall();
    document.onkeydown = controls;


    /*function disableState(seconds) {
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
    if (onCooldown === true) {
        console.log("TimerActive")
        checkCooldown()
    }*/




    //kollision mellem to firkanter - gemmes til måske senere brug
            /*(character1Pos.xPosTL < 100 + 300 &&
            character1Pos.xPosTL + 50 > 100 &&
            character1Pos.yPosTL < 101 + 10 &&
            character1Pos.yPosTL + 50 > 99 */ 

    /*function collisionTopY() {
        if (100 <= character1Pos.TL && character1Pos.TL <= 200 && 100 <= character1Pos.TL && character1Pos.TL <= 110 || 100 <= character1Pos.TR && character1Pos.TR <= 200 && 100 <= character1Pos.TR && character1Pos.TR <= 110) {
            character1Pos.speedY = 1;
            console.log("123_____________")
        }
    }*/



}