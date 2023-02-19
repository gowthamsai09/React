// refs are used for highlighting.
import React, { Component } from 'react'

//Approach 1
//1. creating ref method.
//2. attach ref in render method using reserved keyword.
//3. Call focus method on the input element



//2. Call abck approach
//i. create ref
//ii. create a method that assign dom element created in 1st step
//iii. Attach ref to input element.
//iV. in component did mount write code for cbref

class Refs extends Component {
    constructor(props) {
      super(props)
      this.inpRef = React.createRef()
      //2.
      this.cbRef = null
      this.setCbRef = (element) =>{
        this.cbRef=element
      }
    }

    componentDidMount (){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inpRef.current.focus()
        // console.log(this.inpRef)
    }
    
    // clickHandler = ()=>{
    //     alert(this.inpRef.current.value)
    // }

    // for 2nd approach
    clickHandler =()=>{
        alert(this.cbRef.value)
    }
  render() {
    return (
      <div>
        {/* <input type='text' ref={this.inpRef}/> */}
        <input type='text' ref={this.setCbRef}/>
        <div>
        <button onClick={this.clickHandler}>Click</button>
        </div>
      </div>
    )
  }
}

export default Refs
