// 1. Pass the number of faces and a count to recieve an array of rolls.

function rollDice(sides = 6, count = 1) {
  if (count < 1 || sides < 1) return;

  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * sides) + 1
  );
}

// 2. Pass the number of faces and a count to recieve an object.

function rollDiceAsObject(sides, count = 1) {
  if (count < 1 || sides < 1) return;

  const info = {
    type: `D${sides}`,
    rolls: Array.from(
      { length: count },
      () => Math.floor(Math.random() * sides) + 1
    ),
    getSum: function () {
      return this.rolls.reduce((total, roll) => total + roll, 0);
    },
    getMin: function () {
      return Math.min(...this.rolls);
    },
    getMax: function () {
      return Math.max(...this.rolls);
    },
    getAbilityScore: function () {
      if (count <= 1) return;
      const sum = this.rolls.reduce((total, roll) => total + roll, 0);
      const min = Math.min(...this.rolls);

      return sum - min;
    },
  };

  return info;
}

// 3. Get an ability score using the 'take-lowest' method. This function relies on rollDiceAsObject

function getAbilityScore() {
  const roll = rollDiceAsObject(6, 4);

  const final = roll.getSum() - roll.getMin();
  console.log(final);

  return roll.getSum() - roll.getMin();
}

// Or use the built-in method

rollDiceAsObject(6, 4).getAbilityScore();
