







function hojrePil(event) {
    var x = event.keyCode;
    if (x == 39) {  // 37 er pilen til højre
        alert("Højre pil er trykket ned");
    }
}

function venstrePil(event) {
    var x = event.keyCode;
    if (x == 37) {  // 37 er pilen til venstre
        console.log("Venstre pil er trykket ned");
    }
}

function opPil(event) {
    var x = event.keyCode;
    if (x == 38) {  // 38 er pilen opad
        console.log("Op-pilen er trykket ned");
    }
}

function nedPil(event) {
    var x = event.keyCode;
    if (x == 40) {  // 40 er pilen nedad
        console.log("Ned-pilen er trykket ned");
    }
}
