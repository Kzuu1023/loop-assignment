function removeFromArray() {
    const numArray = [1, 2, 3, 4];
    let newArray = [];

    for (array of numArray) {
        if (array === 3) {
            numArray.splice(2, 1);
            newArray = numArray;
        }
    }

    return newArray;
}

console.log(removeFromArray());
