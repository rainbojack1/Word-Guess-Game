var characters = ["Mickey", "Aladdin", "Jasmin", "Jafar", "Genie", "Simba", "Nala", "Timon", "Pumba", "Scar"];
var winCount = 0;   //number of games won
var win = document.getElementById("wins");  //display number of games won
var guess = document.getElementById("guessesLeft"); //display number of guesses remaining
var answerList = [];    //letters user has guessed
var answered = document.getElementById("lettersGuessed");   //display letters user has guessed
var hidden = document.getElementById("hidden"); //hidden word displayed as a series of _
var i = 15; //number of guesses remaining

win.textContent = winCount;

function generateWord() {
    word = (characters[Math.floor(Math.random() * characters.length)]).toLowerCase();
    console.log("word: ", word);

    return word;
}

function play() {
    generateWord();
    if(i > 0){
        //split word and store in it in a new array
        var splitWord = word.split("");
        console.log("splitWord: ", splitWord);
        var hiddenWord = [];

        for(var j = 0; j < word.length; j++){
           hiddenWord.push("_");
        }

        //display the _ on the DOM
        hidden.innerHTML = " " + hiddenWord.join(" ");



    }
    else{
        alert("You lose. Try again.");
        reset();
    }
}

function counters() {
    //used to update counters
    win.textContent = winCount;
    guess.textContent = i;
    answered.textContent = answerList;
}

function compare() {
    document.onkeyup = function(event) {
        var key = event.key;
        var keyCode = event.keyCode;

        //Only allows user to use a - z
        if(keyCode >= 65 && keyCode <= 90){
            answerList.push(key);
            answered.textContent = answerList;
            i--;
            counters();

            // add a function to check if key is present in split word
            //use https://github.com/Rubyrgill/Word-Guess-Game/blob/master/assets/javascript/game.js as a guide


            //If user gets all of the letters display alert that they win
            //for(var k = 0; k < word.length; k++){
            if(hiddenWord.indexOf("_") === -1){
                alert("You Win!");
                winCount++;
                reset();
            }
            //}

            counters();

        }

    }
}

function reset(){
    if(i === 0){
        alert("Game Over!");
        loseCount = 0;
        i = 15;
        answerList = [];
    }
}


//generateWord();
play();
