function determineLeapYears(leapYear) {
    if (leapYear % 4 === 0 || leapYear % 400 === 0) {
        return "is a leap year";
    } else {
        return "is not a leap year";
    }
}

console.log(determineLeapYears(2000));
