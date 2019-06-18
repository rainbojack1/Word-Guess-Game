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
    word = (characters[Math.floor(Math.random() * characters.length)]).toLowerCase();
    console.log("word: ", word);

    return word;
}

function play() {
    //counters();
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
            var key = event.key;
            var keyCode = event.keyCode;
            console.log("hiddenWord: ", hiddenWord);
            console.log("Is there a _: ", hiddenWord.indexOf("_"));

            //Only allows user to use a - z
            if(keyCode >= 65 && keyCode <= 90){
                console.log("keyCode: ", keyCode);
                answerList.push(key);
                answered.textContent = answerList;
                i--;
                //guess.textContent = i;
                counters();

                if (word.search(key) !== -1) {
                    hiddenWord[word.search(key)] = key;
                    //Test Area to replace _ with actual letters until I can figure out how to do it without the ,
                    var testId = document.getElementById("test").textContent = hiddenWord;

                }

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

        /*win.textContent = winCount;
        guess.textContent = i;
        answered.textContent = answerList;*/
      
    }
}

function counters() {
    //used to update counters
    win.textContent = winCount;
    guess.textContent = i;
    answered.textContent = answerList;


}

function reset(){
    if(i === 0){
        alert("Game Over!");
        //winCount = 0;
        loseCount = 0;
        i = 10;
        answerList = [];
    }
}


//generateWord();
play();
