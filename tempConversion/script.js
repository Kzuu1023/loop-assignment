function convertToCelsius(farenheit) {
    const convertingFtoC = ((farenheit - 32) * 5) / 9;
    const rounded = Math.round(convertingFtoC * 10) / 10;
    const result = rounded;

    return result;
}

console.log(convertToCelsius(100));

function convertToFahrenheit(celcius) {
    convertingCtoF = (celcius * 9) / 5 + 32;

    const result = convertingCtoF;

    return result;
}

console.log(convertToFahrenheit(0));
