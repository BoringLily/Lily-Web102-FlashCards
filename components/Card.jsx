import React from "react";
import {useState, useEffect} from 'react'

import './Card.css'

export default function Card(props)
{
  const [cardAnswer, setCardAnswer] = useState(0);
  
  const handleShowAnswer = ()=> {setCardAnswer(!cardAnswer);}
  return (
  <button className="card" onClick={handleShowAnswer} >
      <div className="card_question">{props.question}</div>
      <div className="card_answer">{cardAnswer?props.answer:""}</div>
  </button>
  );
}