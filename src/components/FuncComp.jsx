import React from 'react'
import { useState, useEffect } from "react"; // importing hooks
import axios from "axios"

function FuncComp() {

  // const [ nameOfState, nameOfFunctionThatWillUpdateState ] = useState( valueOfState )
  const [ counter, setCounter ] = useState( 0 )
  // const [ anotheThing, setAnotherThing ] = useState( "hello" )
  // const [ user, setUser ] = useState( {
  //   name: "",
  //   password: "",
  // })
  const [ dogPic, setDogPic ] = useState( "" )

  // like componentDidMount
  // id used as componentDidUpdate, we don't need this one
  useEffect( () => {
    console.log("componentDidMount")
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then( (response) => {
      setDogPic(response.data.message)
    })
    return () => {
      console.log("Functional Component unmounted")
    }
  }, [] ) // if empty, componentDidMount

  // like componentDidUpdate
  useEffect( () => {
    console.log("componentDidUpdate")
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then( (response) => {
      setDogPic(response.data.message)
    })
  }, [counter]) // if not empty, componentDidUpdate for that specific state change


  const handleClick = () => {
    // nameOfFunctionThatWillUpdateState( newValue )
    setCounter( counter + 1 )
  }

  return (
    <div>
      <h1>Functional Component</h1>
      <p>counter: {counter}</p>
      <button onClick={handleClick}>Increase</button>
      <h3>Dog Picture this</h3>
      <img src={dogPic} alt="dog-pic" height="100px" />
    </div>
  )
}

export default FuncComp
