let arr = [
  3,
  6,
  67,
  6,
  23,
  11,
  100,
  8,
  93,
  0,
  17,
  24,
  7,
  1,
  33,
  45,
  28,
  33,
  23,
  12,
  99,
  100,
];

const findDuplicate = (arr) => {
  let counts = {};
  for (let i = 0; i <= arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]] += 1;
    } else counts[arr[i]] = 1;
  }
  for (let el in counts) {
    if (counts[el] >= 2) {
      console.log(el);
    }
  }
};

findDuplicate(arr);
