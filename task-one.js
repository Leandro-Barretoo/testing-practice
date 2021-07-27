function stringLength(string) {
    if (string.length > 0 && string.length <= 10) {
        return string.length
    } else if (string.length <= 0){
        throw new Error("String size too small");
    } else {
        throw new Error("String size too big");
    }
}
module.exports = stringLength;