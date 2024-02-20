//making card array
const cardArray = [
    {
        name: 'bear',
        img: 'images/bear.jpg'
    },
    {
        name: 'deer',
        img: 'images/deer.jpg'
    },
    {
        name: 'elephant',
        img: 'images/elephant.jpg'
    },
    {
        name: 'giraffe',
        img: 'images/giraffe.jpg'
    },
    {
        name: 'goat',
        img: 'images/goat.jpg'
    },
    {
        name: 'hipo',
        img: 'images/hipo.jpg'
    },
    {
        name: 'jagur',
        img: 'images/jagur.jpg'
    },
    {
        name: 'monkey',
        img: 'images/monkey.jpg'
    },
    {
        name: 'panda',
        img: 'images/panda.jpg'
    },
    {
        name: 'panther',
        img: 'images/panther.jpg'
    },
    {
        name: 'bear',
        img: 'images/bear.jpg'
    },
    {
        name: 'deer',
        img: 'images/deer.jpg'
    },
    {
        name: 'elephant',
        img: 'images/elephant.jpg'
    },
    {
        name: 'giraffe',
        img: 'images/giraffe.jpg'
    },
    {
        name: 'goat',
        img: 'images/goat.jpg'
    },
    {
        name: 'hipo',
        img: 'images/hipo.jpg'
    },
    {
        name: 'jagur',
        img: 'images/jagur.jpg'
    },
    {
        name: 'monkey',
        img: 'images/monkey.jpg'
    },
    {
        name: 'panda',
        img: 'images/panda.jpg'
    },
    {
        name: 'panther',
        img: 'images/panther.jpg'
    },
]

//making funtion for card shuffle
function shuffleArray (array){
    return array.sort(() => 0.5 - Math.random());
}

shuffleArray(cardArray);

const result = document.querySelector("#result");
const board = document.querySelector("#board");

//making function for create board
function createBoard(){
    for(let i=0; i<cardArray.length; i++ ){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/back.jpg')
        card.setAttribute('id', i)
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    }
}

createBoard();

//defining requied arrays
let cardsClicked = [];
let cardsClickedId = [];
let cardsMatched = [];
let Score = 100;
  
//making function for check matching

function checkForMatch(){
    console.log("Checking for a Match");

    const cards = document.querySelectorAll('#board img')

    console.log(cards);

//condition for maching
    if(cardsClicked[0] == cardsClicked[1]){
        console.log("You have Found a Match");
        cards[cardsClickedId[0]].setAttribute('src', 'images/white.png');
        cards[cardsClickedId[1]].setAttribute('src', 'images/white.png');
        
        cards[cardsClickedId[0]].removeEventListener('click', flipCard);
        cards[cardsClickedId[1]].removeEventListener('click', flipCard);
        
        cardsMatched.push(cardsClicked);

    }else{
        console.log("You Didn't find a match");
        Score -= 2;
        cards[cardsClickedId[0]].setAttribute('src', 'images/back.jpg');
        cards[cardsClickedId[1]].setAttribute('src', 'images/back.jpg');
    }

    cardsClicked = [];
    cardsClickedId = [];

    console.log(cardsMatched);

    if(cardsMatched.length === cardArray.length/2){
        console.log('You have won the game');
        document.querySelector("h1").textContent = `Congratulations! Your Score is: ${Score}`;
    }

}

console.log(cardArray);

//function for flipcards
function flipCard(){
    console.log('card flipped');
    
    let cardId = this.getAttribute('id');
    cardsClicked.push(cardArray[cardId].name);
    console.log(cardsClicked);

    cardsClickedId.push(cardId);

    this.setAttribute('src', cardArray[cardId].img);

    if(cardsClicked.length === 2){
        setTimeout(checkForMatch, 500);
    }

}

// Create a button element
const replayButton = document.createElement('button');
replayButton.id = 'replayButton'; // Assign an ID for styling
replayButton.textContent = 'Replay'; // Set button text

// Append the button to the body or any desired element
document.body.appendChild(replayButton);

// Add event listener to the button
replayButton.addEventListener('click', function() {
    location.reload(); // Reload the browser when the button is clicked
});