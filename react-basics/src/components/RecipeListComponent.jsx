const recipes = [
    { id: 1, title: 'Paneer Butter Masala', isGravy: true },
    { id: 2, title: 'Paneer Chilli', isGravy: false },
    { id: 3, title: 'Mushroom Dopyaza', isGravy: true },
    { id: 4, title: 'Malai Paneer', isGravy: true },
    { id: 5, title: 'Gobhi Manchurian', isGravy: false }
];

export default function FoodMenu() {
    const listItems = recipes.map(item => 
        <li key={item.id}
            style={{
                color: item.isGravy ? 'burlywood' : 'rosybrown'
            }}
        >
            {item.title}
        </li>
    );
    console.log("recipes: "+listItems);

    return (
        <ol>{listItems}</ol>
    )
}