// This week's question:
// Given a list of ordered integers with some of the numbers missing
// (and with possible duplicates), find the missing numbers.
// Example:
// > missingInts([1, 3, 3, 3, 5, 6])
// > 2, 4
// > missingInts([1, 2, 3, 4, 4, 7, 7])
// > 5, 6

const missingInts = ints => {
  return new Array(ints[ints.length - 1])
    .fill()
    .map((c, i) => i + 1)
    .filter(c => !ints.includes(c));
};

module.exports = missingInts;
