var x = 50;
var y = 50;
var speed = 2; 


function keyPressed() {
    if (keyCode === ".") {
        function draw() {
            stroke(50);
            fill(100);
            ellipse(x, y, 24, 24)
        
            x = x + speed;
        }
        
    }
}

