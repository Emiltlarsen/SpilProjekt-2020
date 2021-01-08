var canvasW = 1600
var canvasH = 740
var side = 0



function setup() {
    createCanvas(canvasW, canvasH);
    //background(153);
    document.body.style.backgroundImage = "url('StartsideP.png')";
  }


  function mouseClicked(){
    if (side === 0 && 625 < mouseX && mouseX < 974 && 428 < mouseY && mouseY < 527){
      console.log("lmao")
      
      side = 1;
    }

    if (side === 0 && 625 < mouseX && mouseX < 974 && 550 < mouseY && mouseY < 653){
      console.log("lmao")
      
      side = 2;
    }

  }
function draw () {
  if (side === 1 && 123 < mouseX && mouseX < 246 && 123 < mouseY && mouseY < 246){
    rect(123,123,123,123)
  }

  if (side === 2){
    document.body.style.backgroundImage = "url('SettingssideP.png')"
  }


   
}