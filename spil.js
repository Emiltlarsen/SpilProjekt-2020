var canvasW = 1000
var canvasH = 500
var side = 0



function setup() {
    createCanvas(canvasW, canvasH);
    background(153);

  }


function draw () {

 if (200 < mouseX && mouseX < 400 && 300 < mouseY && mouseY < 400 ){
   console.log("lmao")
 }

    if (side === 2) {
        background(0);
     }
     
}