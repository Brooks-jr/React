const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `I'm the goddamn ${name}!`;

test('Should add two numbers', () => {
    const result = add(7, 7);
    expect(result).toBe(14);
});

test('should generate greeting with name', () => {
    const result = generateGreeting('Batman');
    expect(result).toBe('I\'m the goddamn Batman!');
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('I\'m the goddamn Anonymous!');
});
