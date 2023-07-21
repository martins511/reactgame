import React, { useState } from "react";
import { diceFaces } from "./Dies";
import "./Dies.css"
const RollDies = () => {
  
  const getFace = () => {
    let die1 = Math.floor(Math.random() * diceFaces?.length +1 ?? 6);
    let die2 = Math.floor(Math.random() * diceFaces?.length +1 ?? 6);
    // die1 = die1 === 0 ? 1 : die1;
    // die2 = die2 === 0 ? 1 : die2;
    return [die1, die2];
  };

  const [roll , setRoll] = useState(false)

  const [rolling , setRolling] = useState(false)

  const [diceFace, setDiceFace] = useState(getFace());
  const totalScore = diceFace[0] + diceFace[1];
  const rollDice = () => {
    const newDiceFace = getFace();
    setDiceFace(newDiceFace);
    setRolling(true)
    setRoll(true)
    setTimeout(()=>setRoll(false) , 1000)
  };
 

  return (
    <div>
      <div className={`die ${rolling && "red"}`}>{diceFaces[diceFace[0] - 1]}</div>
      <div className={`die ${rolling && "red"}`}>{diceFaces[diceFace[1] - 1]}</div>
      <div>Total score: {totalScore}</div>
      <button onClick={rollDice} disabled={roll}>Roll Dice</button>
    </div>
  );
};

export default RollDies;
