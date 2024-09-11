const inquirer = require('inquirer')

class Pokemon {
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

class firePokemon extends Pokemon {
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

class waterPokemon extends Pokemon {
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

class grassPokemon extends Pokemon {
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

class normalPokemon extends Pokemon {
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

class Charmander extends firePokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move, type);
    this.name = "Charmander";
    this.move = "ember";
    this.hitpoints = 44;
    this.attackDamage = 17;
  }


}

class Squirtle extends waterPokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move, type);
    this.name = "Squirtle";
    this.move = "water gun";
    this.hitpoints = 44;
    this.attackDamage = 16; 
  }
}

class Bulbasaur extends grassPokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move, type);
    this.name = "Bulbasaur";
    this.move = "vine whip";
    this.hitpoints = 45;
    this.attackDamage = 16;
  }
}

class Rattata extends normalPokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move, type);
    this.name = "Rattata";
    this.hitpoints = 50;
    this.attackDamage = 15;
  }
}

class Pokeball {
  constructor(pokemon) {
    this.pokemon = {};
  }

  ballThrow(pokemon) {
    if (Object.keys(this.pokemon).length === 0) {
      this.pokemon = pokemon;
      return `You caught ${this.pokemon.name}!`;
    } else if (Object.keys(this.pokemon).length != 0) {
      return this.pokemon ;
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

class Trainer {
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
        return this.belt[i].pokemon.name
      } 
    }
    
      return "you already have 6 pokemon";
    
  }



  getPokemon(pokemon) {
    for (let i = 0; i < Object.keys(this.belt).length; i++) {
      if (this.belt[i].pokemon.name === pokemon.name) {

        return this.belt[i].ballThrow(pokemon)
        ;
      } 
    }
    
      return "You do not have this pokemon in your belt";
    
  }
}

class Battle {
  constructor(trainerOne, trainerTwo) {
    this.trainerOne = trainerOne
    this.trainerTwo = trainerTwo
  }



  game(trainerOne, trainerTwo) {

    //player 2 select pokemon

    //player 1 pokemon takes a turn

    //player 2 pokemon takes a turn

    //repeats until a player pokemon faints
    //player who pokemon is still alive wins
    



  }


//   Battle
// Finally, you will need a way to battle the Pokemon. The battle should take two trainers and the names of the Pokemon they wish to battle.

// Methods
// fight

// This should take the Pokemon whose turn it is,
// Attack the defending Pokemon (deducting attacker's attack damage from the defender's hit points)
// End their turn
// Should take each Pokemon's strengths and weaknesses into account
// If a defender is strong against the attacking type, the attacking type's damage should be multiplied by 0.75.
// If a defender is weak against the attacking type, the attacking type's damage should be multiplied by 1.25.
// Each attack should be followed by an attack message
// The message will vary depending on the defender's weakness/strength.
// If the defending Pokemon faints (depletes all hit points), the attacker wins.
// This is quite a complex method, and you may want to break up some of its behaviour into additional methods so you can make it tidier. You may also want to create additional properties, if you think these will be helpful.

// inputs
  //battle object
    // trainer one object
      // 6 pokeballs already
    //trainer two object
      // 6 pokeballs already
// process
  //player 1 is prompted to pick a pokemon to use
  //player 2 is prompted to pick a pokemon to use

// p1 pokemon attacks, attack shown. message given
// shows damage to p2

// p2 pokemon attacks, attack shown
// shows damage to p1

// repeat until a pokemon faints



// outputs



}

module.exports = {
  Pokemon,
  firePokemon,
  waterPokemon,
  grassPokemon,
  normalPokemon,
  Charmander,
  Bulbasaur,
  Squirtle,
  Rattata,
  Pokeball,
  Trainer,
  Battle
};
