    function disableState(seconds) {
        timeSeconds = seconds * 60
        onCooldown = true
        checkCooldown();
    }
    function checkCooldown() {
        if (timeSeconds > 0){
            timeSeconds--
            console.log(timeSeconds)
        } else
        onCooldown = false
    }
    if (onCooldown === true) {
        console.log("TimerActive")
        checkCooldown()
    }

    
    //kollision mellem to firkanter - gemmes til måske senere brug
            (character1Pos.xPosTL < 100 + 300 &&
            character1Pos.xPosTL + 50 > 100 &&
            character1Pos.yPosTL < 101 + 10 &&
            character1Pos.yPosTL + 50 > 99)

    function collisionTopY() {
        if (100 <= character1Pos.TL && character1Pos.TL <= 200 && 100 <= character1Pos.TL && character1Pos.TL <= 110 || 100 <= character1Pos.TR && character1Pos.TR <= 200 && 100 <= character1Pos.TR && character1Pos.TR <= 110) {
            character1Pos.speedY = 1;
            console.log("123_____________")
        }
    }


    
function tegn2() {
    image(player2, Spiller2.x, Spiller2.y);
}
