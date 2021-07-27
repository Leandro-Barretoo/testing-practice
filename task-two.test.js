const reverseString = require('./task-two');

test('returns reversed string', () => {
    expect(reverseString('Leo')).toMatch('oeL');
})