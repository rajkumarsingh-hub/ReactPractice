import { SingleTag, MultiTag, MultiTagFragment } from "./components/FirstComponent"
import FoodMenu from "./components/RecipeListComponent"
import FirstButton from "./components/EventHandlingComponent"
import StyleComponent from "./components/StyleComponent"
import Counter from "./components/CounterComponent"
import ButtonContainer from "./components/ButtonContainerComponent"
import TicTacToeGame from "./components/TicTacToeGame"
import TicTacToeGame4x4 from "./components/TicTacToeGame4x4.jsx"

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
              <FirstButton />
            <hr className="section" />
            <Counter />
            <hr className="section" />
            <ButtonContainer />
            <hr className="section" />
            <TicTacToeGame />
            <hr className="section" />
            <TicTacToeGame4x4 />
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    
  )
}

export default App // export default for making this component importable in other files like main.jsx
