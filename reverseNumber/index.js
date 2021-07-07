const num = 123456.0;

const reverseNumber = (num) => {
  return parseFloat(num.toString().split("").reverse().join(""));
};

console.log(reverseNumber(num));
