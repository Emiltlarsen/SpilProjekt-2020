var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var xPos = 200;
var yPos = 10;
var prexPos = xPos;
var preyPos = yPos;

var characterSizeX = 50;
var characterSizeY = 50;

context.rect(xPos, yPos, characterSizeX, characterSizeY);
context.rect(100, 100, 10, 10);
context.stroke();


function move1(e) {

    //alert(e.KeyCode);
    if(e.keyCode==37) {
        console.log("Venstre pil")
        prexPos = xPos + 5;
        xPos -= 1;
    }
    if(e.keyCode==38) {
        console.log("Op pil")
        preyPos = yPos + 5;
        yPos -= 1;
    }
    if(e.keyCode==39) {
        console.log("Højre pil")
        prexPos = xPos - 5;
        xPos += 1;
    }
    if(e.keyCode==40) {
        console.log("Ned pil")
        preyPos = yPos - 5;
        yPos += 1;
    }

collision(xPos, yPos);
canvas.width = canvas.width;
context.rect(xPos, yPos, characterSizeX, characterSizeY);
context.rect(100, 100, 50, 50);
context.stroke();


}

document.onkeydown = move1


function collision(x, y) {
    if (100 <= xPos >= 150) {
        xPos = prexPos;
        console.log("reee")
    }

    if (100 <= yPos >= 150) {
        yPos = preyPos;
        console.log("reeey")

    }

}