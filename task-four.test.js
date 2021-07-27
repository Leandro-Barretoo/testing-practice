const capitalize = require('./task-four');

test('returns first character capitalized', () => {
    expect(capitalize('leandro')).toBe('Leandro');
})

test('It is already capitalized', () => {
    expect(() => {capitalize('Microverse')}).toThrow('First character already capitalized');
})