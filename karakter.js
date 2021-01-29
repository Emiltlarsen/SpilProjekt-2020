class Spiller {
    constructor(x, y, width, heigth, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
        this.speedX = speedX;
        this.speedY = speedY;
        this.collision = false;
        this.jumpActive = false;
        this.col = [255, 0, 0];
    }


    tegn() {
        rect(this.x, this.y, this.width, this.heigth);
        fill(this.col);
    }

    jump() {
        this.jumpActive = true;
        this.speedY = -15;
    }

    updateJump() {
        if (this.jumpActive === true) {
            if (this.speedY < 1) {
                this.speedY++;
            } else if (this.collision === true) {
                this.jumpActive = false;
            }
        }
    }

    ned() {
        this.speedY++
    }
    
    fall() {
        if (this.collision === false && this.jumpActive === false) {
            this.speedY = 1
        } else if (this.collision === true && this.jumpActive === false)
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
                this.collision = true
                console.log("collision med platform")
        } else
        this.collision = false
    }

    keyReleased() { //der er her palds til forbedringer i forhold til helt clean movement. 
        if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
            this.speedX = 0;
        }
        return false
    }
}