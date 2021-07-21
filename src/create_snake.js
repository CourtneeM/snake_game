const createSnake = () => {
  const coordinates = [[8,4]];
  let length = 1;
  let direction = 'right';

  const addCoordinate = coordinate => coordinates.push(coordinate);
  const removeOldCoordinate = () => coordinates.shift();
  const getCoordinates = () => coordinates;
  const incrementLength = () => length += 1;
  const getLength = () => length;
  const changeDirection = newDirection => direction = newDirection;
  const getDirection = () => direction;

  return {
    addCoordinate,
    removeOldCoordinate,
    getCoordinates,
    incrementLength,
    getLength,
    changeDirection,
    getDirection
  }
}

export default createSnake;

// module.exports = createSnake;
