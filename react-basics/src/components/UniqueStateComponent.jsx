import { useState } from "react";

export default function UniqueStateButtons() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((count) => count + 1);
    }

    return (
        <button onClick={handleClick} className="ok-button">
            Clicked {count} times
        </button>
    )
}