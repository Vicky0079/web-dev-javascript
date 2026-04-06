import React from 'react'
import "./App.css"
import { add, subtract } from './Math.jsx';
import Parent from './propsPassing/Parent.jsx';

const App = () => {
  console.log(add(2, 3)); //output:5
  console.log(subtract(5, 2)); //output:3

  return (
    <>

      <h1>This is App component</h1>
      <Parent/>
    </>
  )
}
export default App
