var location1 = {x:1, y:2}
var location2 = {x:1, y:2}
var location3 = {x:1, y:2}
var location4 = {x:1, y:2}
var location5 = {x:1, y:2}

var intervalPerSpawn = 15 //sekunder
var timeElapsed = 0
var weaponsOnMap = []
var maxNumberOfWeaponsOnMap = 4
var numberOfWeapons = 0

var phase1 = 0 //minutter
var phase2 = 2 //minutter
var phase3 = 5 //minutter

function minutterToFPS(minutter) {
    return minutter * 60 * 60
}


class Weapon {
    constructor(firerate, damage, level){
        this.firerate = firerate
        this.damage = damage
        this.level = level
    }
}


var class1Weapon = new Weapon(5, 3, 0)
var class2Weapon = new Weapon(10, 5, 1)
var class2Weapon = new Weapon(10, 5, 1)


function spawner() {
    if(numberOfWeapons = maxNumberOfWeaponsOnMap){
        weaponsOnMap.shift()

    } else if(timeElapsed % intervalPerSpawn === 0) {

        var spawnNumber = Math.random() * 10

        if(timeElapsed < minutterToFPS(phase2)){ //phase 1
            if(0 < spawnNumber < 4){
                weaponsOnMap.push(class1Weapon);
            } else if(4 <= spawnNumber < 9) {
                weaponsOnMap.push(class2Weapon);
            } else 
                weaponsOnMap.push(class3Weapon);

        } else if(timeElapsed < minutterToFPS(phase3)){ //phase 2
            if(0 < spawnNumber < 3){
                weaponsOnMap.push(class1Weapon);
            } else if(3 <= spawnNumber < 8) {
                weaponsOnMap.push(class2Weapon);
            } else
                weaponsOnMap.push(class3Weapon);

        } else if(timeElapsed >= minutterToFPS(phase3)){ //phase 3
            if(0 < spawnNumber < 2){
                weaponsOnMap.push(class1Weapon);
            } else if(2 <= spawnNumber < 5) {
                weaponsOnMap.push(class2Weapon);
            } else
                weaponsOnMap.push(class3Weapon); 
        }
    }
    function display() {
        for (let i = 0; i < weaponsOnMap.length; i++) {
            
            
        }


    }
    
    display()
}

