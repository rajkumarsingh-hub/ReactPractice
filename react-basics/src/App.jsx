import { SingleTag, MultiTag, MultiTagFragment } from "./components/FirstComponent"
import FoodMenu from "./components/RecipeListComponent"
import FirstButton from "./components/EventHandlingComponent"
import StyleComponent from "./components/StyleComponent"

function App() { // a component
  return (
    <table>
      <tr>
        <td>
          <div>
            <SingleTag />
            <hr className="section" />
            <MultiTag />
            <MultiTagFragment />
            <hr className="section" />
            <StyleComponent />
            <hr className="section" />
            <FoodMenu />
          </div>
        </td>
        <td>
          <div className="centered">
            <FirstButton />
            <hr className="section" />
          </div>
        </td>
      </tr>
    </table>
    
  )
}

export default App // export default for making this component importable in other files like main.jsx
