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
        status = 'Draw : Restart Game';
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
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
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

export default function TicTacToeGame() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function resetGame() {
        setHistory([Array(9).fill(null)]);
        setXIsNext(true);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board 
                    xIsNext={xIsNext} 
                    squares={currentSquares} 
                    onPlay={handlePlay}
                    onReset={resetGame} />
            </div>

            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

