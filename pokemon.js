import inquirer from "inquirer";
export class Pokemon {
  constructor(name, hitpoints, attackDamage, move) {
    this.name = name;
    this.hitpoints = hitpoints;
    this.attackDamage = attackDamage;
    if (move === "") {
      this.move = move;
    } else this.move = "tackle";
  }
  takeDamage(damage) {
    this.hitpoints = this.hitpoints - damage;
  }
  useMove() {
    console.log(`${this.name} used ${this.move} move`);
    return this.attackDamage;
  }
  hasFainted() {
    if (this.hitpoints <= 0) {
      return true;
    } else {
      return false;
    }
  }
}

export class firePokemon extends Pokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move);
    this.type = "fire";
  }

  isEffectiveAgainst(opponentPokemon) {
    if (opponentPokemon.type === "grass") {
      return true;
    } else {
      return false;
    }
  }
  isWeakTo(opponentPokemon) {
    if (opponentPokemon.type === "water") {
      return true;
    } else {
      return false;
    }
  }
}

export class waterPokemon extends Pokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move, type);
    this.type = "water";
  }

  isEffectiveAgainst(opponentPokemon) {
    if (opponentPokemon.type === "fire") {
      return true;
    } else {
      return false;
    }
  }
  isWeakTo(opponentPokemon) {
    if (opponentPokemon.type === "grass") {
      return true;
    } else {
      return false;
    }
  }
}

export class grassPokemon extends Pokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move);
    this.type = "grass";
  }

  isEffectiveAgainst(opponentPokemon) {
    if (opponentPokemon.type === "water") {
      return true;
    } else {
      return false;
    }
  }
  isWeakTo(opponentPokemon) {
    if (opponentPokemon.type === "fire") {
      return true;
    } else {
      return false;
    }
  }
}

export class normalPokemon extends Pokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move);
    this.type = "normal";
  }
  isEffectiveAgainst() {
    return false;
  }
  isWeakTo(opponentPokemon) {
    return false;
  }
}

export class Charmander extends firePokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move, type);
    this.name = "Charmander";
    this.move = "ember";
    this.hitpoints = 44;
    this.attackDamage = 17;
  }
}

export class Squirtle extends waterPokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move, type);
    this.name = "Squirtle";
    this.move = "water gun";
    this.hitpoints = 44;
    this.attackDamage = 16;
  }
}

export class Bulbasaur extends grassPokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move, type);
    this.name = "Bulbasaur";
    this.move = "vine whip";
    this.hitpoints = 45;
    this.attackDamage = 16;
  }
}

export class Rattata extends normalPokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move, type);
    this.name = "Rattata";
    this.hitpoints = 50;
    this.attackDamage = 15;
  }
}

export class Pokeball {
  constructor(pokemon) {
    this.pokemon = {};
  }

  ballThrow(pokemon) {
    if (Object.keys(this.pokemon).length === 0) {
      this.pokemon = pokemon;
      return `You caught ${this.pokemon.name}!`;
    } else if (Object.keys(this.pokemon).length != 0) {
      return this.pokemon;
    }
  }

  isEmpty(pokemon) {
    if (Object.keys(this.pokemon).length === 0) {
      return true;
    } else {
      return false;
    }
  }
  contains() {
    if (Object.keys(this.pokemon).length === 0) {
      return "empty";
    } else {
      return `${this.pokemon.name} is in this pokeball`;
    }
  }
}

export class Trainer {
  constructor() {
    this.belt = [
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
    ];
  }

  catch(pokemon) {
    for (let i = 0; i < Object.keys(this.belt).length; i++) {
      if (Object.keys(this.belt[i].pokemon).length === 0) {
        this.belt[i].ballThrow(pokemon);
        return this.belt[i].pokemon.name;
      }
    }

    return "you already have 6 pokemon";
  }

  getPokemon(pokemon) {
    for (let i = 0; i < Object.keys(this.belt).length; i++) {
      if (this.belt[i].pokemon.name === pokemon.name) {
        return this.belt[i].ballThrow(pokemon);
      }
    }

    return "You do not have this pokemon in your belt";
  }
}

const firstQuestion = [
  {
    type: "input",
    name: "name",
    message: "Hello Trainer! What is your name?",
  },
];

const secondQuestion = [
  {
    type: "confirm",
    name: "confirm",
    message: "Do you want to continue?",
  },
];

const thirdQuestion = [
  {
    type: "list",
    name: "pokemon",
    message: "Choose your pokemon you want to catch",
    choices: ["Rattata", "Squirtle", "Bulbasaur", "Charmander"],
  },
];

const fourthQuestion = [
  {
    type: "list",
    name: "pokemon",
    message: "Choose the pokemon you want to play against",
    choices: ["Rattata", "Squirtle", "Bulbasaur", "Charmander"],
  },
];

const fifthQuestion = [];

function playGame() {
  let trainer;
  let trainerName;
  let pokemon;
  let opponentPokemon;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function namePrompt() {
    return inquirer.prompt(firstQuestion).then((firstAnswer) => {
      if (firstAnswer.name.length === 0) {
        console.log("empty name not allowed, please insert any name");
        return namePrompt();
      } else {
        trainerName = firstAnswer.name;

        console.log("Hello, Trainer " + trainerName + "! Ready to play?");
        return inquirer.prompt(secondQuestion);
      }
    });
  }

  async function battle() {
    if (pokemon.isEffectiveAgainst(opponentPokemon)) {
      pokemon.attackDamage = pokemon.attackDamage * 1.25;
    }
    if (pokemon.isWeakTo(opponentPokemon)) {
      pokemon.attackDamage = pokemon.attackDamage * 0.75;
    }
    if (opponentPokemon.isEffectiveAgainst(pokemon)) {
      opponentPokemon.attackDamage = opponentPokemon.attackDamage * 1.25;
    }
    if (opponentPokemon.isWeakTo(pokemon)) {
      opponentPokemon.attackDamage = opponentPokemon.attackDamage * 0.75;
    }

    while (pokemon.hitpoints > 0 || opponentPokemon.hitpoints > 0) {
      await sleep(1000);
      pokemon.takeDamage(opponentPokemon.useMove());
      console.log(
        `Your Pokemon ${pokemon.name} has ${pokemon.hitpoints} left before they faint `
      );

      await sleep(1000);
      opponentPokemon.takeDamage(pokemon.useMove());
      console.log(
        `Your Opponent ${opponentPokemon.name} has ${opponentPokemon.hitpoints} left before they faint `
      );
    }

    await sleep(1000);
    if (pokemon.hasFainted()) {
      await sleep(1000);
      console.log(
        `Oh no! Your pokemon ${pokemon.name} has fainted, and you have lost!`
      );

      await sleep(1000);
      console.log(
        "Restart the game. choose another type of pokemon and try again. Goodbye."
      );
    }

    await sleep(1000);
    if (opponentPokemon.hasFainted()) {
      await sleep(1000);
      console.log(
        `Well done! Your pokemon has won the battle! Time for ${pokemon.name} to get some rest`
      );

      await sleep(1000);
      console.log("Thank you for playing. Goodbye, winner!");
      return;
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function startGame() {
    const secondAnswer = await namePrompt();

    if (!secondAnswer.confirm) {
      return "Okay, come back next time when you're ready to catch 'em all. Goodbye!";
    } else {
      console.log("Okay! We're setting up your pokeballs");
      await sleep(2000);
      console.log(
        "You'll have 5 pokeballs, but there will only be one pokemon to catch!"
      );
      await sleep(2000);
      console.log("After, you'll take your pokemon into battle!");
      trainer = new Trainer();

      const thirdAnswer = await inquirer.prompt(thirdQuestion);

      if (thirdAnswer.pokemon === "Charmander") {
        pokemon = new Charmander();
      } else if (thirdAnswer.pokemon === "Squirtle") {
        pokemon = new Squirtle();
      } else if (thirdAnswer.pokemon === "Bulbasaur") {
        pokemon = new Bulbasaur();
      } else if (thirdAnswer.pokemon === "Rattata") {
        pokemon = new Rattata();
      }
      await sleep(2000);
      console.log(`You've picked ${pokemon.name}!`);
      await sleep(2000);
      console.log("Here are the details about your pokemon:");
      await sleep(2000);
      console.log(pokemon);
      await sleep(2000);
      trainer.catch(pokemon);
      await sleep(2000);
      console.log("View how your belt looks:");
      await sleep(2000);
      console.log(trainer);

      const fourthAnswer = await inquirer.prompt(fourthQuestion);

      if (fourthAnswer.pokemon === "Charmander") {
        opponentPokemon = new Charmander();
      } else if (fourthAnswer.pokemon === "Squirtle") {
        opponentPokemon = new Squirtle();
      } else if (fourthAnswer.pokemon === "Bulbasaur") {
        opponentPokemon = new Bulbasaur();
      } else if (fourthAnswer.pokemon === "Rattata") {
        opponentPokemon = new Rattata();
      }

      console.log(`You've picked ${opponentPokemon.name} as your opponent!`);
      await sleep(2000);
      console.log("Here are the details about your opponent:");
      console.log(opponentPokemon);
      await sleep(2000);

      console.log("Time to battle! Who will win?");
      const fifthAnswer = await inquirer.prompt(fifthQuestion);

      battle();
    }
  }

  startGame();
}

playGame();
