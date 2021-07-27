const stringLength = require('./task-one');

test('returns character count', () => {
    expect(stringLength('Leo')).toBe(3);
})

test('returns error if too small', () => {
    expect(() => stringLength('')).toThrow("String size too small");
})

test('returns an error if too big', () => {
    expect(() => stringLength('Biogeographical')).toThrow('String size too big');
})