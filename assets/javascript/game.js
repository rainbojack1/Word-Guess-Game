var characters = ["Mickey", "Aladdin", "Jasmin", "Jafar", "Genie", "Simba", "Nala", "Timon", "Pumba", "Scar"];
var winCount = 0;
var win = document.getElementById("wins");
var guess = document.getElementById("guessesLeft");
var answerList = [];
var answered = document.getElementById("lettersGuessed");
var hidden = document.getElementById("hidden");
var i = 20;

win.textContent = winCount;

function generateWord() {
    word = characters[Math.floor(Math.random() * characters.length)];
    console.log("word: ", word);

    return word;
}

function play() {
    //Get a random letter
    generateWord();
    if(i > 0){
        var hiddenWord = [];
        var strignToDisplay = "";
        for(var j = 0; j < word.length; j++){
           hiddenWord.push("_"); 
           strignToDisplay+= hiddenWord[j] + "       ";
           hidden.textContent = strignToDisplay;
        }
         
        document.onkeyup = function(event) {
            alphaOnly();
            //if key press matches one of the letters of the generated word, display that word in lieu of a _
        }

        win.textContent = winCount;
        guess.textContent = i;
        answered.textContent = answerList;
      
    }
}

function alphaOnly(event) {
    var key = event.keyCode;
    return (key >= 65 && key <= 90);
  };

function reset(){
    if(i === 0){
        alert("Game Over!");
        winCount = 0;
        loseCount = 0;
        i = 10;
        answerList = [];
    }
}


//generateWord();
play();