import '../styles/gameover_container/style.css';

const generateGameoverDisplay = () => {
  const gameoverContainer = document.createElement('p');

  gameoverContainer.id = 'gameover-container';
  gameoverContainer.textContent = 'Game Over';

  return gameoverContainer;
}

export default generateGameoverDisplay;
