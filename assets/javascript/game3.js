var characters = ["Mickey", "Aladdin", "Jasmin", "Jafar", "Genie", "Simba", "Nala", "Timon", "Pumba", "Scar"];
var winCount = 0;   //number of games won
var win = document.getElementById("wins");  //display number of games won
var guess = document.getElementById("guessesLeft"); //display number of guesses remaining
var answerList = [];    //letters user has guessed
var answered = document.getElementById("lettersGuessed");   //display letters user has guessed
var hidden = document.getElementById("hidden"); //hidden word displayed as a series of _
var i = 15; //number of guesses remaining
var winFlag = false;

win.textContent = winCount;

function generateWord() {
    word = (characters[Math.floor(Math.random() * characters.length)]).toLowerCase();
    console.log("word: ", word);

    return word;
}

function play() {
    generateWord();
    //if(i > 0){
        
        
        //split word and store in it in a new array
        var splitWord = word.split("");
        console.log("splitWord: ", splitWord);
        var hiddenWord = [];

        for(var j = 0; j < word.length; j++){
           hiddenWord.push("_");
        }

        //display the _ on the DOM
        hidden.innerHTML = " " + hiddenWord.join(" ");

        //return splitWord;
        compare(splitWord, hiddenWord);
    // }
    // else{
    //     alert("You lose. Try again.");
    //     reset();
    // }
}

function counters() {
    //used to update counters
    win.textContent = winCount;
    guess.textContent = i;
    answered.textContent = answerList;
}

function compare(splitWord, hiddenWord) {
    document.onkeyup = function(event) {
        if(i > 0){
            
            var key = event.key;
        var keyCode = event.keyCode;
        console.log("key: ", key);

        //Only allows user to use a - z
        if(keyCode >= 65 && keyCode <= 90){
            answerList.push(key);
            answered.textContent = answerList;
            i--;
            counters();
            
            // add a function to check if key is present in split word
            
            //Making a flag to check for a match
            var inWord = false;
            splitWord.forEach(function(element, index) {
                if(splitWord[index] === key){
                    inWord = true;                    
                }
            });

            if(inWord){
                splitWord.forEach(function(element,index){
                    if(splitWord[index] === key){
                        hiddenWord[index] = key;
                        console.log("hiddenWord: ", hiddenWord);
                        hidden.innerHTML = " " + hiddenWord.join(" ");
                    }
                });
            }

           

            //If user gets all of the letters display alert that they win
            //for(var k = 0; k < word.length; k++){
            if(hiddenWord.indexOf("_") === -1){
                winFlag = true;
                winCount++;
                result();
            }
            //}

            counters();

        }
    }
    else{
        winFlag = false;
        result();
    }
    }
    
}

function result(){
    if(winFlag){
        alert("You Win!");
    }
    
    if(i === 0){
        if(!winFlag){
            alert("Game Over! Press any key to try again.");       
        }
    }
    console.log("Now go to reset!");
    reset();
}

function reset(){
    winFlag = false;
    loseCount = 0;
    i = 15;
    answerList = [];
    answered.textContent = answerList;
    play();

    document.onkeyup = function(event) {
        if(event.keyCode == 13){
            play();
        }
    }
}


//generateWord();
play();
