const Brackets = require('../stacks-and-queues-brackets');

test('Brackets is a class', () => {
  expect(typeof Brackets.prototype.constructor).toEqual('function');
});

test('Will return true on validateBracket with input {}', () => {

  const bracket = new Brackets;

  bracket.isBracketValid('[()]');

  expect(bracket.isBracketValid('[()]')).toEqual(true);
});

test('Will return true on validateBracket with input {}(){}', () => {

  const bracket = new Brackets;

  bracket.isBracketValid('{}(){}');

  expect(bracket.isBracketValid('{}(){}')).toEqual(true);
});

test('Will return false on validateBracket with input [({}]', () => {
  const bracket = new Brackets;

  bracket.isBracketValid('[({}]');

  expect(bracket.isBracketValid('[({}]')).toEqual(true);
});

test('Will return false on validateBracket with input {(})', () => {
  const bracket = new Brackets;

  bracket.isBracketValid('{(})');

  expect(bracket.isBracketValid('{(})')).toEqual(false);
});
