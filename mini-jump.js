// This week's question:
// Write a function where given an array of integers (where each element represents the max number
// of steps that can be made forward from that element), return the minimum number of jumps to reach
// the end of the array (starting from the first element).

// Example:
// miniJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])

const miniJump = steps => {
  let skipToPosition;
  const lastPosition = steps.length - 1;

  return steps.reduce((totalJumps, maxJumps, currentPosition) => {
    if (
      currentPosition === lastPosition ||
      (skipToPosition && skipToPosition !== currentPosition)
    ) {
      return totalJumps;
    }
    if (maxJumps === 0) return -1;

    const nextPosition = currentPosition + 1;
    if (currentPosition + maxJumps >= lastPosition) {
      skipToPosition = lastPosition;
    } else {
      skipToPosition =
        nextPosition +
        steps
          .slice(nextPosition, nextPosition + maxJumps)
          .reduce((bestIndex, currentJumps, currentIndex, options) => {
            if (!bestIndex || currentJumps >= options[bestIndex])
              return currentIndex;
            return bestIndex;
          }, null);
    }

    return totalJumps + 1;
  }, 0);
};

module.exports = miniJump;
