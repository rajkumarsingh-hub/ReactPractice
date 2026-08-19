
export default function CommonStateButtons({count, onClick}) {
    
    return (
        <button onClick={onClick} className="ok-button">
            Clicked {count} times
        </button>
    )
}