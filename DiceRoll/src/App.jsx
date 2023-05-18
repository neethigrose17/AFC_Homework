import Dice from "./components/Dice";
import {getNumber} from "./helper"; // import random number function
import {useState, useEffect} from "react";

const App = () => {
  const [diceOne, setDiceOne] = useState(getNumber()); // start state of dice
  const [diceTwo, setDiceTwo] = useState(getNumber());
  let diceOneVal = diceOne + 1; // numbers to add for sum
  let diceTwoVal = diceTwo + 1;
  let sum = diceOneVal + diceTwoVal;
  const handleClick = () => {
    setDiceOne(getNumber()); // when you click the button, reset state of dice
    setDiceTwo(getNumber());
    diceOneVal = diceOne + 1; // reset variables for value of dice
    diceTwoVal = diceTwo + 1;
  }

  useEffect( () => {
    // the Dice Roll app works fine without this useEffect so I am not sure why it's needed
  }, [diceOne, diceTwo])

  return (
    <>
      <h1 id="title">Dice Roller App</h1>
      {/* pass random numbers as props to dice component */}
      <div id="dice">
        {/* the div IDs allow for CSS styling */}
        <div id="dice1"><Dice number={diceOne}/></div>
        <div id="dice2"><Dice number={diceTwo}/></div>
      </div>
      <h2 id="sum">Roll equals {sum}</h2>
      {/* change state of dice when the button is clicked */}
      <button onClick={handleClick}>Roll the Dice!</button>
    </>
  )
}

export default App;