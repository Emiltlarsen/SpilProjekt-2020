var location1 = {x:1, y:2}
var location2 = {x:1, y:2}
var location3 = {x:1, y:2}
var location4 = {x:1, y:2}
var location5 = {x:1, y:2}

var intervalPerSpawn = 15 //sekunder
var timeElapsed = 0
var weaponsOnMap = []
var maxNumberOfWeaponsOnMap = 4

class Weapon {
    constructor(firerate, damage, level){
        this.firerate = firerate
        this.damage = damage
        this.level = level
    }
}


var numberOfWeapons = 0

function spawner() {
    if(numberOfWeapons = maxNumberOfWeaponsOnMap){
        weaponsOnMap.shift()
    }
}