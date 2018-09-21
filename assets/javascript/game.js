var phrases = [
    "BOP",
    "CRISPY",
    "I LIKE THAT ENERGY",
];

//choose a random word
var chosenWord = phrases[1];

//display one asterisk per letter
//for a specific word
//slect the element from the DOM
//using the document
var asterisksSpan = document.getElementById("asterisks");
var asteriskWord = [];
var individualLetters = chosenWord.split("");

console.log(individualLetters);

for (var i = 0; i < chosenWord.length; i++) {
    asteriskWord = asteriskWord + "*";
}

asterisksSpan.innerText = asteriskWord;
console.log(asteriskWord);

//take user input and compare to specific word
document.onkeyup = function (event) {
    var key = event.key.toUpperCase();

    for (var i = 0; i<individualLetters.length; i++) {
        if (key === individualLetters[i].toUpperCase()) {
            asteriskWord[i] = individualLetters[i];
        }
    }
}

console.log(asteriskWord);

//display each letter guessed
//keep score
//update screen with the updated word