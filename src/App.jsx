import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import flashCardList from './flashCardList.js';
const flashCards = JSON.parse(flashCardList);

function randomize(array) {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * i);
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}

const cardStack = randomize(flashCards[0].stackCard);

function App() {
  const [cardNumber, setCardNumber] = useState(0);
  // const [cardStack, setCardStack] = useState();
  const [currentCard, setCurrentCard] = useState(cardStack[0]);
  // const [nextCardRandom, setNextCardRandom] = useState(true);
  const [cardAnswer, setCardAnswer] = useState(false);

  // let cardStack = flashCards[0].stackCard;

  const maxCards = cardStack.length;

  console.log(cardStack, cardNumber+1)

  const handleShowAnswer = () => { setCardAnswer(!cardAnswer); }

  const handleNextCard = () => {
    if (cardNumber + 1 < maxCards) {
      setCardNumber(cardNumber + 1);
      setCardAnswer(false);

    
    }
    else {
      console.log("This is the end.")
    }
  };

  const handlePrevCard = () => {
    if (cardNumber > 0) {

      setCardNumber(cardNumber - 1);
      setCardAnswer(false);

    }
    else {
      console.log("This is the beginning.");
    }
  };
  
  return (
    <div className="App">

      <div className='card_set_title'>{flashCards[0].stackTitle}</div>
      <div className='card_set_description'>{flashCards[0].stackDescription}</div>
      <button className="card" onClick={handleShowAnswer} >
        <div className={"flip_card "+ (cardAnswer ? "card_back":"card_front")}></div>
        <div className='card_side '>{cardAnswer ? "Answer" : "Question"}</div>
        <div className='card_content'>{cardAnswer ? cardStack[cardNumber].answer : cardStack[cardNumber].question}</div>
      </button>

      <div id="card_nav">
        <button onClick={handlePrevCard} className={"card_nav_button " + (cardNumber > 0 ? "" : "button_inactive")}> {"<--"} </button>
        <div id='card_count'>{cardNumber + 1}/{maxCards}</div>
        <button onClick={handleNextCard} className={"card_nav_button " + (cardNumber + 1 < maxCards ? "" : "button_inactive")}>{"-->"} </button>
      </div>

    </div>
  )
}

export default App
