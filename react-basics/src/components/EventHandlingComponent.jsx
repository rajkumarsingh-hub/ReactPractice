export default function FirstButton() {
    function handleClick() {
        alert('Button Clicked');
    }

    return (
        <button onClick={handleClick} className="ok-button">
            Show Message
        </button>
    )
}