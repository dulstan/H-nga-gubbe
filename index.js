const wrongLetters = document.querySelector('div');
const lose = document.querySelector('h3');
const span = document.querySelector('span');
const start = document.querySelector('.startGamebtn');
const playAgain = document.querySelector('.play-again');
const playAgainWon = document.querySelector('.play-again-won');
const places = document.querySelector('p')
const lostPopup = document.querySelector('article')
const wonPopup = document.querySelector('.article2')
let randomLetter = [];
let randomPlace = [];
let thePlace = [];
let wrong = '';
let sameLetter = [];
let numberTry = 0;
let trueFalse = false;
let wrongAnswer = 0;
let endHangman = false;
let selectedWord = '';

let words =
    ['home', 'school', 'restaurant', 'libraray', 'garden', 'university', 'market', 'shopcen'];
start.addEventListener('click', () => {
    if (thePlace != 0) {
        return
    }
    let random = Math.floor(Math.random() * words.length)
    selectedWord = words[random];
    for (i = 0; i < selectedWord.length; i++) {
        thePlace.push(selectedWord[i]);
        randomLetter.push('-')
        places.innerHTML = randomLetter.join('')
        start.style.opacity = 0
    }
    contains();


})
playAgain.addEventListener('click', () => {
    console.log('obs');
    location.reload()
})
playAgainWon.addEventListener('click', () => {
    console.log('obs');
    location.reload()
})

function contains() {
    document.addEventListener('keyup', (e) => {
        if (endHangman === true) {
            return;
        }
        if (sameLetter.includes(e.code) === true) {
            alert('You have already used that letter')
        }
        else {

            for (let i = 0; i < thePlace.length; i++) {
                if (thePlace[i] === e.key) {
                    randomLetter.splice(i, 1, thePlace[i])
                    trueFalse = true
                    places.innerHTML = randomLetter.join('  ');
                }
            }
            if (trueFalse === false) {
                wrong += e.key
                wrongLetters.innerText += e.key;

                wrongAnswer += 1
                span.innerText = wrongAnswer;

                if (wrongAnswer === 1) {
                    document.querySelector('figure').classList.add('scaffold')
                }
                if (wrongAnswer === 2) { document.querySelector('figure').classList.add('head') }
                if (wrongAnswer === 3) { document.querySelector('figure').classList.add('body') }
                if (wrongAnswer === 4) { document.querySelector('figure').classList.add('arms') }
                if (wrongAnswer === 5) { document.querySelector('figure').classList.add('legs') }



                if (wrongAnswer >= 5) {

                    places.innerHTML = 'Opss!!! Try again.'
                    lose.innerHTML = 'The place was' + " : " + selectedWord
                    endHangman = true
                    setTimeout(() => {
                        lostPopup.style.opacity = 1;
                        lostPopup.style.display = 'flex';
                    }, 2500);
                }
            }

            if (numberTry += 1)
            
            if (randomLetter.includes('-') === false) {
                places.innerHTML = 'YES!!! Good job.'
                endHangman = true
                setTimeout(() => {
                    wonPopup.style.opacity = 1
                    wonPopup.style.display = 'flex';
                }, 2500);
            }
            sameLetter.push(e.code)
            trueFalse = false

        }
    })
}


