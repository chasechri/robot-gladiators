let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Rorborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

let fight = function (enemyName) {
  window.alert("Welcome to Robot Gladiators!");

  let promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );

  if (promptFight === "fight" || promptFight === "FIGHT") {
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
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    let confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye.");
      playerMoney = playerMoney - 2;
    }
  } else {
    fight();
  }
};

for (let i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}

// fight();
