const calculator = {
    add: function(a, b) {
        if (a == undefined || b == undefined) {
            throw new Error('Missing numbers');
        }
        return a + b;
    },
    subtract: function(a, b) {
        if (a == undefined || b == undefined) {
            throw new Error('Missing numbers');
        }
        return a - b;
    },
    divide: function(a, b) {
        if (a == undefined || b == undefined) {
            throw new Error('Missing numbers');
        }
        return a / b;
    },
    multiply: function(a, b) {
        if (a == undefined || b == undefined) {
            throw new Error('Missing numbers');
        }
        return a * b;
    }
}

module.exports = calculator;