'use strict'

//TASK 1, 3
class Hero{
  constructor(name, damage, hp){
    this.name = name;
    this.damage = damage;
    this.hp = hp;
  }

  kick(){
    return -23;
  }

  skill(){
    return -33;
  }
}

const heroes = [];
let isRunning = true;

while(isRunning){
  alert("Write data for ur hero");
  let urHero = heroesData();

  alert("Write data for enemy hero");
  let enemyHero = heroesData();
  
  heroes.push(urHero);
  heroes.push(enemyHero);
  console.log(heroes);

  let enemyHeroHP = heroAttack(urHero, enemyHero);

  console.log(enemyHeroHP);
  isRunning = confirm("Do u wanna try again?");
}

function heroAttack(urHero, enemyHero) {
  let isCorrect = false;

  while(!isCorrect){
    const chooseAttack = prompt("Enter how u wanna to attack enemy\n1)Kick;  2)Skill;");
  
    if(chooseAttack === '1' || chooseAttack === '2'){
      let enemyHeroHP;

      switch (chooseAttack) {
        case '1':
          enemyHeroHP = urHero.kick() + enemyHero.hp;
          break;

        case '2':
          enemyHeroHP = urHero.skill() + enemyHero.hp;
          break;
      
        default:
          break;
      }

    return enemyHeroHP;
    } else {
      alert("Wrong txt");
    }
  }
}

function heroesData() {
  let heroName = prompt("Enter name for hero");
  let heroDamage = +prompt("Enter damage for hero");
  let heroHp = +prompt("Enter hp for hero");

  return new Hero(heroName,heroDamage,heroHp);
}

//TASK 2

class User {
  constructor(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getPassword(){
    return console.log(this.password);
  }

  getEmail(){
    return console.log(this.email);
  }

  getName(){
    return console.log(this.name);
  }
}

//Entering name and check if it valid
const user = isValidData();
console.log(user);

let isRunning = true;

while (isRunning) {
  const userChoice = prompt("Enter what u wanna check\n1)Name;  2)Email;  3)Pass;  4)Quit;");
  
  switch (userChoice) {
    case '1':
      user.getName();
      break;
  
    case '2':
      user.getEmail();
      break;
  
    case '3':
      user.getPassword();
      break;
  
    case '4':
      isRunning = false;
      break;
  
    default:
      break;
  }  
}


function isValidData() {
  let isValid = false;
  
  let userName;
  let userEmail;
  let userPass;

  //Is valid name
  while(!isValid){
    userName = prompt("Enter ur name here pls");
  
    if(userName.length < 2){
     alert("Try again, ur name needn`t to be shorter than 2 symbols"); 
    } else isValid = true;
  }

  // Is valid email
  isValid = false;

  while(!isValid){
    userEmail = prompt("Enter ur email here pls");
  
    if(!userEmail.includes('@')){
     alert("Try again, ur email need to contain symbol '@'"); 
    } 
    else if(!userEmail.includes('.')){
      alert("Try again, ur email need to contain symbol '.'"); 
    } 
    else if(userEmail[0].includes('@')){
      alert("Try again, ur email need to contain txt before symbol '@'"); 
    } else isValid = true;
  }

  //Is valid pass
  isValid = false;

  while(!isValid){
    userPass = prompt("Enter ur password here pls");
    
    if(userPass.length < 5){
      alert("Try again, ur password needn`t to be shorter than 5 symbols")
    } else isValid = true;
  }

  return new User(userName, userEmail, userPass);
}