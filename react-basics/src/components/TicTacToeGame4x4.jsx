import { useState } from 'react';

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay, onReset }) {
    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = 'Winner : ' + winner;
    } else if (!squares.includes(null)) {
        status = 'No Winner : Restart Game';
    } else {
        status = 'Player\'s Turn : ' + (xIsNext ? 'X' : 'O');
    }

    function handleClick(i) {
        if (winner || squares[i]) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';

        onPlay(nextSquares);
    }

    return (
        <>
            <div className="status">{status}</div>

            {Array.from({ length: 4 }, (_, row) => (
                <div className="board-row" key={row}>
                    {Array.from({ length: 4 }, (_, col) => {
                        const index = row * 4 + col;

                        return (
                            <Square
                                key={index}
                                value={squares[index]}
                                onSquareClick={() => handleClick(index)}
                            />
                        );
                    })}
                </div>
            ))}

            <div className="status">
                {(winner || !squares.includes(null)) && (
                    <button onClick={onReset}>
                        Restart Game
                    </button>
                )}
            </div>
        </>
    );
}

export default function TicTacToeGame4x4() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(16).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function resetGame() {
        setHistory([Array(16).fill(null)]);
        setXIsNext(true);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                    onReset={resetGame}
                />
            </div>

            <div className="game-info">
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        // Rows
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],

        // Columns
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],

        // Diagonals
        [0, 5, 10, 15],
        [3, 6, 9, 12],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d] = lines[i];

        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c] &&
            squares[a] === squares[d]
        ) {
            return squares[a];
        }
    }

    return null;
}