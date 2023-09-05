function characterCheck(inputstring) {
    const charSet = new Set();

    for(const char of inputstring) {
        if (charSet.has(char)) {
            console.log("The input srtring contains duplicates.");
            return false;
        }
        charSet.add(char);
    }
    console.log("The input string contains unique characters.");
    return true;
}
characterCheck("Ranjan");