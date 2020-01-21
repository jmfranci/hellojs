const {greet, sum} = require('../index');

test('adds 3 + 2 to equal 5', () => {
    expect(sum(3,2)).toEqual(5);
});

test('greet to contain Jose', () => {
    expect(greet('Jose')).toContain('Jose');
});


