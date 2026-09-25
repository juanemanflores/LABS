// Type your code below this line!
function Journey(start, end) {
  this.start = start;
  this.end = end;
}

// Type your code below this line!

const from = process.argv[3];
const to = process.argv[4];
const newJourney = new Journey(from, to);

// Type your code above this line!

console.log(newJourney.start + " to " + newJourney.end);