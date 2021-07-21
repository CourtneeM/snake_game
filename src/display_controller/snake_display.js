import '../styles/snake_container/style.css';

const snakeDisplay = (() => {
  const addSnakePiece = (gridContainer, snakeCoordinates) => {
    const [snakeHeadRow, snakeHeadCol] = snakeCoordinates[snakeCoordinates.length - 1];
    [...[...gridContainer.children][snakeHeadRow].children][snakeHeadCol].classList.add('snake-piece');
  }

  const removeSnakePiece = (gridContainer, removedCoordinates) => {
    const [removedRow, removedCol] = removedCoordinates;
    [...[...gridContainer.children][removedRow].children][removedCol].classList.remove('snake-piece');
  }

  return { addSnakePiece, removeSnakePiece }
})();

export default snakeDisplay;
