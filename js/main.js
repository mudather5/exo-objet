
//exo 2 partie 1
// function gameAttack(name, attack, life){
//   this.name = name;
//   this.attack = attack;
//   this.life = life;
//   this.fight = function(against){
//
//    alert(this.name + " attacked " + against.name);// in order to display the name of attacker and who has been attacked
//     return against.life = against.life - this.attack;
//   }
// };
//
// var sara = new gameAttack("Sara", 8, 70);
// var manon = new gameAttack("Manon", 10, 50);
//
// alert("It rest " + manon.fight(sara) + " life for " + sara.name);// for displaing the rest of life for who has been attacked
// alert("It rest " + sara.fight(manon) + " life for " + manon.name);// for displaing the rest of life for who has been attacked
//

//exo 2 partie  2

function gameAttack(name, attack, life){
  this.name = name;
  this.attack = attack;
  this.life = life;
  this.figh = function(against){

      return against.life = against.life - this.attack;
    }


};

function Magician(name, attack, life, magic){
  this.name = name;
  this.attack = attack;
  this.life = life;
  this.magic = magic;
  this.fight = function(against){

    //  alert(this.name + " attacked " + against.name);// in order to display the name of attacker and who has been attacked
      if(against.magic > 0){

          alert(against.name + " wanted to be treated");// in order to display the name of attacker and who has been attacked
        this.life += 10;
        against.magic -= 20;

      }else{

        alert("vous pouver pas jouer");
      }

        return against.magic;
    }


};

var magicien = new Magician("Mage", 20, 50, 40);
var guerrier = new Magician("Guerrier", 20, 100, 40);


alert("It rests " + guerrier.fight(magicien) + " life for " + magicien.name);
alert("It rests " + magicien.fight(guerrier) + " life for " + guerrier.name);
