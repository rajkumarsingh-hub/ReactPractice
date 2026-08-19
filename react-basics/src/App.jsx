import { SingleTag, MultiTag, MultiTagFragment } from "./FirstComponent"

function App() { // a component
  return (
    <div>
      <SingleTag />
      <MultiTag />
      <MultiTagFragment />
    </div>
    
  )
}

export default App // export default for making this component importable in other files like main.jsx
