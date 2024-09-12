---

# Pokémon Battler CLI

Welcome to the **Pokémon Battler CLI** game! This game allows you to become a Pokémon Trainer, catch Pokémon, and battle opponents in a turn-based combat system. The game runs entirely in the terminal using [Inquirer.js](https://www.npmjs.com/package/inquirer) for prompts.

## Features

- Play as a Pokémon Trainer and catch a Pokémon.
- Choose between **Charmander**, **Squirtle**, **Bulbasaur**, or **Rattata** as your starter Pokémon.
- Battle against an AI opponent with one of the available Pokémon.
- Pokémon have types (**Fire**, **Water**, **Grass**, **Normal**) with strengths and weaknesses.
- Use moves, deal damage, and try not to faint!

## Gameplay

The game will ask you to:
1. Enter your name as a Trainer.
2. Catch your first Pokémon.
3. Battle against an opponent's Pokémon.
4. Attack and defend in turn-based combat.
5. Win or lose based on hit points and type advantages.

## Classes Overview

### `Pokemon`
The base class for all Pokémon. Each Pokémon has:
- `name`: The Pokémon's name.
- `hitpoints`: Amount of health points.
- `attackDamage`: The damage dealt by the Pokémon's attack.
- `move`: The move it uses in battle.
  
#### Methods
- `takeDamage(damage)`: Reduces the Pokémon's hitpoints by a given damage amount.
- `useMove()`: Logs the move the Pokémon uses and returns the attack damage.
- `hasFainted()`: Checks if the Pokémon has fainted (i.e., hitpoints <= 0).

### Type-Specific Pokémon Classes

#### `firePokemon`
- Strong against `grassPokemon`.
- Weak to `waterPokemon`.

#### `waterPokemon`
- Strong against `firePokemon`.
- Weak to `grassPokemon`.

#### `grassPokemon`
- Strong against `waterPokemon`.
- Weak to `firePokemon`.

#### `normalPokemon`
- No strengths or weaknesses.

### `Pokeball`
Holds one Pokémon. Functions include:
- `ballThrow(pokemon)`: Catch a Pokémon if the Pokeball is empty.
- `isEmpty()`: Check if the Pokeball is empty.
- `contains()`: Return the Pokémon in the Pokeball or indicate if it's empty.

### `Trainer`
A trainer has a belt with 6 Pokeballs. Methods include:
- `catch(pokemon)`: Catch a Pokémon in one of the available Pokeballs.
- `getPokemon(pokemon)`: Retrieve a specific Pokémon from the Trainer's belt.

## Setup

### Prerequisites
- Node.js installed on your machine.
- Install dependencies using npm.

### Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install required dependencies.

### Usage

Run the following command to start the game:

```bash
node pokemon.js
```

Follow the prompts to play.

### Example

```
Hello Trainer! What is your name?
> Ash

Hello, Trainer Ash! Ready to play?
> Yes

Choose your Pokémon you want to catch
> Charmander

Ash, you've picked Charmander!
...

Time to battle!
```

### Notes

- Pokémon types affect the damage dealt during battle.
- If your Pokémon faints, you lose the battle.
- The game is turn-based and you take turns attacking the opponent's Pokémon. Each turn is automatic

## Contributing

If you'd like to contribute to the game, feel free to fork the repository and submit a pull request!

## License

This project is licensed under the MIT License.

---
