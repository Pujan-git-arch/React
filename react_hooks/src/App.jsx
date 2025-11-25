import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
// React hook = Special function that allows functional components to use React features without writig class components (useState, useEffect,useContext,useReducer,cuseCallbak, and more)

// useState() = A React hok that allows the creation of a stateful variable AND a setter function to update its value in the Virtual DOM.[name, setName]

function App() {
  

  return (
    <>
    <Counter/>
     <MyComponent/>
    </>
  )
}

export default App
