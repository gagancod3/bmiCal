'use strict';
//NAVBAR
// function myFunction() {
//   var x = document.getElementById('myTopnav');
//   if (x.className === 'topnav') {
//     x.className += ' responsive';
//   } else {
//     x.className = 'topnav';
//   }
// }
//VARIABLES
// const selectUnit = document.querySelector('.pickUnit');
let gender = document.querySelector('.pickGender');
let height = Number(document.querySelector('.height').value);
let weight = Number(document.querySelector('.weight').value);
let age = Number(document.querySelector('.age'));
let bmiResult = document.querySelector('.message');
let submitBtn = document.getElementById('submit-button');
let bmi = 0;
function calBmi() {
  if (weight > 0 && height > 0) {
    bmi = Math.trunc(weight / (height / 100) ** 2);
    if (bmi < 18.5) {
      bmiResult.textContent = `Your Bmi is ${bmi} which means you are too thin!`;
    } else if (bmi > 18.5 && bmi < 25) {
      bmiResult.textContent = `Your Bmi is ${bmi} which means you are healthy!`;
    } else {
      bmiResult.textContent = `Your Bmi is ${bmi} which means you are overweight!`;
    }
  } else {
    alert('Please fill in everything correctly');
  }
}

submitBtn.addEventListener('click', calBmi);

/*
function calculateBmi() {
  var weight = document.bmiForm.weight.value
  var height = document.bmiForm.height.value
  if(weight > 0 && height > 0){	
  var finalBmi = weight/(height/100*height/100)
  document.bmiForm.bmi.value = finalBmi
  if(finalBmi < 18.5){
  document.bmiForm.meaning.value = "That you are too thin."
  }
  if(finalBmi > 18.5 && finalBmi < 25){
  document.bmiForm.meaning.value = "That you are healthy."
  }
  if(finalBmi > 25){
  document.bmiForm.meaning.value = "That you have overweight."
  }
  }
  else{
  alert("Please Fill in everything correctly")
  }
  }
  */

// FUNCTIONS
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// }
// selectUnit.addEventListener('click',function(){
//   if () {

//   }
// });

// submitBtn.addEventListener('click',function () {
//   bmi =0 ;
// });
