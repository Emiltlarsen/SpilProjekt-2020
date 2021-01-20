var canvasW = 1600
var canvasH = 740
var side = 0
let bg;
let set;



function setup() {
    bg = loadImage('StartsideP.png');
    set = loadImage('SettingssideP2.png')
    createCanvas(canvasW, canvasH);
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
  background(bg);
//Starts knap lys
  if (side === 0 && 625 < mouseX && mouseX < (625 + 348) && 428 < mouseY && mouseY < (428 + 98)){
    fill(0,0,0,63);
    rect(625,428,349,100);
  } 
//Settings knap lys
  if (side === 0 && 625 < mouseX && mouseX < (625 + 349) && 542 < mouseY && mouseY < 642){
    fill(0,0,0,63);
    rect(625,542,349,100);
  } 
//Tilbage knap lys
  if (side === 2 && 8 < mouseX && mouseX < 128 && 8 < mouseY && mouseY < 59){
    background(set);
    fill(0,0,0,63);
    rect(8,8,120,51);
  } else if (side === 2){
    background(set);
  }


}