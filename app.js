let boxes = document.querySelectorAll(".box"); // to access all buttons
let resetBtn = document.querySelector(".reset-btn") // to access reset button
let msgContainer = document.querySelector(".msg-container");// to access message container
let msg = document.querySelector("#msg");// to access the winner mess paragraph
let newGameBtn = document.querySelector(".new-game");// to access the new game btn


let turnO = true; // if value is true then turn is of player-1 if value is false then turn is of player-2

// set all the winner patterns in the 2D array
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];



// loop for the access each button when it is clicked
boxes.forEach((box) => {
    // loop for print O or X when click event occuer
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();  // function to diside winner call 
    })
})

// function for disabled boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
// function for enable boxes
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// this function is reset the game or start new game
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

// function for show the winner player on screen 
const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// winner diside function define
const checkWinner = () => {
    // loop on winPatterns this loop checked all the patterns(arrays) in 2D array 
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        // check the value in buttons and stored in varibles and relate with patterns in winpattern 2D array


        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);              // if pattern matched then dicide winner
                showWinner(pos1Val);
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);