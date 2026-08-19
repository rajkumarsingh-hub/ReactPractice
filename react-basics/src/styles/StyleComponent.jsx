const castle = {
    name: 'Castle',
    imageUrl: "src/assets/images/castle.png",
    imageSize: 90
}

export default function StyleComponent() {
    return (
        <fieldset className="group-box">
            <legend>Style Group</legend>
            <div className="portrait-box">
                <img 
                    className="portrait" 
                    src={castle.imageUrl} 
                    alt={castle.name + " Image"} 
                />
                <p>{"Image of " + castle.name}</p>
            </div>
        </fieldset>
    )
}