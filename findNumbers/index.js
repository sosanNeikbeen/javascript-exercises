const agesArr = [20, 21, 45, 23, 28];

const showLowestNumber = (arr) => {
  const min = Math.min(...arr);
  console.log("the lowest number in the ages array is " + min);
};

const showBiggestNumber = (arr) => {
  const max = Math.max(...arr);
  console.log("the biggest number in the ages array is " + max);
};

const showIndexAndValue = (arr, i) => {
  console.log(
    "the value " + arr[i] + " is at the position " + i + " in the array"
  );
};

showLowestNumber(agesArr);
showBiggestNumber(agesArr);
showIndexAndValue(agesArr, 3);
