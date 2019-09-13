// This week's question:
// Write a function where given an array of integers (where each element represents the max number
// of steps that can be made forward from that element), return the minimum number of jumps to reach
// the end of the array (starting from the first element).

// Example:
// miniJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])

const miniJump = steps => {
  let totalJumps = 0;
  let position = 0;

  while (position < steps.length) {
    let maxSteps = steps[position];
    if (maxSteps === 0) return -1;

    if (position + 1 + maxSteps >= steps.length) {
      position = steps.length;
    } else {
      let bestPosition = position + 1;
      for (let index = 2; index <= maxSteps; index++) {
        if (steps[position + index] >= steps[bestPosition]) {
          bestPosition = index;
        }
      }
      position = bestPosition;
    }
    totalJumps += 1;
  }

  return totalJumps;
};

module.exports = miniJump;
