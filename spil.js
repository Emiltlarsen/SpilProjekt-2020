//var canvas = document.querySelector('#canvas');
//var context = canvas.getContext('2d');

var xPos = 200;
var yPos = 10;
var prexPos = xPos;
var preyPos = yPos;

var characterSizeX = 50;
var characterSizeY = 50;

var centerxPos = xPos + (characterSizeX / 2);
var centeryPos = yPos + (characterSizeY / 2);

character1Pos = {
    characterSizeX : 50,
    characterSizeY : 50,

    centerxPos : xPos + (characterSizeX / 2),
    centeryPos : yPos + (characterSizeY / 2),

    prexPos : centerxPos,
    preyPos : centeryPos,
    
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

context.rect(character1Pos.xPosTL, character1Pos.yPosTL, character1Pos.characterSizeX, character1Pos.characterSizeY);
context.rect(100, 100, 100, 10);
context.stroke();

function setup() {
    createCanvas(500, 500);
    background(153);
}



function draw() {

    function move1(e) {

        //alert(e.KeyCode);
        if(e.keyCode==37) {
            console.log("Venstre pil")
            character1Pos.speedX -= 1;
        }
        if(e.keyCode==38) {
            console.log("Op pil")
    //        character1Pos.yPosTL -= 1;
        }
        if(e.keyCode==39) {
            console.log("Højre pil")
            character1Pos.speedY += 1;
        }
        /*if(e.keyCode==40) {
            console.log("Ned pil")
            character1Pos.preyPos = character1Pos.yPosTL - 5;
            character1Pos.yPosTL += 1;
        }*/

        canvas.width = canvas.width;
        context.rect(character1Pos.xPosTL, character1Pos.yPosTL, character1Pos.characterSizeX, character1Pos.characterSizeY);
        context.rect(100, 100, 100, 10);
        context.stroke();
        collision(character1Pos.xPos, character1Pos.yPos);


        console.log(character1Pos.xPosTL);
        console.log(character1Pos.yPosTL);

    }

    document.onkeydown = move1


    /*function collision() {
        if (100 <= character1Pos.xPos && character1Pos.xPos <= 200 && 100 <= character1Pos.yPos && character1Pos.yPos <= 110) {
            character1Pos.xPos = character1Pos.prexPos;
            character1Pos.yPos = character1Pos.preyPos;
            console.log("1_______________")
        }
    }*/

    function collisionButtonY() {
        if (100 <= character1Pos.BL && character1Pos.BL <= 200 && 100 <= character1Pos.BL && character1Pos.BL <= 110 || 100 <= character1Pos.BR && character1Pos.BR <= 200 && 100 <= character1Pos.BR && character1Pos.BR <= 110) {
            character1Pos.speedY = 0;
            console.log("1_______________")
        }
    }

    function collisionTopY() {
        if (100 <= character1Pos.TL && character1Pos.TL <= 200 && 100 <= character1Pos.TL && character1Pos.TL <= 110 || 100 <= character1Pos.TR && character1Pos.TR <= 200 && 100 <= character1Pos.TR && character1Pos.TR <= 110) {
            character1Pos.speedY = -3;
            console.log("1_______________")
        }
    }


}