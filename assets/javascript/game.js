

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var options = ["sandals", "margharita", "ocean", "boardwalk", "coastal","sandbar", "barnacle","beachball","bikini","catamaran", "lagoon", "lifeguard", "frisbee","underwater", "paddleboat", "pelican", "umbrella", "popsicle", "sunscreen", "swimming", "sailboat", "sandcastle", "seashell", "seashore", "snorkel", "starfish", "sunbathe", "sunburn", "sunglasses"];

function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomWord() {
    var index = getRandomIndex(0, options.length);
    return options[index];
}

function asteriskWord(randomWord, correct) {
    var newString = "";
    for (let i = 0; i < randomWord.length; i++) {
        if (correct.includes(randomWord[i])) {
            newString += randomWord[i];
        } else {
            newString += "*";
        }
    }
    return newString;
}

function reset() {
    var word = getRandomWord()
    return {
        guesses: 0,
        currentWord: word,
        hiddenWord: asteriskWord(word, []),
        correctLetters: [],
        incorrectLetters: []
    };
}

function displayStats(gameState, wins, losses) {
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    document.getElementById("guessesLeft").innerText = guessLimit - gameState.guesses;
    document.getElementById("incorrect").innerText = gameState.incorrectLetters;
    document.getElementById("hidden").innerText = gameState.hiddenWord;
    var url = "https://www.ego4u.com/images/games/hangman0" + (gameState.guesses + 1);
    if (gameState.guesses === guessLimit)
        url += ".gif";
        else
        url += ".png"
    document.getElementById("pic").setAttribute("src" , url);
}

function hasWon(gameState) {
    return !gameState.hiddenWord.includes("*");
}

function hasLost(gameState) {
    return gameState.guesses === guessLimit;
}

window.onload = function () {
    var wins = 0;
    var losses = 0;

    var gameState = reset();

    displayStats(gameState, wins, losses);

    document.onkeyup = function (event) {
        var key = event.key.toUpperCase();
        var isInWord = gameState.currentWord.includes(key);
        if (!alphabet.includes(key))
            return;
        if (isInWord) {
            if (!gameState.correctLetters.includes(key)) {

                gameState.correctLetters.push(key);
                var newHidden = asteriskWord(gameState.currentWord, gameState.correctLetters);
                gameState.hiddenWord = newHidden;
            }
        } else {
            if (!gameState.incorrectLetters.includes(key)) {
                gameState.incorrectLetters.push(key);
                gameState.guesses += 1;
            }
        }
        if (hasWon(gameState)) {
            wins++;
            alert("YOU WON!!");
            gameState = reset();
        } else if (hasLost(gameState)) {
            losses++;
            setTimeout(function() {
                alert("You lost");
                gameState = reset();
            }, 3000);
        }
        displayStats(gameState, wins, losses);
    }
}