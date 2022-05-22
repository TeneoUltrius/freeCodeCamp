
alert("Hello. Here you can estimate your body mass. Press OK to continue.")

// Input data
let age = prompt("Please type your age. Press OK to continue.", "");
let height = prompt("Please type your height. Press OK to continue.", "");
let weight = prompt("Please type your weight. Press OK to continue.", "");




// Array of results
let resultTitles = ["Too young", "Underweight", "Normal weight", "Overweight", "Can not calculate"];

// Output messages
const youngAge = "Sorry kid, this test is only for adults :(";
const elderly = "Sorry, better for you to consult with your doctor";
const underweight = "You shout eat better ;-)";
const normalWeight = "WOW! You are in a perfect shape!";
const overweight = "You need more care for your health.";

let result;
let message;
let output = "";

function calculateBMI(age, height, weight) {



  if (age < 18) {
    result = resultTitles[0];
    message = youngAge;
  } else if (age >= 65) {
    result = resultTitles[4];
    message = elderly;
  } else if (height / weight >= 3.2) {
    result = resultTitles[1];
    message = underweight;
  } else if (height / weight >= 2) {
    result = resultTitles[2];
    message = normalWeight;
  } else if (height / weight <= 2) {
    result = resultTitles[3];
    message = overweight;
  } else {

  }
  result + " " + message;
  console.log(result + " " + message);
  return output;
}

calculateBMI(age, height, weight);

alert(result + " " + message);
