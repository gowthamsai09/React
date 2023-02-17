import React, { Component , PureComponent} from 'react'
import Purecomponent from './Purecomponent_for_extending_class'
import RegComp_for_extending_class from './RegComp_for_extending_class'

 class Parentcomp_EC extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Sai'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Sai'
                //name: 'Gowtham'
            })
        },2000)
    }
  render() {
    console.log('###### Parent Component render ######')
    return (
      <div>
        Parent  component.
        <RegComp_for_extending_class name={this.setState.name}></RegComp_for_extending_class>
        <Purecomponent name={this.setState.name}></Purecomponent>
      </div>
    )
  }
}

export default Parentcomp_EC
