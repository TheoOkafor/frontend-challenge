class Puzzle {
  constructor(numberOfTiles = 8) {
    const availableSpaces = numberOfTiles + 1;
    const rootOfAvailableSpaces = Math.sqrt(availableSpaces);
    this.initialArrangement = [];
    for (let i = 1; i <= availableSpaces; i += 1) {
      this.initialArrangement.push(i);
    }
    this.currentArrangement = [...this.initialArrangement];
    const blankTileID = availableSpaces;
    this.blankTilePosition = blankTileID - 1; // initially the last item
    this.validPositions = new Map();

    this.renderTiles = () => {
      const allTiles = this.currentArrangement.reduce(
        (tiles, currentTile, index) => {
          tiles += `<li 
                  id="${currentTile}"
                  class="${currentTile === blankTileID ? 'blank-tile' : 'tile'}"
                  data-position="${index}"
                  >${currentTile}</li>`;
          return tiles;
        },
        ''
      );
      document.querySelector('.puzzle').innerHTML = allTiles;
      const tiles = document.getElementsByClassName('tile');
      Array.from(tiles).forEach((node) => {
        node.addEventListener('click', this.handleTileClick);
      });
    };

    const swapTiles = (tilePosition) => {
      const temp = this.currentArrangement[tilePosition];
      this.currentArrangement[tilePosition] =
        this.currentArrangement[this.blankTilePosition];
      this.currentArrangement[this.blankTilePosition] = temp;
      this.blankTilePosition = tilePosition;
    };

    const moveTile = (currentTilePosition) => {
      /**
       * @description This checks whether the tile is at the left edge.
       *
       * @returns {boolean}
       */
      const isTileAtLeftEdge = () =>
        currentTilePosition % rootOfAvailableSpaces === 0;

      /**
       * @description This checks whether the tile is at the right edge.
       *
       * @returns {boolean}
       */
      const isTileAtRightEdge = () =>
        (currentTilePosition + 1) % rootOfAvailableSpaces === 0;

      const blankOnTheLeft = currentTilePosition - 1 === this.blankTilePosition;
      const blankOnTheRight =
        currentTilePosition + 1 === this.blankTilePosition;
      const blankAtTheTop =
        currentTilePosition - rootOfAvailableSpaces === this.blankTilePosition;
      const blankAtTheBottom =
        currentTilePosition + rootOfAvailableSpaces === this.blankTilePosition;

      if (
        (!isTileAtLeftEdge() && blankOnTheLeft) || // is blank on the left of the current tile which is not at the edge
        (!isTileAtRightEdge() && blankOnTheRight) || // is blank on the right of the current tile which is not at the edge
        blankAtTheTop || // is blank at the top of the current tile
        blankAtTheBottom // is blank at the bottom of the current tile
      ) {
        swapTiles(currentTilePosition);
      }
      return '';
    };

    this.handleTileClick = (event) => {
      const tilePosition = parseInt(
        event.target.getAttribute('data-position'),
        10
      );
      moveTile(tilePosition);
      this.renderTiles();
    };
  }

  init = () => {
    this.renderTiles();
  };
}

const puzzle = new Puzzle(8);
puzzle.init();
