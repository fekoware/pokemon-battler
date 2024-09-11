import inquirer from "inquirer";
export class Pokemon {
  constructor(name, hitpoints, attackDamage, move) {
    this.name = name;
    this.hitpoints = hitpoints;
    this.attackDamage = attackDamage;
    if (move != "") {
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

export class Battle {
  
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
    type: 'confirm',
    name: 'confirm',
    message: 'Do you want to continue?',
  }
]

function playGame() {
  inquirer.
  prompt(firstQuestion).then((firstAnswer) => {
    console.log("Hello, Trainer " + firstAnswer.name + "! Ready to play?")
    return inquirer.prompt(secondQuestion)

  }).then((secondAnswer) => {
    if (!secondAnswer.name) {
      console.log("Okay, come back next time when you're ready to catch em' all!")
      return 
    }
    else {
      console.log("Okay! We're setting up your pokeballs");
      console.log("You'll have 5 pokeballs, but there will only be one pokemon to catch!")
      console.log("After, you'll take your pokemon into battle!")
    }
  });
}

playGame();

