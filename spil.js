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

var coll = false



onCooldown = false
function disableState(Seconds) { //fix+^^
    var date = new Date();
    var currentDate = date.getTime();
    currentDate /= 1000;
    console.log(currentDate);
    var goalDate = currentDate + Seconds;
    console.log(goalDate);
    console.log("Cooldown Set");

    function checkCooldown() {
        if (goalDate < currentDate){
            onCooldown = false;
            console.log("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
            return
        } else {
            onCooldown = true
            console.log("Cooldown")
            currentDate += 1/60
            checkCooldown()
        }
    }

    checkCooldown();  
}

function setup() {
    createCanvas(500, 500);
    background(153);
    rect(character1Pos.xPosTL, character1Pos.yPosTL, character1Pos.characterSizeX, character1Pos.characterSizeY);
    rect(100, 100, 300, 10);
    frameRate(60)
}



function draw() {
    disableState(1000)

    function jump(char) {
        char.speedY = -100
    } //fix

    function ned() {
        character1Pos.speedY = +1
    }

    function fall(char) {
        if (coll === false) {
            char.speedY = 1
        } else if (coll === true)
            char.speedY = 0;
    }

    function move(char) {
        char.xPosTL += char.speedX;
        char.yPosTL += char.speedY;
    }

    function stopMove() {
        character1Pos.speedX = 0
    }

    function controls(e) {
        //alert(e.KeyCode);
        if(e.keyCode==37) {
            console.log("Venstre pil")
            character1Pos.speedX -= 1;
        }
        if(e.keyCode==38) {
            console.log("Op pil")
            if (onCooldown === false) {
                jump(character1Pos)
            }
            //character1Pos.yPosTL -= 1;
        }
        if(e.keyCode==39) {
            console.log("Højre pil")
            character1Pos.speedX += 1;
        }
        if(e.keyCode==40) {
            console.log("Ned pil")
            if (coll === true) {
                ned()
            }
        }
    }


    move(character1Pos)
    collisionButtonY(character1Pos)
    background(153);
    rect(character1Pos.xPosTL, character1Pos.yPosTL, character1Pos.characterSizeX, character1Pos.characterSizeY);
    rect(100, 100, 300, 10);
    fall(character1Pos)
    document.onkeydown = controls;




    //kollision mellem to firkanter - gemmes til måske senere brug
            /*(character1Pos.xPosTL < 100 + 300 &&
            character1Pos.xPosTL + 50 > 100 &&
            character1Pos.yPosTL < 101 + 10 &&
            character1Pos.yPosTL + 50 > 99 */ 


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



    function collisionTopY() {
        if (100 <= character1Pos.TL && character1Pos.TL <= 200 && 100 <= character1Pos.TL && character1Pos.TL <= 110 || 100 <= character1Pos.TR && character1Pos.TR <= 200 && 100 <= character1Pos.TR && character1Pos.TR <= 110) {
            character1Pos.speedY = 1;
            console.log("123_____________")
        }
    }



}