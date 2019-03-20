
var options = ["sandals", "margharita", "ocean", "boardwalk", "coastal", "sandbar", "barnacle", "beachball", "bikini", "catamaran", "lagoon", "lifeguard", "frisbee", "underwater", "paddleboat", "pelican", "umbrella", "popsicle", "sunscreen", "swimming", "sailboat", "sandcastle", "seashell", "seashore", "snorkel", "starfish", "sunbathe", "sunburn", "sunglasses"];

var yourWord = "";
var wordLength = [];
var blankCount = 0;
var allSpaces = [];
var wrongTries = [];
var winTally = 0;
var lossTally = 0;
var maxGuess = 9;


function startGame() {
    maxGuess = 9;
    yourWord = options[Math.floor(Math.random() * options.length)];
    wordLength = yourWord.split("");
    blankCount = wordLength.length;

    console.log(yourWord);
    allSpaces = [];
    wrongTries = [];

    for (var i = 0; i < blankCount; i++) {
        allSpaces.push("_");
    }

    console.log(allSpaces);
    document.getElementById("guesses-left").innerHTML = maxGuess;
    document.getElementById("word-blanks").innerHTML = allSpaces.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongTries.join(" ");
}


function checkLetters(letter) {

    var letterInWord = false;

    for (var i = 0; i < blankCount; i++) {
        if (yourWord[i] === letter) {

            letterInWord = true;
        }
    }

    if (letterInWord) {

        // Loop through word
        for (var j = 0; j < blankCount; j++) {

            if (yourWord[j] === letter) {

                allSpaces[j] = letter;
            }
        }

        console.log(allSpaces);
    }

    else {

        wrongTries.push(letter);
        maxGuess--;
    }
}

function roundComplete() {

    console.log("WinCount: " + winTally + " | LossCount: " + lossTally + " | maxGuess: " + maxGuess);

    document.getElementById("guesses-left").innerHTML = maxGuess;
    document.getElementById("word-blanks").innerHTML = allSpaces.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongTries.join(" ");


    if (wordLength.toString() === allSpaces.toString()) {

        winTally++;
        alert("You win! The winning word was"+ yourWord);

        document.getElementById("win-counter").innerHTML = winTally;
        startGame();
    }


    else if (maxGuess === 0) {

        lossTally++;
        alert("You lose");
        document.getElementById("loss-counter").innerHTML = lossTally;
        startGame();
    }

}

startGame();

document.onkeyup = function (event) {

    var letterGuessed = String.fromCharCode(event.which).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
};
