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
        <>
            <h2>Counter: {counter}</h2>
            <button onClick={handleClick} className="ok-button">
                Increment Counter
            </button>

            <button onClick={resetCounter} className="ok-button">
                Reset Counter
            </button>
        </>
    )
}