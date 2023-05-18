import {numWords} from "../helper"; // import array of number words

const Dice = (props) => {
  // use number props from parent App component to determine which dice are displayed
  const {number} = props;
    return (
      <>
        {/* number prop is used as index from numWords array */}
        <h1><i className={`fa-solid fa-dice-${numWords[number]}`}></i></h1>
      </>
    )
}
export default Dice;