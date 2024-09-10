/*
4 classes that should extend Pokemon -> Fire, Water, Grass, Normal
Properties
type

A string of their type ("fire","water","grass", or "normal").
Methods
isEffectiveAgains

This will take a Pokemon as an argument and return 
a boolean describing whether the current Pokemon is 
effective against the given Pokemon.

isWeakTo

This will take a Pokemon as an argument and return a 
boolean describing whether the current Pokemon is weak 
to the given Pokemon.

Below is a list of the types and their respective strengths 
and weaknesses. You should use this to inform the behaviour 
of the methods described above for each class. Note: You will 
need to implement the type property for each derived class for the above methods to work as expected.

fire pokemon are strong against grass, and weak against water.
grass pokemon are strong against water, and weak against fire.
water pokemon are strong against fire and weak against grass.
normal pokemon are neither strong nor weak against any other types.

*/

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
  }
}

class Squirtle extends waterPokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move, type);
    this.name = "Squirtle";
    this.move = "water gun";
  }
}

class Bulbasaur extends grassPokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move, type);
    this.name = "Bulbasaur";
    this.move = "vine whip";
  }
}

class Rattata extends normalPokemon {
  constructor(name, hitpoints, attackDamage, move, type) {
    super(name, hitpoints, attackDamage, move, type);
    this.name = "Rattata";
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
      return `You have ${this.pokemon.name} in this Pokeball. Go! ${this.pokemon.name}!`;
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
        return this.belt[i].pokemon.name, "the array of pokemon caught";
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
