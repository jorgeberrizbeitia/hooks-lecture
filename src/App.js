import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';
import { useState } from 'react';

function App() {

  const [ show, setShow] = useState(true)

  return (
    <div className="App">

      <button onClick={() => setShow(false)}>hide</button>

      {show && (
        <>
        <ClassComp />
        <FuncComp />
        </>
      )}
    </div>
  );
}

export default App;
