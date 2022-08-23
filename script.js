const boxes = document.querySelectorAll(".box");
const localTextWinner = document.querySelector("h1");

let winner = false;
function clickBox(box) {
  winner = false;
  if (checkIfWasChecked(box)) {
    checkX(box);
    checkWinnerPart1();
    checkO();
    checkWinnerPart1();
  }
}

const checkX = (box) =>
  checkIfWasChecked(box) ? (box.innerHTML += "<p> X </p>") : null;
const checkIfWasChecked = (box) => (!box.firstChild ? true : false);

function checkO() {
  let number = Math.round(Math.random() * 8);
  let boxO = boxes[number];
  checkIfWasChecked(boxO) ? (boxO.innerHTML += "<p> O </p>") : checkO();
}

whoWillStart();
function whoWillStart() {
  let number = Math.round(Math.random() * 1);
  number === 1 ? checkO() : null;
}

function reloadGame() {
  setInterval(function () {
    location.reload();
  }, 1500);
}

function checkWinnerPart1() {
  let box1;
  let box2;
  let box3;
  let box4;
  let box5;
  let box6;
  let box7;
  let box8;
  let box9;

  boxes[0].firstChild ? (box1 = boxes[0].firstChild.innerHTML) : null;
  boxes[1].firstChild ? (box2 = boxes[1].firstChild.innerHTML) : null;
  boxes[2].firstChild ? (box3 = boxes[2].firstChild.innerHTML) : null;
  boxes[3].firstChild ? (box4 = boxes[3].firstChild.innerHTML) : null;
  boxes[4].firstChild ? (box5 = boxes[4].firstChild.innerHTML) : null;
  boxes[5].firstChild ? (box6 = boxes[5].firstChild.innerHTML) : null;
  boxes[6].firstChild ? (box7 = boxes[6].firstChild.innerHTML) : null;
  boxes[7].firstChild ? (box8 = boxes[7].firstChild.innerHTML) : null;
  boxes[8].firstChild ? (box9 = boxes[8].firstChild.innerHTML) : null;

  checkWinnerPart2(box1, box2, box3, box4, box5, box6, box7, box8, box9);
}
function checkWinnerPart2(
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8,
  box9
) {
  /* HORIZONTAL */
  if (box1 === box2 && box2 === box3 && box1 != undefined) {
    localTextWinner.innerText = `${box1} ganhou`;
    reloadGame();
    winner = true;
  } else if (box4 === box5 && box5 === box6 && box4 != undefined) {
    localTextWinner.innerText = `${box4} ganhou`;
    reloadGame();
    winner = true;
  } else if (box7 === box8 && box8 === box9 && box7 != undefined) {
    localTextWinner.innerText = `${box7} ganhou`;
    reloadGame();
    winner = true;
  } else if (box1 === box4 && box4 === box7 && box1 != undefined) {
    /* VERTICAL */
    localTextWinner.innerText = `${box1} ganhou`;
    reloadGame();
    winner = true;
  } else if (box2 === box5 && box5 === box8 && box2 != undefined) {
    localTextWinner.innerText = `${box2} ganhou`;
    reloadGame();
    winner = true;
  } else if (box3 === box6 && box6 === box9 && box3 != undefined) {
    localTextWinner.innerText = `${box3} ganhou`;
    reloadGame();
    winner = true;
  } else if (box3 === box5 && box5 === box7 && box3 != undefined) {
    /* INCLINADO */
    localTextWinner.innerText = `${box3} ganhou`;
    reloadGame();
    winner = true;
  } else if (box1 === box5 && box5 === box9 && box1 != undefined) {
    localTextWinner.innerText = `${box1} ganhou`;
    reloadGame();
    winner = true;
  } else if (
    /* EMPATE */
    box1 &&
    box2 &&
    box3 &&
    box4 &&
    box5 &&
    box6 &&
    box7 &&
    box8 &&
    box9 &&
    winner === false
  ) {
    localTextWinner.innerText = `Empate`;
    reloadGame();
  }
  console.log(winner);
}
