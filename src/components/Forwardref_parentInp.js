import React, { Component } from 'react'
import Forwardref from './Forwardref'

class Forwardref_parentInp extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef =React.createRef()
    }
    
    clickHandler = () =>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <Forwardref ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default Forwardref_parentInp
