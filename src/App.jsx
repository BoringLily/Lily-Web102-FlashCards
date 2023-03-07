import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import "../components/Card.css"

import flashCardList from './flashCardList.js';
const flashCards = JSON.parse(flashCardList);

function App() {
  const [cardNumber, setCardNumber] = useState(0);
  const [cardAnswer, setCardAnswer] = useState(false);

  let cardStack = flashCards[0].stackCard;

  const maxCards = cardStack.length;

  const handleShowAnswer = ()=> {setCardAnswer(!cardAnswer);}

  const handleNextCard = () => {
    if(cardNumber+1 < maxCards)
    {
     setCardNumber(cardNumber+1);
     setCardAnswer(false);
    }
    else
    {
     console.log("This is the end.")
      
    }
  };

  const handlePrevCard = () => {
    if(cardNumber > 0)
    {
      setCardNumber(cardNumber-1);
      setCardAnswer(false);
    }
    else
    {
      console.log("This is the beginning.");
    }
  };


  return (
    <div className="App">

      {/* <div id="card_container">
        <Card question={cardStack[cardNumber].question} answer={cardStack[cardNumber].answer}/>
 {cards}
      </div> */}
      <button className="card" onClick={handleShowAnswer} >
        <div className="card_question">{cardStack[cardNumber].question}</div>
        <div className="card_answer ">{cardAnswer?cardStack[cardNumber].answer:""}</div>
      </button>

      <div id="card_nav">
        <button onClick={handlePrevCard} className="card_nav_button"> {"<--"} </button>
        <div id='card_count'>{cardNumber+1}/{maxCards}</div>
        <button onClick={handleNextCard} className="card_nav_button">{"-->"} </button>
      </div>

    </div>
  )
}

export default App
