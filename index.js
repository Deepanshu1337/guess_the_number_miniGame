// accessing the elements
const subBtn = document.getElementsByClassName("btn")[0];
const newGameBtn = document.getElementsByClassName("btn")[1];
console.log(newGameBtn);
const form = document.querySelector(".border");
const notice = document.getElementById("notice");
const score = document.querySelector(".score");
const highScoreDisplay = document.querySelector(".high-score");
 const numInput = document.getElementById("num");

// creating a variable which keep count of tries
var count = 0;
var highScore = Infinity;

//logic of game
newGameBtn.style.display = "none";
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

notice.textContent = "Guess the number between 1 and 10";
score.innerText = count;

function newGame() {
  randomNum = Math.floor(Math.random() * 10) + 1;
  notice.textContent = "Guess the number between 1 and 10";
  form.style.borderColor = "black";
  count = 0;
  score.innerText = count;
    notice.style.color = "rgb(119, 119, 119)";
    numInput.disabled = false;
    newGameBtn.style.display = "none";
    subBtn.style.display = "inline-block";
  form.reset();
}

subBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const num = document.getElementById("num").value;
  if (isNaN(num)) {
    notice.textContent = "Please enter a number!";
    notice.style.color = "red";
  } else if (num < 1 || num > 10) {
    notice.textContent = "Please enter a number between 1 and 10!";
      notice.style.color = "red";
      setTimeout(() => {
         alert("Invalid input! Please enter a number between 1 and 10.");
      }, 10);
   
    form.style.borderColor = "red";
  } else if (randomNum > num) {
    notice.textContent = "Try a bigger number! 🤌";
    form.style.borderColor = "red";
    notice.style.color = "rgb(119, 119, 119)";
    count++;
    score.innerText = count;
  } else if (randomNum == num) {
    notice.textContent = "Congrats!🎉 You guessed it right!";
    form.style.borderColor = "green";
    notice.style.color = "rgb(119, 119, 119)";
    score.innerText = count;
      newGameBtn.style.display = "inline-block";
      subBtn.style.display = "none";

    // Update the high score if the current score is better
    if (count < highScore) {
      highScore = count;
      highScoreDisplay.innerText = highScore;
      }
      numInput.disabled = true;
  } else {
    notice.textContent = "Try a smaller number! 🤌";
    form.style.borderColor = "red";
    notice.style.color = "rgb(119, 119, 119)";
    count++;
    score.innerText = count;
  }
  form.reset();
});

newGameBtn.addEventListener("click", (e) => {
  e.preventDefault();
  newGame();
});
