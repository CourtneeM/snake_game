const createSnake = require('../create_snake');

test('Added coordinates will be added to the snake object', () => {
  const snake = createSnake();
  snake.addCoordinate([2, 1]);
  expect(snake.getCoordinates()).toEqual([[8,4], [2, 1]])
});

test('Incrementing length will increase the snake\'s length', () => {
  const snake = createSnake();
  snake.incrementLength();
  snake.incrementLength();
  expect(snake.getLength()).toBe(3)
});
