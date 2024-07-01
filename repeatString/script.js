const repeatString = function () {
    let str = "Hey";
    let string = " ";
    for (let i = 0; i < 3; i++) {
        string += str;
    }
    return string;
};

// Do not edit below this line
const repeatStrings = repeatString();
console.log(repeatStrings);
