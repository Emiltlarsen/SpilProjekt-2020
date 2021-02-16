let Spiller1 = new Spiller(300, 20, 96, 28, 0, 0, 4, class2Weapon);
let Spiller2 = new Spiller(100, 20, 96, 28, 0, 0, 4, class3Weapon);

var canvasW = 1600
var canvasH = 740
var side = 1
let spilside;
let bg;
let set;

var timeElapsed = 0;

var aniState = 1;

function aniSwitcher() {
    var intervalPerAni = 25;

    if(timeElapsed % intervalPerAni === 0 && aniState === 1) {
        aniState = 2
    } else if (timeElapsed % intervalPerAni === 0 && aniState === 2) {
        aniState = 1
    }
}

function keyReleased() { //der er her palds til forbedringer i forhold til helt clean movement. Mangler fiks til p2 - rækkefølge matters åbenbart 
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) { //Spiller1
        Spiller1.speedX = 0;
    }
    if (keyCode === 65 || keyCode === 68) { //Spiller2
        Spiller2.speedX = 0;
    } 
    return false
}

function controls(e) {
    //alert(e.KeyCode);
    //Spiller1
        if(e.keyCode==37) {
            console.log("Venstre pil")
            Spiller1.speedX = -Spiller1.speed
        }
        if(e.keyCode==38) {
            console.log("Op pil")
            if (Spiller1.jumpActive === false) {
                Spiller1.jump();
            }
        }
        if(e.keyCode==39) {
            console.log("Højre pil")
            Spiller1.speedX = Spiller1.speed
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
            Spiller2.speedX = -Spiller2.speed
        }
        if(e.keyCode==87) {
            console.log("W")
            if (Spiller2.jumpActive === false) {
                Spiller2.jump();
            }
        }
        if(e.keyCode==68) {
            console.log("D")
            Spiller2.speedX = Spiller2.speed
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
    set = loadImage('SettingssideP2.png')
    player1Ani1 = loadImage('IdleP1.png'); //B72 H192
    player1Ani2 = loadImage('Player1.png');
    player2Ani1 = loadImage('IdleP1.png'); //B72 H192
    player2Ani2 = loadImage('Player1.png');
    pistolIMG = loadImage('pistol.png');
    uziIMG = loadImage('uzi.png');
    sniperIMG = loadImage('sniper.png');
    
    createCanvas(canvasW, canvasH);
    frameRate(60);
}


function mouseClicked(){
    //Start game
    if (side === 0 && 625 < mouseX && mouseX < 974 && 428 < mouseY && mouseY < 527){
    console.log("Side 1")
        
    side = 1;
    timeElapsed = 0;
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
        timeElapsed++

        background(spilside); 
        fill(0, 0, 255)
        rect(100, 100, 300, 10); //øverst til venstre
        rect(1200, 100, 300, 10); //øverst til højre

        rect(500, 250, 100, 10); //anden række ventre
        rect(1000, 250, 100, 10); //anden række højre

        rect(650, 400, 300, 10); //tredje række midten

        rect(450, 550, 300, 10); //fjerde række venstre
        rect(850, 550, 300, 10); //fjerde række højre

        rect(300, 700, 1000, 10);




        aniSwitcher();

        //Spiller1.tegn();
        Spiller1.move();
        Spiller1.collisionButtonY();
        Spiller1.updateJump();
        Spiller1.fall();
        Spiller1.tegn();
        Spiller1.tegnWeapon();

        //Spiller2.tegn();
        Spiller2.move();
        Spiller2.collisionButtonY();
        Spiller2.updateJump();
        Spiller2.fall();
        Spiller2.tegn();
        Spiller2.tegnWeapon();

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