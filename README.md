---

# Pokémon-Style Battle CLI Game

This project is a Command-Line Interface (CLI) game inspired by Pokémon battles. Players can simulate battles, catch Pokémon, and manage teams using inquirer.js prompts. The game logic supports different Pokémon types (Fire, Water, Grass, Normal) with their respective strengths and weaknesses, along with battle mechanics for trainers.

## Features

- **Pokémon Types**: Supports Fire, Water, Grass, and Normal Pokémon, each with unique attributes.
- **Battle System**: Includes damage calculation, move effectiveness, and type-based advantages.
- **Trainer Management**: Trainers can catch Pokémon using Pokéballs, store them in their belt, and access them during battles.
- **Pokéball Mechanics**: Players can catch and store Pokémon in Pokéballs, check if they're empty, and release Pokémon for battles.
- **Turn-Based Combat**: Players can engage in battles with turn-based mechanics, selecting moves and strategies.

## Setup

### Requirements

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pokemon-battler-cli.git
   ```
2. Navigate to the project folder:
   ```bash
   cd pokemon-battler-cli
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

### Running the Game

To start the CLI Pokémon battle game, run:
```bash
node pokemon.js
```

You'll be prompted to register trainers, select Pokémon, and engage in battles.

### Running the Tests

This project uses Jest for testing. To run the tests, follow these steps:

1. Ensure all dependencies are installed (see installation steps above).
2. Run the following command:
   ```bash
   npm test
   ```

This will run all test cases defined in the `tests/pokemon.test.js` file. The tests cover Pokémon instantiation, attack calculations, type advantages, Pokéball functionality, and battle outcomes.

### Test Suite Overview

The test suite includes the following checks:

- **Pokemon Creation**: Verifies that Pokémon are instantiated correctly with their properties like `name`, `hitpoints`, `attackDamage`, and `move`.
- **Type Effectiveness**: Tests for Pokémon's strengths and weaknesses against different types (e.g., Fire vs. Grass).
- **Hitpoint Reduction**: Ensures that the `takeDamage` method reduces hitpoints as expected.
- **Pokéball Functionality**: Verifies if Pokémon are caught correctly and can be retrieved from Pokéballs.
- **Trainer Management**: Tests for the ability to catch Pokémon, store them in the Trainer's belt, and retrieve them for battles.
- **Battle System**: Ensures that battles are set up correctly with two trainers and six Pokémon on each side. (did not complete)

## License

This project is licensed under the MIT License.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

--- 
