import createSnake from "./create_snake";
import createGrid from "./create_grid";
import createApple from "./create_apple";

const grid = createGrid();
const snake = createSnake();
const apple = createApple();
let score = 0;

const gameLoop = (() => {
  const [snakeStartingRow, snakeStartingCol] = snake.getCoordinates()[0];
  let [appleRow, appleCol] = apple.getCoordinates();
  let direction = snake.getDirection();

  grid.getGrid()[snakeStartingRow][snakeStartingCol] = 'S';
  grid.getGrid()[appleRow][appleCol] = 'A';

  document.addEventListener('keydown', e => {
    if (direction === 'right' || direction === 'left') {
      if (e.key === 'ArrowUp') snake.changeDirection('up');
      if (e.key === 'ArrowDown') snake.changeDirection('down');
    }

    if (direction === 'up' || direction === 'down') {
      if (e.key === 'ArrowRight') snake.changeDirection('right');
      if (e.key === 'ArrowLeft') snake.changeDirection('left');
    }
  });
  
  const gameInterval = setInterval(() => {
    direction = snake.getDirection();
    let [currentHeadRow, currentHeadCol] = snake.getCoordinates()[snake.getCoordinates().length - 1];

    switch (direction) {
      case 'left':
        currentHeadCol -= 1;
        break;
      case 'right':
        currentHeadCol += 1;
        break;
      case 'up':
        currentHeadRow -= 1;
        break;
      case 'down':
        currentHeadRow += 1;
        break;
    }

    if (grid.getGrid()[currentHeadRow][currentHeadCol] === 'S'
        || currentHeadRow > grid.getGrid().length - 1
        || currentHeadRow < 0
        || currentHeadCol > grid.getGrid().length - 1
        || currentHeadCol < 0) {
      clearInterval(gameInterval);
      return;
    }

    snake.addCoordinate([currentHeadRow, currentHeadCol]);
    grid.getGrid()[currentHeadRow][currentHeadCol] = 'S';

    if (currentHeadRow === apple.getCoordinates()[0] && currentHeadCol === apple.getCoordinates()[1]) {
      snake.incrementLength();
      score += 1;

      apple.newCoordinates(snake.getCoordinates(), grid.getGridSize());
      let [newAppleRow, newAppleCol] = apple.getCoordinates();
      grid.getGrid()[newAppleRow][newAppleCol] = 'A'

    } else {
      let [removedRow, removedCol] = snake.removeOldCoordinate();
      grid.getGrid()[removedRow][removedCol] = '';
    }
  }, 3000);
})();
