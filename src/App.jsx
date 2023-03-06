import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Card from "../components/Card"

import flashCardList from './flashCardList.js';
const flashCards = JSON.parse(flashCardList);

function App() {
  const [cardNumber, setCardNumber] = useState(0);

  let cards = []; // flashCards displayed on screen
  let cardStack=flashCards[0].stackCard;
  cardStack.forEach(cardItem => {
    cards.push(<Card question={cardItem.question} answer={cardItem.answer}/>)
  });

  const maxCards = cards.length;

  const handleNextCard = () => {
    if(cardNumber+1 < maxCards)
    {
     setCardNumber(cardNumber+1);
    }
    else
    {
     console.log("This is the end")
      
    }
  };
  const handlePrevCard = () => {
    if(cardNumber > 0)
    {
      setCardNumber(cardNumber-1);
    }
    else
    {
      console.log("This is the beggining");
    }
  };


  return (
    <div className="App">


      <div id="card_container">
        {/* <Card question={cardStack[cardNumber].question} answer={cardStack[cardNumber].answer}/> */}
        
        {cards[cardNumber]}
      </div>
      
      <div id="card_nav">
        <button onClick={handlePrevCard} className="card_nav_button"> {"<--"} </button>
        <div id='card_count'>{cardNumber+1}/{maxCards}</div>
        <button onClick={handleNextCard} className="card_nav_button">{"-->"} </button>
      </div>

    </div>
  )
}

export default App
