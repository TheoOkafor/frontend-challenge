class Puzzle {
  constructor(numberOfTiles = 8) {
    const allTilesPlusBlank = numberOfTiles + 1;
    const numberOfTilesPerRow = Math.sqrt(allTilesPlusBlank); // number of tiles per row
    this.initialArrangement = [];
    for (let i = 1; i <= allTilesPlusBlank; i += 1) {
      this.initialArrangement.push(i);
    }
    this.currentArrangement = [...this.initialArrangement];
    const blankTileID = allTilesPlusBlank;
    let blankTilePosition = blankTileID - 1; // initially the last item

    /**
     * @description swaps the tile at the tilePosition with the blank tile.
     *
     * @param {number} tilePosition
     */
    const swapTiles = (tilePosition) => {
      const temp = this.currentArrangement[tilePosition];
      this.currentArrangement[tilePosition] =
        this.currentArrangement[blankTilePosition];
      this.currentArrangement[blankTilePosition] = temp;
      blankTilePosition = tilePosition;
    };

    const moveTile = (currentTilePosition) => {
      /**
       * @description This checks whether the tile is at the left edge.
       *
       * @returns {boolean}
       */
      const isTileAtLeftEdge = () =>
        currentTilePosition % numberOfTilesPerRow === 0;

      /**
       * @description This checks whether the tile is at the right edge.
       *
       * @returns {boolean}
       */
      const isTileAtRightEdge = () =>
        (currentTilePosition + 1) % numberOfTilesPerRow === 0;

      const blankOnTheLeft = currentTilePosition - 1 === blankTilePosition;
      const blankOnTheRight = currentTilePosition + 1 === blankTilePosition;
      const blankAtTheTop =
        currentTilePosition - numberOfTilesPerRow === blankTilePosition;
      const blankAtTheBottom =
        currentTilePosition + numberOfTilesPerRow === blankTilePosition;

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

    const renderTiles = () => {
      const allTiles = this.currentArrangement.reduce(
        (tiles, currentTile, index) => {
          tiles += `<li 
                    id="${currentTile}"
                    class="${
                      currentTile === blankTileID ? 'blank-tile' : 'tile'
                    }"
                    data-position="${index}"
                    >${currentTile}</li>`;
          return tiles;
        },
        ''
      );
      document.querySelector('.puzzle').innerHTML = allTiles;
      const tiles = document.getElementsByClassName('tile');

      // add the event listener
      Array.from(tiles).forEach((node) => {
        node.addEventListener('click', (event) => {
          const tilePosition = parseInt(
            event.target.getAttribute('data-position'),
            10
          );
          moveTile(tilePosition);
          renderTiles();
        });
      });
    };

    /**
     * @description shuffles the tiles
     */
    this.disOrderTiles = () => {
      this.currentArrangement.forEach((item, currentIndex) => {
        // Pick a remaining element...
        const randomIndex = Math.floor(Math.random() * currentIndex);

        // And swap it with the current element.
        [
          this.currentArrangement[currentIndex],
          this.currentArrangement[randomIndex],
        ] = [
          this.currentArrangement[randomIndex],
          this.currentArrangement[currentIndex],
        ];
      });
      renderTiles();
    };

    /**
     * @description initialize the tiles
     */
    this.init = () => {
      renderTiles();
    };
  }
}

const puzzle = new Puzzle(8);
puzzle.init();
