export const getRandomElements = (sourceArray, neededElements) => {
    const arrayCopy = [...sourceArray];
    const arrayLength = arrayCopy ? arrayCopy.length : 0;
    const size = arrayLength < neededElements ? arrayLength : neededElements;
    let result = [];
    for (let i = 0; i < size; i++) {
        let index = Math.floor(Math.random() * arrayCopy.length);
        result.push(arrayCopy[index]);
        arrayCopy.splice(index, 1);
    }
    return result;
}