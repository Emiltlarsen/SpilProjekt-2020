class Spiller {
    constructor(x, y, heigth, width, speedX, speedY, speed, weaponEquiped, img1, img2) {
        this.x = x;
        this.y = y;
        this.heigth = heigth;
        this.width = width;
        this.speedX = speedX;
        this.speedY = speedY;
        this.speed = speed;
        this.weaponEquiped = weaponEquiped;
        this.img1 = img1
        this.img2 = img2
        this.collision = false;
        this.jumpActive = false;
    }
    
    tegnWeapon() {
        if(this.weaponEquiped === class1Weapon){
            image(pistolIMG, this.x + 20, this.y + 50); 
        } else if(this.weaponEquiped === class2Weapon){
            image(uziIMG, this.x + 10, this.y + 40); 
        } else if(this.weaponEquiped === class3Weapon){
            image(sniperIMG, this.x + 5, this.y + 20); 
        }
    }

    jump() {
        this.jumpActive = true;
        this.speedY = -20;
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
        if (100 < this.x && //ventre side af karakter øverst til venstre
            this.x < 349 &&
            (this.y + this.heigth) === 99
            ||
            100 <= this.x + this.width && //højre side af karakter øverst til venstre
            this.x <= 349 + 50 &&
            this.y + this.heigth === 99

            || //skifter til øverst til højre

            1200 < this.x && //ventre side af karakter øverst til højre
            this.x < 1500 &&
            (this.y + this.heigth) === 99
            ||
            1200 <= this.x + this.width && //højre side af karakter øverst til højre
            this.x <= 1500 + 50 &&
            this.y + this.heigth === 99

            ||

            500 < this.x &&
            this.x < 600 &&
            (this.y + this.heigth) === 249
            ||
            500 <= this.x + this.width && 
            this.x <= 600 + 50 &&
            this.y + this.heigth === 249

            ||

            1000 < this.x &&
            this.x < 1100 &&
            (this.y + this.heigth) === 249
            ||
            1000 <= this.x + this.width && 
            this.x <= 1100 + 50 &&
            this.y + this.heigth === 249

            ||

            650 < this.x &&
            this.x < 950 &&
            (this.y + this.heigth) === 399
            ||
            650 <= this.x + this.width &&
            this.x <= 950 + 50 &&
            this.y + this.heigth === 399

            ||

            450 < this.x &&
            this.x < 750 &&
            (this.y + this.heigth) === 549
            ||
            450 <= this.x + this.width && 
            this.x <= 750 + 50 &&
            this.y + this.heigth === 549

            ||

            850 < this.x && 
            this.x < 1150 &&
            (this.y + this.heigth) === 549
            ||
            850 <= this.x + this.width && 
            this.x <= 1150 + 50 &&
            this.y + this.heigth === 549
            
            ||

            300 < this.x && 
            this.x < 1300 &&
            (this.y + this.heigth) === 699
            ||
            300 <= this.x + this.width && 
            this.x <= 1300 + 50 &&
            this.y + this.heigth === 699
            ) {
                this.collision = true
        } else
        this.collision = false
    }
}

/*
fill(0, 0, 255)
rect(100, 100, 300, 10); //øverst til venstre
rect(1200, 100, 300, 10); //øverst til højre

rect(500, 250, 100, 10); //anden række ventre
rect(1000, 250, 100, 10); //anden række højre

rect(650, 400, 300, 10); //tredje række midten

rect(450, 550, 300, 10); //fjerde række venstre
rect(850, 550, 300, 10); //fjerde række højre

rect(300, 700, 1000, 10);
//Noter til at finde punkter...
topLeftX = this.x
topLeftY = this.y
topRightX = this.x + this.width
topRightY = this.y
BotLeftX = this.x
BotLeftY = this.y + this.heigth
BotRightX = this.x + this.width
BotRightY = this.y + this.heigth
*/