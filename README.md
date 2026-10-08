# Interactive Chess Board

A two-player chess board built with plain HTML, CSS, and JavaScript. No frameworks, no libraries, no build step. Open it in a browser and play.

The move logic is written from scratch rather than relying on a chess engine or a library like chess.js, so everything you see on the board is driven by the code in this repository.

## Features

- 8x8 board with light and dark squares
- Black and white pieces rendered with Unicode chess symbols
- Click a piece to highlight every valid move for it
- Capturing pieces by moving onto an opponent's square
- Custom move validation for every piece type

## Tech Stack

| Layer     | Technology                      |
|-----------|---------------------------------|
| Structure | HTML                            |
| Styling   | CSS                             |
| Logic     |JavaScript                       |

## Getting Started

No installation is required.

1. Clone the repository:

   ```bash
   git clone https://github.com/SuryaPranav2007/interactive-chessboard-js.git
   ```

2. Open the project folder:

   ```bash
   cd interactive-chessboard-js
   ```

3. Open `index.html` in any modern browser.

## How to Play

1. White moves first.
2. Click one of your pieces. Its valid destination squares are highlighted.
3. Click a highlighted square to move there.
4. The turn passes to the other player automatically.

Clicking a piece that belongs to the player who is not on move does nothing.

## Project Structure

```
.
├── index.html     # Page markup and board container
├── style.css      # Board, square, and piece styling
├── script.js      # Board state, move generation, and turn handling
└── README.md
```

Adjust the file names above if your layout differs.

## How It Works

- **Board state:** the position is stored as an 8x8 array, where each cell holds a piece or is empty.
- **Rendering:** the board is drawn from that array, and re-rendered after every move.
- **Move generation:** each piece type has its own function that returns the squares it can legally reach, accounting for blocking pieces and captures.
- **Turn control:** a single variable tracks the active color, and selection is only allowed for pieces of that color.

## Current Scope

This project intentionally keeps its scope small. The following are not implemented:

- Check, checkmate, and stalemate detection
- Castling, en passant, and pawn promotion
- Move history, undo, or a game clock
- Playing against a computer opponent

Remove or edit items in this list to match what your version actually does.

## Possible Improvements

- Detect check and prevent moves that leave the king in check
- Add special moves such as castling and en passant
- Add a move log and an undo button
- Add drag and drop for moving pieces

## What I Learned

Building this project was a hands-on way to learn core web fundamentals: DOM manipulation, event handling, managing application state in plain JavaScript, and structuring game logic without external dependencies.

## Author

**Surya Pranav Pratapam**
GitHub: [SuryaPranav2007](https://github.com/SuryaPranav2007)
Linkedin: [Surya Pranav Pratapam](https://www.linkedin.com/in/surya-pranav-pratapam-7502b133b/)
