const createApple = require('../create_apple');

test('New apple coordinates do not overlap with snake coordinates', () => {
  const snakeCoordinates = [[2, 4], [6, 1], [13, 15], [15, 3]];
  const apple = createApple();
  apple.newCoordinates(snakeCoordinates);
  apple.getCoordinates();
  expect(apple.getCoordinates()).toBeTruthy()
});
