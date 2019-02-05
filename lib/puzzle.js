
// shuffles an array
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// fills with random values at every new start
const initializeGameBoard = () => {
  const tiles = document.querySelectorAll("td");
  const options = ['1','2','3','4','5','6','7','8','9', '10', '11', '12', '13', '14', '15', ''];
  const shuffledOptions = shuffle(options);

  shuffledOptions.forEach((option, index) => {
    tiles[index].innerText = option;
    tiles[index].classList.toggle("empty", !option);
  })
}

// moves the title to the emptty title
const moveTile = (tile) => {
  const emptyTile = document.querySelector(".empty");
  tile.classList.add("empty");
  emptyTile.classList.remove("empty");
  emptyTile.innerText = tile.innerText;
  tile.innerText = "";
}

//check whether the title can be moved
const canMove = (tile) => {
  const emptyTile = document.querySelector(".empty");
  const emptyColumn = emptyTile.cellIndex;
  const emptyRow = emptyTile.parentElement.rowIndex;
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;

  return (((tileColumn + 1 === emptyColumn) && (tileRow === emptyRow)) ||
           ((tileColumn === emptyColumn) && (tileRow + 1 === emptyRow)) ||
           ((tileColumn - 1 === emptyColumn) && (tileRow === emptyRow)) ||
           ((tileColumn === emptyColumn) && (tileRow - 1 === emptyRow)))
};

const handleClickTile = (event) => {
  const tile = event.target;
    if (canMove(tile)) {
      moveTile(tile);
    }
}

const handleHint = (event) => {
  document.querySelector(".hint").classList.toggle("active");
}

//********************************* START **************************//
const tiles = document.querySelectorAll("td");
const showHintButton = document.querySelector("#show-hint")

initializeGameBoard(); //with random values

//display hint when user click the button
showHintButton.addEventListener("click", (event) => {
  handleHint(event)
});

tiles.forEach((tile) => {
  tile.addEventListener("click", (event) =>{
    handleClickTile(event);
  });
});







































































// const button = document.querySelector("#show-hint");
//
// button.addEventListener("click", event => {
//   const hint = document.querySelector(".hint");
//   hint.classList.toggle("active");
// });
//
// const tiles = document.querySelectorAll("td");
//
// tiles.forEach(tile => {
//   tile.addEventListener("click", event => {
//     const tile = event.currentTarget;
//     if (canMove(tile)) {
//       moveTile(tile);
//     }
//   });
// });
//
// const moveTile = tile => {
//   const emptyTile = document.querySelector(".empty");
//
//   emptyTile.innerText = tile.innerText;
//   emptyTile.classList.remove("empty");
//
//   tile.innerText = "";
//   tile.classList.add("empty");
// };
//
// const canMove = tile => {
//   const tileColumn = tile.cellIndex;
//   const tileRow = tile.parentElement.rowIndex;
//   const emptyTile = document.querySelector(".empty");
//   const emptyTileColumn = emptyTile.cellIndex;
//   const emptyTileRow = emptyTile.parentElement.rowIndex;
//
//   return (
//     (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
//     (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
//     (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
//     (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1)
//   );
// };
