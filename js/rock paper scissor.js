const rps = ["rock", "paper","scissor"];

function computerPlay(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const output = arr[randomIndex];

  return output;
}

function playerSelection() {

  let input = prompt("Which hand will you use?");
  
  if (input.toLowerCase() == "rock" || input.toLowerCase() == "paper" || input.toLowerCase() == "scissor" ){
  return input.toLowerCase();
  }
  
}

  let win = 0;
  let lose = 0;
  let tie = 0;

function round(playerSelection, computerPlay) {
  
  if(playerSelection === computerPlay) {
    console.log("Computer chose " + computerPlay + " it's a tie")
      tie++;
  }

  if (playerSelection === "rock" && computerPlay === "scissor") {
    console.log("Computer chose " + computerPlay + " you win")
    win++
  }
  
  if (playerSelection === "rock" && computerPlay === "paper") {
    console.log("Computer chose " + computerPlay + " you lose")
    lose++
  }

   if (playerSelection === "paper" && computerPlay === "rock") {
    console.log("Computer chose " + computerPlay + " you win")
     win++
  }
  
  if (playerSelection === "paper" && computerPlay === "scissor") {
    console.log("Computer chose " + computerPlay + " you lose")
    lose++
  }

  if (playerSelection === "scissor" && computerPlay === "paper") {
    console.log("Computer chose " + computerPlay + " you win")
    win++
  }
  
  if (playerSelection === "scissor" && computerPlay === "rock") {
    console.log("Computer chose " + computerPlay + " you lose")
    lose++
  }
  console.log("Wins: " + win, "Loss: " + lose, "Ties: "+ tie)
}

function game() {
  for(let i = 0; i < 5; i++){
    round(playerSelection(), computerPlay(rps));
  }
  if (win < lose){
    console.log("YOU LOST");
  }
  if(win === lose) {
    console.log("DRAW");
  }
  if(win > lose){
    console.log("YOU WON");
  }
 }


game()
