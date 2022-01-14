export const getRandomElements = (sourceArray, neededElements) => {
    const arrayLength = sourceArray ? sourceArray.length : 0;
    const size = arrayLength < neededElements ? arrayLength : neededElements;
    let result = [];
    for (let i = 0; i < size; i++) {
        let index = Math.floor(Math.random() * sourceArray.length);
        result.push(sourceArray[index]);
        sourceArray.splice(index, 1);
    }
    return result;
}