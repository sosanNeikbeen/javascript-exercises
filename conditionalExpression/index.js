myAge = 25;
juliaAge = 35;

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
