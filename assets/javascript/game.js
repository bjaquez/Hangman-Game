window.onload = function() {

var wins = 0;
var guessesLeft = 12;
var losses = 0;
var computerChoices = ["stormtrooper", "skywalker", "vador", "rebel", "jedi", "lightsaber", "force", "galaxy", "yoda", "luke", "leia", "solo", "wookie", "chewbacca", "droid", "resistance"];
var allGuesses = [];


var computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var wordBlanks = [];

blankLength = computerWord.length

for(i=0; i<blankLength; i++){
    wordBlanks[i] = "_";
}

document.getElementById("current-word").innerHTML = wordBlanks;

console.log(computerWord)
console.log(wordBlanks);



document.onkeyup = function(event){
    
    var userGuess = event.key.toLowerCase();
    isUsed = false;

    for (var j = 0; j < allGuesses.length; j++ ){
        if (allGuesses[j] === userGuess){
            alert("Already guessed that letter, try another one");
            isUsed = true;
        }
    }
    if (isUsed === false){

    
        if (computerWord.indexOf(userGuess) >=0){
            var place = computerWord.indexOf(userGuess);
            wordBlanks[place] = userGuess;
            console.log(place)
            for (i = 0; i < computerWord.length; i++){
                if (computerWord.indexOf(userGuess, place +1) >=0) {
                    place = computerWord.indexOf(userGuess, place +1);
                    wordBlanks[place] = userGuess;
                   console.log(place);     
                }
            }
            
            document.getElementById("current-word").innerHTML = wordBlanks;
            console.log(wordBlanks);
        }
        else {
            allGuesses.push(userGuess);
            guessesLeft--;
        }
    

    if (checkForWin(wordBlanks) === true){
        console.log("win");
        wins++;
        wordBlanks = [];
        guessesLeft = 12;
        allGuesses = [];
        computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        blankLength = computerWord.length
        for(i=0; i<blankLength; i++){
        wordBlanks[i] = "_";
        document.getElementById("current-word").innerHTML = wordBlanks;
        }
        console.log(computerWord);
        console.log(wordBlanks);
    }
    }
    if (guessesLeft === 0){
        losses++;
        guessesLeft = 12;
        wordBlanks = [];
        allGuesses = [];
        document.getElementById("answer").innerHTML = computerWord;
        computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        blankLength = computerWord.length
        for(i=0; i<blankLength; i++){
        wordBlanks[i] = "_";
        document.getElementById("current-word").innerHTML = wordBlanks;
        
        
        }
        console.log(computerWord);
        console.log(wordBlanks);

        console.log(computerWord[0]);
        console.log(wordBlanks[0]);


    }

        document.getElementById("guesses-left").innerHTML = guessesLeft;
        document.getElementById("letters-guessed").innerHTML = allGuesses;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        console.log(guessesLeft);
        console.log(allGuesses);


}
function checkForWin (win){
    for (i = 0; i<computerWord.length; i++){
        if (win[i] === "_"){
            return false;
        }
    
    }
    return true;
}


}