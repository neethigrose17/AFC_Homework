// data to be imported into components
// 2 values exported
// a. function which randomly generates a number between 0 and 5
// b. an array which contains the following: ["one", etc.]

export const getNumber = () => {
    return (Math.floor(Math.random() * 6));
}

export const numWords = ["one", "two", "three", "four", "five", "six"]