import Dice from "./components/Dice";
import {getNumber} from "./helper";
import {useState, useEffect} from "react";

const App = () => {
  const [diceOne, setDiceOne] = useState(getNumber());
  const [diceTwo, setDiceTwo] = useState(getNumber());
  let diceOneVal = diceOne + 1;
  let diceTwoVal = diceTwo + 1;
  let sum = diceOneVal + diceTwoVal;
  const handleClick = () => {
    setDiceOne(getNumber());
    setDiceTwo(getNumber());
    diceOneVal = diceOne + 1;
    diceTwoVal = diceTwo + 1;
  }
  return (
    <>
      <h1>I am the App component</h1>
      <div id="dice1"><Dice number={diceOne}/></div>
      <div id="dice2"><Dice number={diceTwo}/></div>
      <h2>Roll equals {sum}</h2>
      <button onClick={handleClick}>Roll the Dice!</button>
    </>
  )
}

export default App;