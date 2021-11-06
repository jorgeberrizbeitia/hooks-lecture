import React, { Component } from 'react'
import axios from "axios"

class ClassComp extends Component {

  state = {
    counter: 0,
    dogPic: null
  }

  handleClick = () => {
    this.setState( { counter: this.state.counter + 1 } )
  }

  componentDidMount() {
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then( (response) => {
      this.setState({ dogPic: response.data.message })
    })
  }

  componentDidUpdate = (previousProps, previousState) => {
    if (previousState.counter !== this.state.counter) {
      axios.get("https://dog.ceo/api/breeds/image/random")
      .then( (response) => {
      this.setState({ dogPic: response.data.message })
    })
    }
  }

  componentWillUnmount = () => {
    console.log("Class component unmounted")
  }

  render() {

    const { counter, dogPic } = this.state

    return (
      <div>
        <h1>Class Components</h1>
        <p>counter: {counter}</p>
        <button onClick={this.handleClick} >Increase</button>
        <h3>Dog Picture this</h3>
        <img src={dogPic} alt="dog-pic" height="100px" />
        <hr />
      </div>
    )
  }
}

export default ClassComp
