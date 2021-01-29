var canvasW = 1600
var canvasH = 740
var side = 0
let bg;
let set;

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


function jump(char) {
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
}



function setup() {
    bg = loadImage('StartsideP.png');
    set = loadImage('SettingssideP2.png')
    createCanvas(canvasW, canvasH);
    rect(character1Pos.xPosTL, character1Pos.yPosTL, character1Pos.characterSizeX, character1Pos.characterSizeY);
    rect(100, 100, 300, 10);
    frameRate(60)
    let mySpiller = new Spiller(200, 100, 50, 100, 0, 0) ;
    coll = false
    //onCooldown = false
    jumpActive = false
}
    
    function mouseClicked(){
      //Start game
    if (side === 0 && 625 < mouseX && mouseX < 974 && 428 < mouseY && mouseY < 527){
      console.log("Side 1")
      
      side = 1;
    }
      //Startside til Settings
    if (side === 0 && 625 < mouseX && mouseX < 974 && 550 < mouseY && mouseY < 653){
      console.log("Side 2")
      
      side = 2;
    }
      //Settings til Startside
    if (side === 2 && 8 < mouseX && mouseX < 128 && 8 < mouseY && mouseY < 59){
      console.log("Side 0")
      
      side = 0;
    }

    }




function draw() {
    background(bg);
    //Starts knap lys
      if (side === 0 && 625 < mouseX && mouseX < (625 + 348) && 428 < mouseY && mouseY < (428 + 98)){
        fill(0,0,0,63);
        rect(625,428,349,100);
      } 
    //Settings knap lys
      if (side === 0 && 625 < mouseX && mouseX < (625 + 349) && 542 < mouseY && mouseY < 642){
        fill(0,0,0,63);
        rect(625,542,349,100);
      } 
    //Tilbage knap lys
      if (side === 2 && 8 < mouseX && mouseX < 128 && 8 < mouseY && mouseY < 59){
        background(set);
        fill(0,0,0,63);
        rect(8,8,120,51);
      } else if (side === 2){
        background(set);
      }

      if (side === 1){
    move(character1Pos)
    collisionButtonY(character1Pos)
    background(bg); //*Skal laves med platform
    rect(character1Pos.xPosTL, character1Pos.yPosTL, character1Pos.characterSizeX, character1Pos.characterSizeY);
    fill(255);
    rect(100, 100, 300, 10);
    updateJump(character1Pos)
    fall(character1Pos)
    document.onkeydown = controls;


    if (jumpActive === true) {
        updateJump(character1Pos)
    }
  }

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