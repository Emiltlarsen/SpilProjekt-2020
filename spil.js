var canvasW = 1000
var canvasH = 500
var side = 0



function setup() {
    createCanvas(canvasW, canvasH);
    background(153);

  }

  function mouseClicked(){
    if (side === 0 && 200 < mouseX && mouseX < 400 && 300 < mouseY && mouseY < 400){
      console.log("lmao")
      
      side = 1;
    }

  }
function draw () {
  if (side === 1 && 123 < mouseX && mouseX < 246 && 123 < mouseY && mouseY < 246){
    rect(123,123,123,123)
  }

  if (side === 2){
    rect(234,234,234,234)
  }


   
}