// 1. Pass the number of faces and a count to recieve an array of rolls.

function rollDice(sides = 6, count = 1) {
  if (count < 1 || sides < 1) return;

  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * sides) + 1
  );
}

// 2. Pass the number of faces and a count to recieve an object.

function rollDiceObject(sides = 6, count = 1) {
  // Handle errors
  if (count < 1 || sides < 1) return;
  if (!Number.isInteger(count) || !Number.isInteger(sides)) return;

  // Generate values
  const rolls = Array.from(
    { length: count },
    () => Math.floor(Math.random() * sides) + 1
  );

  // Calculate values of attributes
  const min = Math.min(...rolls);
  const max = Math.max(...rolls);
  const sum = rolls.reduce((total, roll) => total + roll, 0);
  const takeLowest = () => {
    if (count < 1) return undefined;
    return max - min;
  };

  // Return object from calculated values
  return {
    type: `D${sides}`,
    rolls: rolls,
    min: min,
    max: max,
    sum: sum,
    takeLowestValue: takeLowest,
  };
}

// 3. Get a 5e ability score from a dice object.

const abilityScore = rollDiceObject(6, 4);
console.log(abilityScore);
