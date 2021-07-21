import '../styles/apple_container/style.css';

const appleDisplay = (() => {
  const addApple = (gridContainer, appleCoordinates) => {
    const [appleRow, appleCol] = appleCoordinates;
    [...[...gridContainer.children][appleRow].children][appleCol].id = ('apple');
  }
  
  const removeApple = (gridContainer, removedCoordinates) => {
    const [removedRow, removedCol] = removedCoordinates;
    [...[...gridContainer.children][removedRow].children][removedCol].removeAttribute('id');
    console.log(removedRow, removedCol);
  }

  return { addApple, removeApple }
})();

export default appleDisplay;
