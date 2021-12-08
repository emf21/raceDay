// Race game using control flow
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 18;

if (registeredEarly && age > 18) {
  raceNumber += 1000;
}

if (registeredEarly && age > 18) {
  console.log(
    `Candidate will race at 9:30am, with race number: ${raceNumber}.`
  );
} else if (!registeredEarly && age > 18) {
  console.log(
    `Candidate will race at 11:00am, with race number: ${raceNumber}.`
  );
} else if (age < 18 || registeredEarly) {
  console.log(
    `Candidate will race at 12:30am, with race number: ${raceNumber}.`
  );
} else {
  console.log("Please visit the registration desk for verification");
}
