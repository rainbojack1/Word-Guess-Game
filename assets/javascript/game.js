var characters = ["Mickey", "Aladdin", "Jasmin", "Jafar", "Genie", "Simba", "Nala", "Timon", "Pumba", "Scar"];
var winCount = 0;
var win = document.getElementById("wins");

win.textContent = winCount;

function generateWord() {
    word = characters[Math.floor(Math.random() * characters.length)];
    console.log("word: ", word);

    return word;
}

generateWord();