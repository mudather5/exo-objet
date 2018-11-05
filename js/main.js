//exo 1 partie 1
// var user = {
//   firstName: 'Manon',
//   lastName: 'Jac',
//   placeOf_birth: 'Farnce',
//   payment_by: ['cart-Master', 'cart-Visa', 'cart-Blue'],
//   age: 28,
//
//   birth_day: function(){
//   var today = new Date();
//   var birthday = today.getFullYear();
//   return  birthday - this.age;
//   }
// };
//
//   alert("she is " + user.firstName);
//   alert("her father's name is " + user.lastName);
//   alert("she was born in " + user.birth_day());

//exo 1 partie 2
// var liste = {
//   country: ['FRANCE', 'ENGLAN', 'SPAIN', 'SWISSE'],
//   payment: ['MASTER_CART', 'VISA_CART', 'BLUE_CART'],
//   mini_age: 17
// };
//
// if(liste.mini_age >= 17){
//   document.getElementById("object").innerHTML = "you have the rite to see this page";
// }else{
//   document.getElementById("object").innerHTML = "you are too fucking young";
// }
//
//  var pays = "FRANCE";
//
// if (liste.country.indexOf(pays) < 0) {
//   document.getElementById("objet").innerHTML = "pays est n'existe pas dans la liste de country";
// }else{
//     document.getElementById("objet").innerHTML = " pays existe dans la liste de country";
// }
//
// var payer = "MASTER_CART";
// if(liste.payment.indexOf(payer) < 0){
//     document.getElementById("payer").innerHTML = "payer est n'existe pas dans la liste de payement";
// }else{
//     document.getElementById("payer").innerHTML = " payer existe dans la liste de payement";
// }

//exo 2 partie 1
// function gameAttack(name, attack, life){
//   this.name = name;
//   this.attack = attack;
//   this.life = life;
//   this.fight = function(against){
//
//     return against.life = against.life - this.attack;
//   }
// };
//
// var sara = new gameAttack("Sara", 8, 70);
// var manon = new gameAttack("Manon", 10, 50);
//
// alert(manon.fight(sara));
// alert(sara.fight(manon));
//
// //exo 2 partie  2
//
// function gameAttack(name, attack, life){
//   this.name = name;
//   this.attack = attack;
//   this.life = life;
//   this.fight = function(against){
//     return against.life = against.life - this.attack;
//     }
//
// };
// var soin = new gameAttack("Soin", 20, 80);
// var magic = new gameAttack("Magic", 20, 50);
// alert(soin.fight(magic));

function Magician(name, attack, life, magic){
  this.name = name;
  this.attack = attack;
  this.life = life;
  this.magic = magic;
  this.fight = function(against){
    against.life -= this.attack;
      if(magic > 0){
        this.life += 10;
        this.magic -= 20;
      }els{
        console.log("vous pouver pas jouer");
      }

        return this.magic;
    }

};

var soin = new Magician("Soin", 20, 80, 100);
var magic = new Magician("Magic", 20, 50, 100);

alert(soin.fight(magic));
