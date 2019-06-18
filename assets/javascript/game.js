var characters = ["Mickey", "Aladdin", "Jasmin", "Jafar", "Genie", "Simba", "Nala", "Timon", "Pumba", "Scar"];
var winCount = 0;
var win = document.getElementById("wins");
var guess = document.getElementById("guessesLeft");
var answerList = [];
var answered = document.getElementById("lettersGuessed");
var hidden = document.getElementById("hidden");
var chances = 20;

win.textContent = winCount;

function generateWord() {
    word = characters[Math.floor(Math.random() * characters.length)];
    console.log("word: ", word);
    return word;
}

function play() {
    //Get a random letter
    generateWord();
    if(chances > 0){
        var hiddenWord = [];
        var strignToDisplay = "";
        for(var j = 0; j < word.length; j++){
           hiddenWord.push("_"); 
           strignToDisplay+= hiddenWord[j] + "       ";
           hidden.textContent = strignToDisplay;
        }
         
        document.onkeyup = function(event) {
            // function alphaOnly(event) {
            //     var key = event.keyCode;
            //     return (key >= 65 && key <= 90);
            //   };

            //   alphaOnly();
            var input = event.keyCode;
            //if key press matches one of the letters of the generated word, display that word in lieu of a _
            for(var i = 0; i < word.length; i++){
                if (word[i] === input) {
                    answered[i].innerHTML = input;
                } 
                var index = (word.indexOf(input));
                if (index === -1) {
                    chances -= 1;
                }
                console.log("input: ", input);

    //             var geuss = (this.innerHTML);
    //   this.setAttribute("class", "active");
    //   this.onclick = null;
    //   for (var i = 0; i < word.length; i++) {
    //     if (word[i] === geuss) {
    //       geusses[i].innerHTML = geuss;
    //       counter += 1;
    //     } 
    //   }
    //   var j = (word.indexOf(geuss));
    //   if (j === -1) {
    //     lives -= 1;
    //     comments();
    //     animate();
    //   } else {
    //     comments();
    //   }
            }
        }

        win.textContent = winCount;
        guess.textContent = chances;
        answered.textContent = answerList;
      
    }
}

// function alphaOnly(event) {
//     var key = event.keyCode;
//     return (key >= 65 && key <= 90);
//   };

function reset(){
    if(chances === 0){
        alert("Game Over!");
        winCount = 0;
        loseCount = 0;
        chances = 10;
        answerList = [];
    }
}


//generateWord();
play();