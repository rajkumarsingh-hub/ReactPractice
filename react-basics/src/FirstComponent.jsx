export function SingleTag() {
    return <h1>React First Component</h1> // JSX as html components without quotes, with JavaScript  
}

export function MultiTag() {
    return ( // Adjacent JSX elements must be wrapped in an enclosing tag.
      <fieldset>
        <legend>Group</legend>
  
        <p>Multiple tags in div</p>
        <button>I'm a button</button>
      </fieldset>
    )
}

export function MultiTagFragment() {
    return ( // <> </> - JSX fragment helps to wrap multiple elements without creating additional DOM component
      <>
      <fieldset>
        <legend>Group</legend>
  
        <p>Multiple tags in div fragment</p>
        <button>I'm a button</button>
      </fieldset>
      </>
    )
}