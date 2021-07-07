const str = "sorted";

const sortString = (str) => {
  return str.split("").sort().join(" ");
};

console.log(sortString(str));
