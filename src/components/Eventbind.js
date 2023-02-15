import React, { Component } from 'react'

class Eventbind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
    // Approach 3
    {/* Binding the  event handler in the constructor*/}
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler(){
  //   this.setState({
  //     message: 'Good Byee!!!!!!'
  //   })
  // }

  // approach 4 class property as arrow function. Always use 3 or 4...
  clickHandler = ()=>{
    this.setState({
          message: 'Good Byee!!!!!!'
        })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Approach 1 Binding in render*/}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Approach 2. Using arrow functions in render.*/}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Eventbind
