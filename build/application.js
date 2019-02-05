/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/puzzle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/puzzle.js":
/*!***********************!*\
  !*** ./lib/puzzle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {


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


/***/ })

/******/ });
//# sourceMappingURL=application.js.map