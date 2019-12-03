// Write a function that takes the name of a day (e.g "Monday", "Tuesday") and an
// integer offset, and returns the name of the day which would be the original +
// offset.

// Extra credit: do it in 1 line!

// Example:
// > dayOffset("Wednesday", 4)
// > "Sunday"

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

module.exports = (day, offset) => {
  const dayIndex = days.indexOf(day);

  if (!Number.isInteger(offset) || dayIndex === -1) {
    return null;
  }

  const positiveOffset = offset < 0 ? (offset % 7) + 7 : offset;

  return days[(dayIndex + positiveOffset) % 7];
};
