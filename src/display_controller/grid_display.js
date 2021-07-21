import '../styles/grid_container/style.css';

const gridDisplay = (() => {
  const generateGrid = gridSize => {
    const gridContainer = document.createElement('div');
    gridContainer.id = 'grid-container';

    for (let i = 0; i < gridSize; i++) {
      const row = document.createElement('div');
      row.classList.add('row-container');
      for (let j = 0; j < gridSize; j++) {
        const col = document.createElement('div');
        
        col.classList.add('col-container');
        row.appendChild(col);
      }
      gridContainer.appendChild(row);
    }

    return gridContainer;
  }

  return { generateGrid }
})();

export default gridDisplay;
