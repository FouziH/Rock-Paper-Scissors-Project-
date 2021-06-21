// Rock, Paper, or Scissors
// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.
//
// The possible outcomes are:
//
// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// If there’s a tie, then the game ends in a draw.
// Our code will break the game into four parts:
//
// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

//1. The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.

//2. Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.
//Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.
//you can use code like this userInput = userInput.toLowerCase();


//3.When getting the user’s choice, you should also check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
//Inside getUserChoice(), write an if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'.
//If it does, then return the userInput.
//If not, use console.log to print an error message to the console.
const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
  return userInput;
}else {
  console.log("There was an error. Please ensure you are inputs are one of the following, rock, paper, or scissors. ");
}
};
//5/Now we need to have the computer make a choice.

//Create a new function named getComputerChoice with no parameters.
//Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2.
//Then, depending on the number, return either 'rock', 'paper', or 'scissors'.

const getComputerChoice =()=>{
  const randomNum = Math.floor(Math.random() * 2);

  if(randomNum === 0){
    return "rock";
  }else if(randomNum ===1){
    return "paper";
  }else {
    return "scissors";
  }
}

//testing to see if the function created is working
console.log(getComputerChoice())
