class Puzzle {
    // get numbers between 1 and 8 shuffled in an Array
    shuffledTileNumbers = (() => {
        const arr = Array.from({ length: 8 }, (_, i) => i + 1)
        return arr.sort(() => .5 - Math.random());
    })();

    // positions of the tiles
    tilePositions = [
        [0, 0], [100, 0], [200, 0],
        [0, 100], [100, 100], [200, 100],
        [0, 200], [100, 200], [200, 200]
    ];

    // result to check if the user won
    finalResult = ["1", "2", "3", "4", "5", "6", "7", "8", "0"]

    
    shouldTileMove = (e) => {
        const leftPX = parseInt(e.target.style.left.split("px")[0]);
        const topPX = parseInt(e.target.style.top.split("px")[0]);
        const emptyTileLeft = parseInt(document.getElementById("0").style.left.split("px")[0]);
        const emptyTileTop = parseInt(document.getElementById("0").style.top.split("px")[0]);
        // check id the selected tile can be move (right, left, down, up)
        if ((leftPX + 100 === emptyTileLeft && topPX === emptyTileTop) ||
            (leftPX - 100 === emptyTileLeft && topPX === emptyTileTop) ||
            (leftPX === emptyTileLeft && topPX + 100 === emptyTileTop) ||
            (leftPX === emptyTileLeft && topPX - 100 === emptyTileTop)
        ) {
            return true;
        }
    }

    tileMove = (e, board) => {
        if (this.shouldTileMove(e)) {
            const emptyTile = document.getElementById("0");
            const currentTile = document.getElementById(e.target.id);

            const currentTilePosition = [currentTile.style.left, currentTile.style.top];
            const emptyTilePosition = [emptyTile.style.left, emptyTile.style.top];

            // updating moved and empty tiles' locations
            currentTile.style.left = `${emptyTilePosition[0]}`;
            currentTile.style.top = `${emptyTilePosition[1]}`;

            emptyTile.style.left = `${currentTilePosition[0]}`;
            emptyTile.style.top = `${currentTilePosition[1]}`;

            // move the tile by manupulating the DOM
            this.exchangeElements(currentTile, emptyTile, e, board);
            // check if the puzzle is finished on every
            this.isFinished(board);
        }
    }

    exchangeElements = (currentTile, emptyTile, e, board) => {
        const clonedCurrentTile = currentTile.cloneNode(true);
        const clonedEmptyTile = emptyTile.cloneNode(true);

        // dom element looses its eventlisteners when get copied
        clonedCurrentTile.addEventListener("click", e => {
            this.tileMove(e, board);
        })

        currentTile.parentNode.replaceChild(clonedEmptyTile, currentTile);
        emptyTile.parentNode.replaceChild(clonedCurrentTile, emptyTile);

    }

    askRestartQuestion = (board) => {
        if (confirm('You won. Do you want ot restart?')) {
            window.location.reload();
        } else {
            console.log('Thing was not saved to the database.');
        }
    }

    isFinished = (board) => {
        const tiles = board[0].children
        const arr = []
        for (var i = 0; i < tiles.length; i++) {
            arr.push(tiles[i].id);
        }
        if (arr === this.finalResult) {
            setTimeout(() => this.askRestartQuestion(board), 200);
        }
    }

    init = () => {
        const board = document.getElementsByClassName("puzzle");
        // crating the tiles
        this.shuffledTileNumbers
            .forEach((tileNumber, i) => {
                const oldTile = board[0].children[i];
                const newTile = document.createElement('li');
                newTile.classList.add("tile");
                newTile.innerHTML = `${tileNumber}`;
                newTile.style.left = `${this.tilePositions[i][0]}px`;
                newTile.style.top = `${this.tilePositions[i][1]}px`;
                newTile.setAttribute("id", tileNumber);
                newTile.addEventListener("click", e => {
                    this.tileMove(e, board);
                })
                board[0].replaceChild(newTile, oldTile);
            })
        // crating the empty tile
        const emptyTile = document.createElement('li');
        emptyTile.style.left = "200px";
        emptyTile.style.top = "200px";
        emptyTile.setAttribute("id", "0");
        board[0].appendChild(emptyTile)
    }
}

window.onload = () => {
    const puzzle = new Puzzle();
    puzzle.init();
}