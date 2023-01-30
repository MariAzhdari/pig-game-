'use strict';
//selections elements
let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--1");
let current0El = document.getElementById("current--0");
let current1El= document.getElementById("current--1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");


//conditions
score0El.innerText = 0;
score1El.innerText = 0;
diceEl.classList.add("hidden")
const score =[0,0];
let currentScore = 0;
let activePlayer = 0;
//dice functionality
btnRoll.addEventListener("click",function(){
    //random number for dices
    let dice = Math.trunc(Math.random()*6)+1
    console.log(dice);
    //remove the hidden class from diceEl
    diceEl.classList.remove("hidden")
    // show random dice with src
    diceEl.src = `dice-${dice}.png`

    //when dice is not one
    if(dice !== 1){
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =currentScore;
    }else{
     //next player..
     document.getElementById(`current--${activePlayer}`).textContent = 0;
     currentScore = 0;
    activePlayer = activePlayer === 0 ?1 :0;
    }
});