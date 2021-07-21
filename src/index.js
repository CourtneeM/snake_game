import createSnake from "./create_snake";
import createGrid from "./create_grid";
import createApple from "./create_apple";

const grid = createGrid();
const snake = createSnake();
const apple = createApple();
let score = 0;

// take new coordinates and add to snake coordinates, remove old coorindates
// take new coordinates and add marker on grid
// take removed coordinates and remove marker from grid

const gameLoop = (() => {
  const [snakeStartingRow, snakeStartingCol] = snake.getCoordinates()[0];
  let [appleRow, appleCol] = apple.getCoordinates();
  let direction = snake.getDirection();

  grid[snakeStartingRow][snakeStartingCol] = 'S';
  grid[appleRow][appleCol] = 'A';

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

    if (currentHeadRow > grid.length - 1 || currentHeadRow < 0 || currentHeadCol > grid.length - 1 || currentHeadCol < 0) {
      clearInterval(gameInterval);
      return;
    }

    snake.addCoordinate([currentHeadRow, currentHeadCol]);
    grid[currentHeadRow][currentHeadCol] = 'S';

    if (currentHeadRow === apple.getCoordinates()[0] && currentHeadCol === apple.getCoordinates()[1]) {
      snake.incrementLength();
      score += 1;
      
      apple.newCoordinates(snake.getCoordinates());
      let [newAppleRow, newAppleCol] = apple.getCoordinates();
      grid[newAppleRow][newAppleCol] = 'A'

    } else {
      let [removedRow, removedCol] = snake.removeOldCoordinate();
      grid[removedRow][removedCol] = '';
    }

    console.log(grid);
  }, 1000);
})();
