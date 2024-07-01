function reverseString(word) {
    let reverse = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverse = word[i];
        console.log(reverse);
    }

    return reverse;
}
const word = "Hello there";

reverseString(word);
