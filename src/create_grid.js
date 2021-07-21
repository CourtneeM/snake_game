const createGrid = () => {
  const gridSize = 17;
  const grid = [];

  for (let i = 0; i < gridSize; i++) {
    const row = [];

    for (let j = 0; j < gridSize; j++) {
      row.push('');
    }

    grid.push(row);
  }

  return grid;
}

export default createGrid;

// module.exports = createGrid;
