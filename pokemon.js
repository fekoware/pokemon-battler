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
    if (this.hitpoints === 0) {
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
  let pokemon;
  let opponentPokemon;

  function namePrompt() {
    return inquirer.prompt(firstQuestion).then((firstAnswer) => {
      if (firstAnswer.name.length === 0) {
        console.log("empty name not allowed, please insert any name");
        return namePrompt();
      } else {
        trainer = firstAnswer.name;
        console.log("Hello, Trainer " + firstAnswer.name + "! Ready to play?");
        return inquirer.prompt(secondQuestion);
      }
    });
  }

  function battle() {

    if(pokemon.hasFainted()) {
      console.log(`Oh no! Your pokemon ${pokemon.name} has fainted, and you have lost!` )
      console.log('Choose another type of pokemon and try again')
    }
    else if (opponentPokemon.hasFainted) {
      console.log(`Well done! Your pokemon has won the battle! Time for ${pokemon.name} to get some rest`)
      console.log("Thank you for playing. Goodbye!")
      return
    }
    console.log("inside battle function")

    console.log(trainer.getPokemon(pokemon)
  )
    console.log(trainer)
    console.log(opponentPokemon.hitpoints)

    opponentPokemon.takeDamage(pokemon.useMove())


    console.log(opponentPokemon.name + " has " + opponentPokemon.hitpoints +  " hitpoints left")
    



    //battle takes in both pokemons

    // enters a promise chain where pokemon go back and forth

  }

  namePrompt()
    .then((secondAnswer) => {
      if (!secondAnswer.confirm) {
        return "Okay, come back next time when you're ready to catch em' all. Goodbye!";
      } else {
        console.log("Okay! We're setting up your pokeballs");
        console.log(
          "You'll have 5 pokeballs, but there will only be one pokemon to catch!"
        );
        console.log("After, you'll take your pokemon into battle!");
        trainer = new Trainer();

        return inquirer.prompt(thirdQuestion);
      }
    })
    .then((thirdAnswer) => {
      if (thirdAnswer.pokemon === "Charmander") {
        pokemon = new Charmander();
        console.log("you've picked " + pokemon.name + "!");
        console.log("Here are the details about your pokemon");
        console.log(pokemon);
        trainer.catch(pokemon);
        console.log(
          "View how your belt looks. You can see you will have 5 empty spaces, and one space occupied by your caught pokemon!"
        );
        console.log(trainer);
        console.log(
          trainer.belt.forEach((pokeball) => {
            console.log(pokeball.name);
          })
        );
      }
      if (thirdAnswer.pokemon === "Squirtle") {
        pokemon = new Squirtle();
        console.log("you've picked " + pokemon.name + "!");
        console.log("Here are the details about your pokemon");
        console.log(pokemon);
        trainer.catch(pokemon);
        console.log(
          "View how your belt looks. You can see you will have 5 empty spaces, and one space occupied by your caught pokemon!"
        );
        console.log(trainer);
      }
      if (thirdAnswer.pokemon === "Bulbasaur") {
        pokemon = new Bulbasaur();
        console.log("you've picked " + pokemon.name + "!");
        console.log("Here are the details about your pokemon");
        console.log(pokemon);
        trainer.catch(pokemon);
        console.log(
          "View how your belt looks. You can see you will have 5 empty spaces, and one space occupied by your caught pokemon!"
        );
        console.log(trainer);
      }
      if (thirdAnswer.pokemon === "Rattata") {
        pokemon = new Rattata();
        console.log("you've picked " + pokemon.name + "!");
        console.log("Here are the details about your pokemon");
        console.log(pokemon);
        trainer.catch(pokemon);
        console.log(
          "View how your belt looks. You can see you will have 5 empty spaces, and one space occupied by your caught pokemon!"
        );
        console.log(trainer);
      }
      console.log(pokemon.name + " has been added to your your pokebelt");
      return inquirer.prompt(fourthQuestion);
    })
    .then((fourthAnswer) => {
      if (fourthAnswer.pokemon === "Charmander") {
        opponentPokemon = new Charmander();
        console.log(
          "you've picked " + opponentPokemon.name + "as your opponent!"
        );
        console.log("Here are the details about your opponent");
        console.log(opponentPokemon);
      }
      if (fourthAnswer.pokemon === "Squirtle") {
        opponentPokemon = new Squirtle();
        console.log("you've picked " + opponentPokemon.name + "!");
        console.log("Here are the details about your opponent");
        console.log(opponentPokemon);
      }
      if (fourthAnswer.pokemon === "Bulbasaur") {
        opponentPokemon = new Bulbasaur();
        console.log("you've picked " + opponentPokemon.name + "!");
        console.log("Here are the details about your opponent");
      }
      if (fourthAnswer.pokemon === "Rattata") {
        opponentPokemon = new Rattata();
        console.log("you've picked " + opponentPokemon.name + "!");
        console.log("Here are the details about your opponent");
        console.log(opponentPokemon);
      }

      console.log("Time to battle! Who will win?");
      return inquirer.prompt(fifthQuestion)

    }).then((fifthAnswer) => {
      battle()
    })
    
    

}

playGame();
