import {numWords} from "../helper";

const Dice = (props) => {
  const {number} = props;
    return (
      <>
        <h1><i className={`fa-solid fa-dice-${numWords[number]}`}></i></h1>
      </>
    )
}
export default Dice;