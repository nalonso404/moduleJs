//Soldier

function Soldier(health,strength){
  this.health= health;
  this.strength=strength;

  this.attack()= function(){
    return this.strength
  }
  this.receiveDamage() = function (damage) {
    this.health -= damage 
  }
}

// Viking
function Viking (name, health, strength){
  Soldier.call(this, health,strength);
  this.name = name;
  tis.receiveDamage= function(damage){
    this.health-= damage;
    this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.battleCry = function(){
  return `Odin Owns You All!`
}

//Saxon

function Saxon (health,strength){
  Soldier.call (this, health,strength)
  this.receiveDamage = function(damage) {
    this.health-=damage;
    this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

//War

function War (){
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (Viking){
  this.vikingArmy.push(Viking)
}

War.prototype.addSaxon = function (Saxon){
  this.saxonArmy.push(Saxon)
}

War.prototype.vikingAttack= function(){
  let randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length))];
  let randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length))];
  let result = randomSaxon.receiveDamage(randomViking.strength);
    if(randomSaxon.health <= 0){
      this.saxonArmy.splice(this.saxonArmy[randomSaxon],1);
  }
  return result;
}

War.prototype.saxonAttack= function(){
  let randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length))];
  let randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length))];
  let result = randomViking.receiveDamage(randomSaxon.strength);
    if(randomViking.health <= 0){
      this.vikingArmy.splice(this.vikingArmy[randomViking],1);
  }
  return result;
}

War.prototype.showStatus= function(){

  if(this.saxonArmy.length && this.vikingArmy.length === 1){
      return `Vikings and Saxons are still in the thick of battle.`
  } else if(this.saxonArmy.length === 0){
      return`Vikings have won the war of the century!`;
  } else if(this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survive another day...'
  }
}
