import Card from "./components/Card";
import {hero, people} from "./helpers";

const App = () => {
  let fuzzy = "wuzzy";
  let peopleArray = people.map((data, index) => {
    return <Card character = {data} key={index}/>
  })
  return (
    <>
      <h1>I am the app page</h1>
      <h2>{fuzzy}</h2>
      {/* <Card doggy="kitty cat" cat="meow"/>
      <Card doggy="woof"/> */}
      <Card character={hero} />
      {peopleArray}
    </>
  );
};

export default App;