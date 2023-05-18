const Card = (props) => {
    const {doggy, cat, character} = props;
    return (
        <>
            <h1>My name is {character}</h1>
            {/* <h1>I am the {doggy} component</h1>
            <h1>I am the {cat} component</h1> */}
        </>
    );
};

export default Card;