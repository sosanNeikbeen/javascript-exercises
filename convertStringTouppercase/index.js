const str = "This is a reminder that you are amazing";
const changeLetterToUppercase = (str) => {
  let splitStr = str
    .split(" ")
    .map((cur) => cur.charAt(0).toUpperCase() + cur.substring(1));

  return splitStr.join(" ");
};

console.log(changeLetterToUppercase(str));
