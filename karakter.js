class Spiller {

    constructor(x, y, width, heigth, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
        this.speed = speed;
        this.col = [250, 0, 0];
    }

    tegn = function () {
        Fill(this.col);
        rect(this.x, this.y, this.width, this.heigth);
    }

}