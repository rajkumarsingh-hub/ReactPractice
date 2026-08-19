import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    function handleClick() {
        setCounter((count) => count + 1);
    }

    function resetCounter() {
        setCounter(0);
    }

    return (
        <div className="block">
            <h2>Counter: {counter}</h2>
            <div className="side-by-side">
                <button onClick={handleClick} className="ok-button">
                    Increment Counter
                </button>
                <button onClick={resetCounter} className="ok-button">
                    Reset Counter
                </button>
            </div>
        </div>
    )
}