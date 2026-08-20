import { SingleTag, MultiTag, MultiTagFragment } from "./components/FirstComponent"
import FoodMenu from "./components/RecipeListComponent"
import FirstButton from "./components/EventHandlingComponent"
import StyleComponent from "./components/StyleComponent"
import Counter from "./components/CounterComponent"
import ButtonContainer from "./components/ButtonContainerComponent"
import TicTacToeGame from "./components/TicTacToeGame"

function App() { // a component
  return (
    <table>
      <tbody>
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
            <div>
              <FirstButton />
            </div>
            <hr className="section" />
            <div>
              <Counter />
            </div>
            <hr className="section" />
            <ButtonContainer />
            <hr className="section" />
            <TicTacToeGame />
            <hr className="section" />
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    
  )
}

export default App // export default for making this component importable in other files like main.jsx
