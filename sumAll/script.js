function sumAll(minArray, maxArray) {
    let finalSum = 0;

    for (let i = minArray; i <= maxArray; i++) {
        finalSum += i;
    }

    return finalSum;
}

let sumUpAll = sumAll(1, 4);
console.log(sumUpAll);
