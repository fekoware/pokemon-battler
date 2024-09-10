const {
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
} = require("../pokemon");

describe("pokemon game", () => {

  test("returns an object", () => {
    //Arrange
    const output = new Pokemon();
    //Assert

    //Act
    expect(typeof output).toBe("object");
  });

  test("returns a name value", () => {
    //Arrange
    const name = "Pikachu";
    const output = new Pokemon(name);
    //Assert

    //Act
    expect(output.name).toBe("Pikachu");
  });

  test("returns hitpoitns value", () => {
    //Arrange
    const name = "Pikachu";
    const hitpoints = 50;
    const output = new Pokemon(name, hitpoints);
    //Assert
    //Act
    expect(output.hitpoints).toBe(50);
  });
  test("returns attackDamage value", () => {
    //Arrange
    const name = "Pikachu";
    const hitpoints = 50;
    const attackDamage = 15;
    const output = new Pokemon(name, hitpoints, attackDamage);
    //Assert
    //Act
    expect(output.attackDamage).toBe(15);
  });
  test("returns move value", () => {
    //Arrange
    const name = "Pikachu";
    const hitpoints = 50;
    const attackDamage = 15;
    const move = "thunder shock";
    const output = new Pokemon(name, hitpoints, attackDamage, move);
    //Assert
    //Act
    expect(output.move).toBe("thunder shock");
  });

  test("returns default move value", () => {
    //Arrange
    const name = "Pikachu";
    const hitpoints = 50;
    const attackDamage = 15;
    const move = "";
    const output = new Pokemon(name, hitpoints, attackDamage, move);
    //Assert
    //Act

    expect(output.move).toBe("tackle");
  });
  // should reduce hit points by the number given

  test("should return hit points by number given", () => {
    //arrange
    const name = "Pikachu";
    const hitpoints = 50;
    const attackDamage = 15;
    const move = "";
    const output = new Pokemon(name, hitpoints, attackDamage, move);

    //act
    const damage = 10;
    output.takeDamage(damage);
    expect(output.hitpoints).toBe(40);
  });


  test("returns data type and attack damage value", () => {
    //arrange
    const name = "Pikachu";
    const hitpoints = 50;
    const attackDamage = 15;
    const move = "";
    const output = new Pokemon(name, hitpoints, attackDamage, move);

    //act
    output.useMove();
    //assert
    expect(typeof output.useMove()).toBe("number");
  });

  test("hitpoints equals to zero it should return a boolean", () => {
    const name = "Pikachu";
    const hitpoints = 0;
    const attackDamage = 15;
    const move = "";
    const output = new Pokemon(name, hitpoints, attackDamage, move);

    // act
    output.hasFainted();
    //assert
    expect(typeof output.hasFainted()).toBe("boolean");
  });
  test("when hitpoints equals to zero return true", () => {
    const name = "Pikachu";
    const hitpoints = 0;
    const attackDamage = 15;
    const move = "";
    const output = new Pokemon(name, hitpoints, attackDamage, move);

    // act
    output.hasFainted();
    //assert
    expect(output.hasFainted()).toBe(true);
  });
  test("when hitpoints does not equal to zero return false", () => {
    const name = "Pikachu";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "";
    const output = new Pokemon(name, hitpoints, attackDamage, move);

    // act
    output.hasFainted();
    //assert
    expect(output.hasFainted()).toBe(false);
  });

  test("should return string dsta type", () => {
    //Arrange
    const name = "Flareon";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "";
    const firePokemon = new Pokemon(name, hitpoints, attackDamage, move);
    //Act

    //Assert
    expect(firePokemon instanceof Pokemon).toBe(true);
  });

  test("should return string data typpe of type property", () => {
    //Arrange
    const name = "Flareon";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "";
    const type = "fire";

    const fireTest = new firePokemon(name, hitpoints, attackDamage, move, type);

    //Act
    //Assert
    expect(typeof fireTest.type).toBe("string");
  });

  test("should return string data typpe of type property", () => {
    //Arrange
    const name = "Flareon";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "";
    const type = "fire";

    const fireTest = new firePokemon(name, hitpoints, attackDamage, move, type);

    //Act
    //Assert
    expect(fireTest.type).toBe("fire");
  });

  test("should return string data typpe of type property", () => {
    //Arrange
    const name = "Flareon";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "";
    const type = "water";

    const waterTest = new waterPokemon(
      name,
      hitpoints,
      attackDamage,
      move,
      type
    );

    //Act
    //Assert
    expect(waterTest.type).toBe("water");
  });

  test("should return string data typpe of type property", () => {
    //Arrange
    const name = "Flareon";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "";
    const type = "grass";

    const grassTest = new grassPokemon(
      name,
      hitpoints,
      attackDamage,
      move,
      type
    );

    //Act
    //Assert
    expect(grassTest.type).toBe("grass");
  });

  test("should return string data typpe of type property", () => {
    //Arrange
    const name = "Flareon";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "";
    const type = "normal";

    const normalTest = new normalPokemon(
      name,
      hitpoints,
      attackDamage,
      move,
      type
    );

    //Act
    //Assert
    expect(normalTest.type).toBe("normal");
  });

  test("should return a boolean data type when comparing two pokemons", () => {
    //Arrange
    const name = "Flareon";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "";
    const type = "fire";

    const fireTest = new firePokemon(name, hitpoints, attackDamage, move, type);

    const grassName = "Leafeon";
    const grassHitpoints = 5;
    const grassAttackDamage = 15;
    const grassMove = "";
    const grassType = "grass";

    const grassTest = new grassPokemon(
      grassName,
      grassHitpoints,
      grassAttackDamage,
      grassMove,
      grassType
    );

    //Assert
    const compare = fireTest.isEffectiveAgainst(grassTest);

    //Act
    expect(typeof compare).toBe("boolean");
  });

  test("should return true when comparing a fire pokemons effective vs a grass pokemon", () => {
    //Arrange
    const name = "Flareon";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "";
    const type = "fire";

    const fireTest = new firePokemon(name, hitpoints, attackDamage, move, type);

    const grassName = "Leafeon";
    const grassHitpoints = 5;
    const grassAttackDamage = 15;
    const grassMove = "";
    const grassType = "grass";

    const grassTest = new grassPokemon(
      grassName,
      grassHitpoints,
      grassAttackDamage,
      grassMove,
      grassType
    );

    //Assert
    const compare = fireTest.isEffectiveAgainst(grassTest);

    //Act
    expect(compare).toBe(true);
  });

  test("should return true when comparing a fire pokemon is weak against a water pokemon", () => {
    //Arrange
    const name = "Flareon";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "";
    const type = "fire";

    const fireTest = new firePokemon(name, hitpoints, attackDamage, move, type);

    const waterName = "Leafeon";
    const waterHitpoints = 5;
    const waterAttackDamage = 15;
    const waterMove = "";
    const waterType = "grass";

    const waterTest = new grassPokemon(
      waterName,
      waterHitpoints,
      waterAttackDamage,
      waterMove,
      waterType
    );

    //Assert
    const compare = fireTest.isWeakTo(waterTest);

    //Act
    expect(typeof compare).toBe("boolean");
  });

  test("should return a boolean type of data when comparing a fire pokemon is weak against a water pokemon", () => {
    //Arrange
    const name = "Flareon";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "";
    const type = "fire";

    const fireTest = new firePokemon(name, hitpoints, attackDamage, move, type);

    const waterName = "Leafeon";
    const waterHitpoints = 5;
    const waterAttackDamage = 15;
    const waterMove = "";
    const waterType = "water";

    const waterTest = new waterPokemon(
      waterName,
      waterHitpoints,
      waterAttackDamage,
      waterMove,
      waterType
    );

    //Assert
    const compare = fireTest.isWeakTo(waterTest);

    //Act
    expect(typeof compare).toBe("boolean");
  });

  test("should return true when comparing a fire pokemon is weak against a water pokemon", () => {
    //Arrange
    const name = "Flareon";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "";
    const type = "fire";

    const fireTest = new firePokemon(name, hitpoints, attackDamage, move, type);

    const waterName = "Leafeon";
    const waterHitpoints = 5;
    const waterAttackDamage = 15;
    const waterMove = "";
    const waterType = "water";

    const waterTest = new waterPokemon(
      waterName,
      waterHitpoints,
      waterAttackDamage,
      waterMove,
      waterType
    );

    //Assert
    const compare = fireTest.isWeakTo(waterTest);

    //Act
    expect(compare).toBe(true);
  });

  test("should return correct pokemon type created from extended pokemon object", () => {
    //Arrange
    const name = "Charmander";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "ember";
    const type = "fire";

    //Act
    const output = new Charmander(name, hitpoints, attackDamage, move, type);

    //Assery
    expect(typeof output).toBe("object");
  });

  test("should return correct move property value", () => {
    //Arrange
    const name = "Charmander";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "ember";
    const type = "fire";

    //Act
    const output = new Charmander(name, hitpoints, attackDamage, move, type);

    //Assery
    expect(output.move).toBe("ember");
  });


  test("should return string if pokeball is not empty", () => {
    //Arrange
    const name = "Charmander";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "ember";
    const type = "fire";

    const pokemonTest = new Charmander(
      name,
      hitpoints,
      attackDamage,
      move,
      type
    );

    const pokemonTestTwo = new Charmander(
      name,
      hitpoints,
      attackDamage,
      move,
      type
    );

    const pokeBallTest = new Pokeball();
    //Act

    pokeBallTest.ballThrow(pokemonTest);
    const output = pokeBallTest.ballThrow(pokemonTestTwo);

    //Assert
    expect(output).toBe(
      `You have Charmander in this Pokeball. Go! Charmander!`
    );
  });

  test("should return caught pokemon", () => {
    //Arrange
    const name = "Charmander";
    const hitpoints = 5;
    const attackDamage = 15;
    const move = "ember";
    const type = "fire";

    const pokemonTest = new Charmander(
      name,
      hitpoints,
      attackDamage,
      move,
      type
    );

    //Act

    const pokeBallTest = new Pokeball();
    const output = pokeBallTest.ballThrow(pokemonTest);
    //Assert
    expect(output).toBe(`You caught Charmander!`);
  });

  test("should return boolean data type and return false when pokeball is empty", () => {
    //Arrange
    const output = new Pokeball();

    //Act
    console.log(output, "output");
    console.log(output.pokemon);

    output.isEmpty();

    //Assert
    expect(typeof output.isEmpty()).toBe("boolean");
  });

  test("should return true when pokemon is stored in pokeball", () => {
    //Arrange
    const pokebally = new Pokeball();
    const pokemony = new Squirtle();
    //Act
    const ballThrow = pokebally.ballThrow(pokemony);
    const isEmptyCheck = pokebally.isEmpty();

    //Assert
    expect(isEmptyCheck).toBe(false);
  });

  test("should return string data type object", () => {
    //Arrange
    const pokebally = new Pokeball();

    //Act
    const empty = pokebally.contains();

    //Assert
    expect(typeof empty).toBe("string");
  });

  test("should return pokemon name is pokeball is not empty", () => {
    //Arrange
    const pokemonn = new Bulbasaur();
    const pokebally = new Pokeball();

    //Act
    const catchit = pokebally.ballThrow(pokemonn);
    const empty = pokebally.contains();

    //Assert
    expect(empty).toBe(`Bulbasaur is in this pokeball`);
  });


  test("should return object data type", () => {
    //Arrange
    const trainerTest = new Trainer();

    //Act

    //Assert
    expect(typeof trainerTest).toBe("object");
  });

  test("should return Trainer with 6 empty pokeballs", () => {
    //Arrange
    const trainerTest = new Trainer();

    //Act

    //Assert
    expect(Object.keys(trainerTest.belt).length).toBe(6);
  });

  test("should return name of a caught pokemon stored in ", () => {
    //Arrange
    const trainerTest = new Trainer();

    const caughtPokemon = new Squirtle();

    //Act

    trainerTest.catch(caughtPokemon);

    //Assert
    expect(trainerTest.belt[0].pokemon.name).toBe("Squirtle");
  });

  test("should return unable to store pokemon is belt has 6 pokemons stored in pokeballs", () => {
    //Arrange
    const testTrainer = new Trainer();

    const caughtPokemonOne = new Squirtle();
    const caughtPokemonTwo = new Squirtle();
    const caughtPokemonThree = new Squirtle();
    const caughtPokemonFour = new Squirtle();
    const caughtPokemonFive = new Squirtle();
    const caughtPokemonSix = new Squirtle();
    const caughtPokemonSeven = new Squirtle();

    //Act
    testTrainer.catch(caughtPokemonOne);
    testTrainer.catch(caughtPokemonTwo);
    testTrainer.catch(caughtPokemonThree);
    testTrainer.catch(caughtPokemonFour);
    testTrainer.catch(caughtPokemonFive);
    testTrainer.catch(caughtPokemonSix);
    testTrainer.catch(caughtPokemonSeven);

    //Assert
    expect(testTrainer.catch(caughtPokemonSeven)).toBe(
      "you already have 6 pokemon"
    );
  });


  test("should return string data type", () => {
    //Arrange
    const testTrainer = new Trainer();
    const testPokemon = new Charmander();
    const samePokemon = new Charmander();

    //Act
    testTrainer.catch(testPokemon);

    const testFunction = testTrainer.getPokemon(samePokemon);

    //Assert

    expect(typeof testFunction).toBe("string");
  });

  test("should return name of pokemon stored", () => {
    //Arrange
    const testTrainer = new Trainer();
    const testPokemon = new Charmander();
    const samePokemon = new Bulbasaur();

    //Act
    testTrainer.catch(testPokemon);

    const testFunction = testTrainer.getPokemon(samePokemon);
    //Assert

    expect(testFunction).toBe("You do not have this pokemon in your belt");
  });

  
test("should return object", () => {
  //Arrange
  const playerOne = new Trainer
  const playerTwo = new Trainer
  //Act
  const game = new Battle(playerOne,playerTwo)
  //Assert
  expect(typeof game).toBe('object')
})

test("should return a game object with two trainers who have 6 pokemon each", () => {
  //Arrange
  const trainerOne = new Trainer
  const pokemonOneT1 = new Squirtle
  const pokemonTwoT1 = new Charmander
  const pokemonThreeT1 = new Rattata
  const pokemonFourT1 = new Rattata
  const pokemonFiveT1 = new Rattata
  const pokemonSixT1 = new Rattata

  trainerOne.catch(pokemonOneT1)
  trainerOne.catch(pokemonTwoT1)
  trainerOne.catch(pokemonThreeT1)
  trainerOne.catch(pokemonFourT1)
  trainerOne.catch(pokemonFiveT1)
  trainerOne.catch(pokemonSixT1)

  
  const trainerTwo = new Trainer
  const pokemonOneT2 = new Rattata
  const pokemonTwoT2 = new Charmander
  const pokemonThreeT2 = new Rattata
  const pokemonFourT2 = new Bulbasaur
  const pokemonFiveT2 = new Charmander
  const pokemonSixT2 = new Squirtle

  trainerTwo.catch(pokemonOneT2)
  trainerTwo.catch(pokemonTwoT2)
  trainerTwo.catch(pokemonThreeT2)
  trainerTwo.catch(pokemonFourT2)
  trainerTwo.catch(pokemonFiveT2)
  trainerTwo.catch(pokemonSixT2)

  console.log(trainerOne.getPokemon(Rattata))

  //Act
  const game = new Battle(trainerOne, trainerTwo)
  // console.log(game.trainerOne.belt, "trainer One belt")



  //Assert
  expect(game.trainerOne.belt[0].pokemon.name).toBe("Squirtle")
  expect(game.trainerOne.belt[1].isEmpty()).toBe(false)
  
  
})
});
