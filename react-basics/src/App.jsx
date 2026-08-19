import { SingleTag, MultiTag, MultiTagFragment } from "./components/FirstComponent"
import FoodMenu from "./components/RecipeListComponent"
import StyleComponent from "./components/StyleComponent"

function App() { // a component
  return (
    <div>
      <SingleTag />
      <MultiTag />
      <MultiTagFragment />
      <hr className="section" />
      <StyleComponent />
      <hr className="section" />
      <FoodMenu />
    </div>
    
  )
}

export default App // export default for making this component importable in other files like main.jsx
