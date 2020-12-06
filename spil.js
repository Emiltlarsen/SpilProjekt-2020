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





function setup() {
    createCanvas(500, 500);
    background(153);
    rect(character1Pos.xPosTL, character1Pos.yPosTL, character1Pos.characterSizeX, character1Pos.characterSizeY);
    rect(100, 100, 300, 10);

}



function draw() {
    function jump() {
        character1Pos.speedY = -10
        for (let i = 0; i < 2; i++) {
            character1Pos.speedY =+ i;
        }
    }

    function fall() {
        if (character1Pos.speedY = +1) {
            character1Pos.speedY = +1
        }

    }

    function move() {
        character1Pos.xPosTL += character1Pos.speedX
        character1Pos.yPosTL += character1Pos.speedY
    }

    function stopMove() {
        character1Pos.speedX = 0
    }

    function move1(e) {

        //alert(e.KeyCode);
        if(e.keyCode==37) {
            console.log("Venstre pil")
            character1Pos.speedX -= 1;
        }
        if(e.keyCode==38) {
            console.log("Op pil")
            jump()
            //character1Pos.yPosTL -= 1;
        }
        if(e.keyCode==39) {
            console.log("Højre pil")
            character1Pos.speedX += 1;
        }
        /*if(e.keyCode==40) {
            console.log("Ned pil")
            character1Pos.preyPos = character1Pos.yPosTL - 5;
            character1Pos.yPosTL += 1;
        }*/
    }


    move()
    collisionButtonY()
    stopMove
    background(153);
    rect(character1Pos.xPosTL, character1Pos.yPosTL, character1Pos.characterSizeX, character1Pos.characterSizeY);
    rect(100, 100, 300, 10);
    //fall()




    document.onkeydown = move1;



    /*function collision() {
        if (100 <= character1Pos.xPos && character1Pos.xPos <= 200 && 100 <= character1Pos.yPos && character1Pos.yPos <= 110) {
            character1Pos.xPos = character1Pos.prexPos;
            character1Pos.yPos = character1Pos.preyPos;
            console.log("1_______________")
        }
    }*/

    //100 <= character1Pos.BL && character1Pos.BL <= 200 && 100 <= character1Pos.BL && character1Pos.BL <= 110 || 100 <= character1Pos.BR && character1Pos.BR <= 200 && 100 <= character1Pos.BR && character1Pos.BR <= 110

    function collisionButtonY() {
        if (character1Pos.xPosTL < 100 + 300 &&
            character1Pos.xPosTL + 50 > 100 &&
            character1Pos.yPosTL < 100 + 10 &&
            character1Pos.yPosTL + 50 > 99        
            ) {
            character1Pos.speedY = 0;
            console.log("1_______________")
        } else
        fall()
    }



    function collisionTopY() {
        if (100 <= character1Pos.TL && character1Pos.TL <= 200 && 100 <= character1Pos.TL && character1Pos.TL <= 110 || 100 <= character1Pos.TR && character1Pos.TR <= 200 && 100 <= character1Pos.TR && character1Pos.TR <= 110) {
            character1Pos.speedY = 1;
            console.log("123_____________")
        }
    }

}