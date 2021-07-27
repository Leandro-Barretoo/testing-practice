function capitalize(string) {
    if (string[0] !== string[0].toUpperCase()) {
        string = string.charAt(0).toUpperCase() + string.slice(1);
        return string;
    } else {
        throw new Error('First character already capitalized')
    }
}

module.exports = capitalize;