const createApple = () => {
  let coordinates = [8, 10];

  const newCoordinates = (snakeCoordinates, gridSize) => {
    let invalidCoordinates = true;
    let row;
    let col;

    while (invalidCoordinates) {
      row = Math.floor(Math.random() * gridSize);
      col = Math.floor(Math.random() * gridSize);

      invalidCoordinates = snakeCoordinates.filter(coordinate => {
        const [snakeRow, snakeCol] = coordinate;
        
        return row === snakeRow && col === snakeCol;
      }).length > 0;
    }

    coordinates = [row, col];
  }

  const getCoordinates = () => coordinates;
  
  return { newCoordinates, getCoordinates };
}

export default createApple;

// module.exports = createApple;
