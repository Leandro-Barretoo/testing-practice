const calculator = require("./task-three");

describe('adds', () => {
    test('2 numbers', () => {
        expect(calculator.add(1, 2)).toBe(3); 
    })

    test('2 floating points', () => {
        expect(calculator.add(0.3, 0.4)).toBeCloseTo(0.7);
    })

    test('a number by 0', () => {
        expect(calculator.add(5, 0)).toBeDefined();
    })

    test('throw an error if no numbers given', () => {
        expect(() => {calculator.add()}).toThrow('Missing numbers');
    })
})

describe('subtracts', () => {
    test('2 numbers', () => {
        expect(calculator.subtract(4, 2)).toBe(2); 
    })

    test('2 floating points', () => {
        expect(calculator.subtract(0.4, 0.3)).toBeCloseTo(0.1);
    })

    test('and results in negative number', () => {
        expect(calculator.subtract(2, 4)).toBe(-2);
    })

    test('a number by 0', () => {
        expect(calculator.subtract(5, 0)).toBeDefined();
    })

    test('throw an error if no numbers given', () => {
        expect(() => {calculator.subtract()}).toThrow('Missing numbers');
    })
})

describe('devides', () => {
    test('2 numbers', () => {
        expect(calculator.divide(24, 6)).toBe(4); 
    })

    test('2 floating points', () => {
        expect(calculator.divide(0.5, 0.8)).toBeCloseTo(0.625);
    })

    test('a number by 0', () => {
        expect(calculator.divide(5, 0)).toBeDefined();
    })

    test('throw an error if no numbers given', () => {
        expect(() => {calculator.divide()}).toThrow('Missing numbers');
    })
})

describe('multiplies', () => {
    test('2 numbers', () => {
        expect(calculator.multiply(23, 3)).toBe(69); 
    })

    test('2 floating points', () => {
        expect(calculator.multiply(0.5, 0.8)).toBeCloseTo(0.4);
    })

    test('a number by 0', () => {
        expect(calculator.multiply(5, 0)).toBeDefined();
    })

    test('throw an error if no numbers given', () => {
        expect(() => {calculator.multiply()}).toThrow('Missing numbers');
    })
})