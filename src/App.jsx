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

function App() {
  const [cardNumber, setCardNumber] = useState(0);
  const [cardStack, setCardStack] = useState(flashCards[0].stackCard);
  const [cardAnswer, setCardAnswer] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [userAnswer, setUserAnswer] = useState(-1)

  const maxCards = cardStack.length;

  const handleShowAnswer = () => { setCardAnswer(!cardAnswer); }

  const handleShuffle = () => {
    setCardStack(randomize(flashCards[0].stackCard));
    setCardNumber(0);
    setCardAnswer(false);
    setUserInput(""); 
    setUserAnswer(-1);
  }

  const handleNextCard = () => {
    if (cardNumber + 1 < maxCards) {
      setCardNumber(cardNumber + 1);
      setCardAnswer(false);
      setUserInput(""); 
      setUserAnswer(-1);
    }
    else {
      console.log("This is the end.")
    }
  };

  const handlePrevCard = () => {
    if (cardNumber > 0) {
      setCardNumber(cardNumber - 1);
      setCardAnswer(false);
      setUserInput(""); 
      setUserAnswer(-1);
    }
    else {
      console.log("This is the beginning.");
    }
  };
  
  const handleCheckAnswer = () => {
    let answer = cardStack[cardNumber].answer.toLowerCase().split(" ");
    let userAnswer = userInput.toLowerCase();
    let match = 0;
    
    answer.forEach((element)=>{ 
    if(userAnswer.includes(element))
    {
      match += 1;
    }
    })
    
      console.log(match, answer.length, match/answer.length * 100);
      setUserAnswer(match/answer.length*100);
  };

  return (
    <div className="App">

      <div className='card_set_title'>{flashCards[0].stackTitle}</div>
      <div className='card_set_description'>{flashCards[0].stackDescription}</div>

      <button className="card" onClick={handleShowAnswer}> 
        <div className={'flip_card'+(cardAnswer?" showFlip":"")}>
          <div className={'card_front' +(cardAnswer?" card_hide":"")}>
            <div className='card_side'>Question</div>
            <div className='card_content'>{cardStack[cardNumber].question}</div>
          </div>

          <div className={'card_back' +(!cardAnswer?" card_hide":"")}> 
            <div className='card_side'>Answer</div>
            <div className='card_content'>{cardStack[cardNumber].answer}</div>
          </div>
        </div>
      </button>

      <div id="AnswerInput">
      <div className='answer_title' >{(userAnswer>-1?`Your answer is ${userAnswer}% correct`:"Enter your answer")}</div>
        <input className="answer_box" type="text" placeholder="Enter Answer" value={userInput} onChange={(event)=>{setUserInput(event.target.value); setUserAnswer(-1)}} />
        <button className="check_answer_button" onClick={handleCheckAnswer}>Check</button>
      </div>

      <div id="card_nav">
        <button onClick={handlePrevCard} className={"card_nav_button " + (cardNumber > 0 ? "" : "button_inactive")}> {"<--"} </button>
        <div id='card_count'>{cardNumber + 1}/{maxCards}</div>
        <button onClick={handleNextCard} className={"card_nav_button " + (cardNumber + 1 < maxCards ? "" : "button_inactive")}>{"-->"} </button>
      </div>
      <button className='card_nav_button' onClick={handleShuffle}>Restart and Shuffle</button>
    </div>
  )
}

export default App
