class Spiller {
    constructor(x, y, width, heigth, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
        this.speedX = speedX;
        this.speedY = speedY;
        this.coll = false;
        this.jumpActive = false
        this.col = [250, 0, 0];
    }


    tegn = function () {
        Fill(this.col);
        rect(this.x, this.y, this.width, this.heigth);
    }

    jump() {
        this.jumpActive = true;
        this.speedY = -15;
    }
    
    updateJump() {
        if (this.jumpActive === true) {
            if (this.speedY < 1) {
                this.speedY++;
            } else if (this.coll === true) {
                this.jumpActive = false;
            }
        }
    }
    
    checkJumpActive() {
        if (this.jumpActive === true) {
            updateJump()
        }
    }

    ned() {
        this.speedY++
    }
    
    fall() {
        if (coll === false && this.jumpActive === false) {
            this.speedY = 1
        } else if (this.coll === true && this.jumpActive === false)
            this.speedY = 0;
    }
    
    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
        
    collisionButtonY() {
        if (100 < this.x &&
            this.x < 349 &&
            (this.y + 50) === 99
            ||
            100 <= this.x + 50 &&
            this.x <= 349 + 50 &&
            this.y + 50 === 99
            ) {
                this.coll = true
                console.log("collision med platform")
        } else
        this.coll = false
    }
}


/*startPosC1X = 200;
startPosC1Y = 10;


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
}*/