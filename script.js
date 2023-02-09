'use strict';
//selections elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El= document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
// declaring some var
let scores,currentScore,activePlayer,playing;
//initializing function and start condition
const init =function(){
  scores =[0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El .textContent = 0;
  current0El .textContent = 0;
  current1El .textContent = 0;

  diceEl.classList.add("hidden")
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
 init()

let switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ?1 :0;
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
    }


//dice functionality
btnRoll.addEventListener("click",function(){
  if(playing){
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
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
     //next player
    switchPlayer()
}}});

// hold btn
btnHold.addEventListener("click",function(){
  if(playing){
//add current score to active player score
scores[activePlayer] += currentScore ;
// score[1] = score[1] + currentScore;
document.getElementById(`score--${activePlayer}`).textContent =scores[activePlayer];
// if player score >= 100
if(scores[activePlayer] >= 100){
 playing = false;
diceEl.classList.add("hidden")
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
}else{
    //switch to next player
    switchPlayer();
} 
}})

btnNew.addEventListener('click',init)

