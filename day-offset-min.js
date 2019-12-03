// Write a function that takes the name of a day (e.g "Monday", "Tuesday") and an
// integer offset, and returns the name of the day which would be the original +
// offset.

// Extra credit: do it in 1 line!

// Example:
// > dayOffset("Wednesday", 4)
// > "Sunday"

module.exports = (day, offset) =>
  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ].filter((c, index, days) => {
    return index === (days.indexOf(day) + (offset % 7) + 7) % 7;
  })[0];
