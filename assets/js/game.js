let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

let fight = function () {
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );

  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining."
  );
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died.");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
  );
  if (playerHealth <= 0) {
    window.alert(playerName + " has died.");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
};

fight();
