import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    // if we want to get value after the state is set then we have to use callback inside.
    increment(){
    //    this.setState({
    //     count: this.state.count+1
    //    },()=> console.log('Call back value', this.state.count))
    this.setState(prevState =>({
        count: prevState.count+1
    }), ()=> console.log('Call back function',this.state.count))
    
    }
    
    incrementfive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div>
        <div>
        Count - {this.state.count}
        </div>
        <button onClick = {()=>this.incrementfive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
