var location1 = {x:1, y:2}
var location2 = {x:1, y:2}
var location3 = {x:1, y:2}
var location4 = {x:1, y:2}
var location5 = {x:1, y:2}

var intervalPerSpawn = 15; //sekunder
var weaponsOnMap = [];
var maxNumberOfWeaponsOnMap = 4;
var numberOfWeapons = 0;

var phase1 = 0; //minutter
var phase2 = 2; //minutter
var phase3 = 5; //minutter
var hitboxSize = 50;

class Weapon {
    constructor(firerate, damage, level, ammo, weaponW, weaponH){
        this.firerate = firerate;
        this.damage = damage;
        this.level = level;
        this.ammo = ammo;
        this.weaponW = weaponW;
        this.weaponH = weaponH;
    }
}


var class0Weapon = new Weapon(0, 0, 0, 0, 0, 0); //uneguiped
var class1Weapon = new Weapon(1, 5, 1, 12, 20, 17); //pistol
var class2Weapon = new Weapon(0.5, 3, 2, 30, 32, 29); //uzi
var class3Weapon = new Weapon(3, 25, 3, 5, 64, 29); //sniper



class weaponSpawn {
    constructor(x, y, weapon){
        this.x = x;
        this.y = y;
        this.weapon = weapon;
    }

    hitboxConverter() {
        topLeftX = this.x - hitboxSize
        topLeftY = this.y - hitboxSize
        topRightX = this.x + hitboxSize + weapon.weaponW
        topRightY = this.y - hitboxSize
        BotLeftX = this.x - hitboxSize
        BotLeftY = this.y + weapon.weaponH
        BotRightX = this.x + hitboxSize + weapon.weaponW
        BotRightY = this.y + weapon.weaponH
    }
}



function minutterToFPS(minutter) {
    return minutter * 60 * 60
}

function valgAfVåben() {
    var spawnNumber = Math.random() * 10 // 0 til 10

    if(timeElapsed < minutterToFPS(phase2)){ //phase 1
        if(0 < spawnNumber < 4){
            return class1Weapon;
        } else if(4 <= spawnNumber < 9) {
            return class2Weapon;
        } else 
            return class3Weapon;

    } else if(timeElapsed < minutterToFPS(phase3)){ //phase 2
        if(0 < spawnNumber < 3){
            return class1Weapon;
        } else if(3 <= spawnNumber < 8) {
            return class2Weapon;
        } else
            return class3Weapon;

    } else if(timeElapsed >= minutterToFPS(phase3)){ //phase 3
        if(0 < spawnNumber < 2){
            return class1Weapon;
        } else if(2 <= spawnNumber < 5) {
            return class2Weapon;
        } else
            return class3Weapon; 
    }
}

function randomLocation() {
    var spawnLocNumber = Math.ceil(Math.random() * 5) // 1 til 5
    

}


function spawner() {
    if(timeElapsed % intervalPerSpawn === 0 && numberOfWeapons === maxNumberOfWeaponsOnMap){
        weaponsOnMap.shift();
        weaponsOnMap.push(valgAfVåben());

    } else if(timeElapsed % intervalPerSpawn === 0) {
        weaponsOnMap.push(valgAfVåben());
        
    }
    function display() {
        for (let i = 0; i < weaponsOnMap.length; i++) {
            image()            
        }
    }
    display()
}