let Spiller1 = new Spiller(300, 20, 50, 50, 0, 0, 255, 0, 0);
let Spiller2 = new Spiller(100, 20, 50, 50, 0, 0, 0, 255, 0);


var canvasW = 1600
var canvasH = 740
var side = 0
let spilside;
let bg;
let set;


function keyReleased() { //der er her palds til forbedringer i forhold til helt clean movement. Mangler fiks til p2 - rækkefølge matters åbenbart 
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
        Spiller1.speedX = 0;
    }
    if (keyCode === KeyA || keyCode === 'd') {
        Spiller2.speedX = 0;
    } 
    return false
}



function controls(e) {
    //alert(e.KeyCode);
    //Spiller1
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

    //Spiller2
        if(e.keyCode==65) {
            console.log("A")
            Spiller2.speedX = -1
        }
        if(e.keyCode==87) {
            console.log("W")
            if (Spiller2.jumpActive === false) {
                Spiller2.jump();
            }
        }
        if(e.keyCode==68) {
            console.log("D")
            Spiller2.speedX = 1
        }
        if(e.keyCode==83) {
            console.log("S")
            if (Spiller2.collision === true) {
                Spiller2.ned()
            }
        }
        
}



function setup() {
    spilside = loadImage('Spilside.png');
    bg = loadImage('StartsideP.png');
    set = loadImage('SettingssideP2.png');
    createCanvas(canvasW, canvasH);
    rect(100, 100, 300, 10);
    fill(0, 0, 255)
    frameRate(60);
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

    if (side === 1){

        background(spilside); 
        fill(0, 0, 255)
        rect(100, 100, 300, 10);

        Spiller1.tegn();
        Spiller1.move();
        Spiller1.collisionButtonY();
        Spiller1.updateJump();
        Spiller1.fall();

        Spiller2.tegn();
        Spiller2.move();
        Spiller2.collisionButtonY();
        Spiller2.updateJump();
        Spiller2.fall();
        document.onkeydown = controls;
    }

    //Tilbage knap lys
    if (side === 2 && 8 < mouseX && mouseX < 128 && 8 < mouseY && mouseY < 59){
        background(set);
        fill(0,0,0,63);
        rect(8,8,120,51);
    } else if (side === 2){
        background(set);
    }
}