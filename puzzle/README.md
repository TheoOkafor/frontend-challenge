## Puzzle

### Initializing
To start the puzzle:

```
const puzzle = new Puzzle(8);

puzzle.init();
```

### Shuffling
To shuffle the tiles, run `puzzle.shuffle()` on the console.

### 15 Tiles (and more)
The logic implemented in this puzzle works for 15 tiles as well. It also works for 24 tiles, 35 tiles, 48 tiles, 63 tiles, 80 tiles, and 99 tiles.


NB: This puzzle implementation makes us **blank tile** but the visibility is `hidden`. The reason is because it was difficult to build the puzzle without the blank tile.
