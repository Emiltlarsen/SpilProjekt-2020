class Spiller {
    constructor(x, y, heigth, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.heigth = heigth;
        this.speedX = speedX;
        this.speedY = speedY;
        this.collision = false;
        this.jumpActive = false;
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
        } else
        this.collision = false
    }
}
