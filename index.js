const myName = "sosan";
console.log(myName);

let myAge = 25;
console.log(myAge);

let juliaAge = 30;
let ageDiff = juliaAge - myAge;

console.log(ageDiff);

const calMyAge = (myAge) => {
  if (myAge > 21) {
    console.log("you are older than 21");
  } else {
    console.log("You are not older than 21");
  }
};

const compareJuliaAge = (myAge, juliaAge) => {
  if (myAge < juliaAge) {
    console.log("Julia is older than you");
  } else if (myAge > juliaAge) {
    console.log("Julia is younger than you");
  } else {
    console.log("You have the same age as Julia");
  }
};
calMyAge(myAge);
compareJuliaAge(myAge, juliaAge);

const members = [
  "Sosan",
  "Lucas",
  "Ottavia",
  "Jost",
  "Raul",
  "Fabian",
  "Nadine",
  "Mazen",
  "Obaida",
];
members.sort();

console.log("the first element in array is " + members[0]);
console.log("the last element in the array is " + members[members.length - 1]);
console.log("******");
console.log("all members array");
console.log("******");

for (i = 0; i < members.length; i++) {
  console.log(members[i]);
}
console.log("******");
console.log("the ages array");
console.log("******");
const agesArr = [20, 21, 45, 23, 28];

let x = 4;
while (x >= 0) {
  console.log(agesArr[x]);
  x--;
}

console.log("even numbers from the array");

for (i = 0; i < agesArr.length; i++) {
  if (agesArr[i] % 2 === 0) {
    console.log(agesArr[i]);
  }
}
