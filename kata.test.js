const kata = require('./kata');

test('turns 1 to I', () => {
    expect(kata.translate(1)).toBe('I')
});

test('turns 2 to II', () => {
    expect(kata.translate(2)).toBe('II')
});

test('turns 5 to V', () => {
    expect(kata.translate(5)).toBe('V')
});

test('turns 6 to IV', () => {
    expect(kata.translate(6)).toBe('VI')
});

test('turns 10 to X', () => {
    expect(kata.translate(10)).toBe('X')
});

test('turns 11 to XI', () => {
    expect(kata.translate(11)).toBe('XI')
});

test('turns 4 to IV', () => {
    expect(kata.translate(4)).toBe('IV')
});

test('turns 9 to IX', () => {
    expect(kata.translate(9)).toBe('IX')
});

test('turns 20 to XX', () => {
    expect(kata.translate(20)).toBe('XX')
});

test('turns 40 to XL', () => {
    expect(kata.translate(40)).toBe('XL')
});

test('turns 50 to L', () => {
    expect(kata.translate(50)).toBe('L')
});

test('turns 90 to XC', () => {
    expect(kata.translate(90)).toBe('XC')
});

test('turns 100 to C', () => {
    expect(kata.translate(100)).toBe('C')
});

test('turns 400 to CD', () => {
    expect(kata.translate(400)).toBe('CD')
});

test('turns 500 to D', () => {
    expect(kata.translate(500)).toBe('D')
});



