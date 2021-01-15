var canvasW = 1600
var canvasH = 740
var side = 0



function preload(){
  img = loadImage('SettingssideP2.png');
}

function setup() {
    createCanvas(canvasW, canvasH);
    //background(153);
    document.body.style.backgroundImage = "url('StartsideP.png')";
    document.body.style.backgroundRepeat = "no-repeat";
  }


  function mouseClicked(){
      //Start game
    if (side === 0 && 625 < mouseX && mouseX < 974 && 428 < mouseY && mouseY < 527){
      console.log("Side 1")
      
      side = 1;
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
function draw () {
  if (side === 0 && 618 < mouseX && mouseX < 965 && 421 < mouseY && mouseY < 518){
    fill(0,0,0,1);
    rect(618,421,347,97);
  } else {
    removeElements();
  }

  if (side === 2){
    document.body.style.backgroundImage = "url('SettingssideP2.png')";
  }

  if (side === 0){
    document.body.style.backgroundImage = "url('StartsideP.png')";
  }
   
}