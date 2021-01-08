//var canvas = document.querySelector('#canvas');
//var context = canvas.getContext('2d');


//var xPos = 10;
//var yPos = 10;

//context.rect(xPos, yPos, 50, 50);
//context.stroke();

function setup() {
    createCanvas(500, 500);


    player1 = new Player();
    Player2 = new Player();
}

function draw() {
    background(153);

    player1.display();
    player2.display();

}
/*
function move1(e) {

    //alert(e.KeyCode);
    if(e.keyCode==37) {
        console.log("Venstre pil")
        xPos -= 5
    }
    if(e.keyCode==38) {
        console.log("Op pil")
        yPos -= 5
    }
    if(e.keyCode==39) {
        console.log("Højre pil")
        xPos += 5
    }
    if(e.keyCode==40) {
        console.log("Ned pil")
        yPos += 5
    }

canvas.width = canvas.width;
context.rect(xPos, yPos, 50, 50);
context.stroke();


}
document.onkeydown = move1
*/
class Player {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.diameter = 30(10, 30);
        this.speed = 1;
    }

    display(){
        rect(this.x, this.y, this.diameter, this.diameter)
    }
    

}


