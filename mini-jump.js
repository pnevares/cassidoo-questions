// This week's question:
// Write a function where given an array of integers (where each element represents the max number
// of steps that can be made forward from that element), return the minimum number of jumps to reach
// the end of the array (starting from the first element).

// Example:
// miniJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])

const miniJump = steps => {
  let skipToPosition;

  return steps.reduce((totalJumps, maxJumps, currentPosition) => {
    if (currentPosition === steps.length - 1) return totalJumps;
    if (skipToPosition && skipToPosition !== currentPosition) return totalJumps;
    if (maxJumps === 0) return -1;

    // skipToPosition =
    //   currentPosition +
    //   steps
    //     .slice(currentPosition + 1, currentPosition + 1 + maxJumps)
    //     .reduce((bestIndex, currentJumps, currentIndex, options) => {
    //       if (options[currentIndex >= options[bestIndex]]) return currentIndex;
    //       return bestIndex;
    //     }, 0);

    return (totalJumps += 1);
  }, 0);
};

module.exports = miniJump;
