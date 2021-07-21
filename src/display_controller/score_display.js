import '../styles/score_container/style.css';

const scoreDisplay = (() => {
  const generate = score => {
    const scoreContainer = document.createElement('p');
    
    scoreContainer.id = 'score-container';
    scoreContainer.textContent = `Total Points: ${score}`;

    return scoreContainer;
  }

  const update = score => {
    document.querySelector('#score-container').textContent = `Total Points: ${score}`;
  }

  return { generate, update }
})();

export default scoreDisplay;
