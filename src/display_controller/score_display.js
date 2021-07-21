const scoreDisplay = (() => {
  const generateScoreDisplay = score => {
    const scoreContainer = document.createElement('p');
    
    scoreContainer.id = 'score-container';
    scoreContainer.textContent = `Total Points: ${score}`;

    return scoreContainer;
  }

  const updateScoreDisplay = score => {
    document.querySelector('#score-container').textContent = `Total Points: ${score}`;
  }

  return { generateScoreDisplay, updateScoreDisplay }
})();

export default scoreDisplay;
