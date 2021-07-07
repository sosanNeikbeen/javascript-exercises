console.log("the ages array");
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
