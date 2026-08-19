import { useState } from "react";
import CommonStateButtons from "./CommonStateComponent";

export default function ButtonContainer2() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((count) => count + 1);
    }

    return (
        <div className="side-by-side">
            <div className="block">
                <h3>Increment Together</h3>
                <CommonStateButtons count={count} onClick={handleClick} />
                <CommonStateButtons count={count} onClick={handleClick} />
            </div>
        </div>
    )
}