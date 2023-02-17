import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
        // passwords: ''
        topic: 'React'
      }
    }
    
    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

     // handlePasswordChange = (event) =>{
    //     this.setState({
    //         passwords: event.target.value
    //     })
    // }

    handleTopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.topic}`)
        event.preventDefault()
    }
    // submit = event => {
    //     this.alert(`${this.state.username} ${this.state.topic}`)
    //     event.preventDefault()
    // }

  render() {
    const{username, topic} = this.state
    return (
        <form onSubmit={this.handleSubmit}>
             <div>
                <label>Username</label>
                <input type='text' value = {username} onChange = {this.handleUsernameChange}/>
                {/* <label>passwords</label>
                <input type='text' value={this.state.passwords} onChange = {this.handlePasswordChange}/> */}
                <div>
                    <label>Topic</label>
                    <select value={topic
                    } onChange={this.handleTopicChange}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='node.js'>Node</option>
                    </select>
                </div>
                <div>
                {/* <button onClick={this.submit} type = 'submits'>Submit</button> */}
                <button type='submit'>Submit</button>
                </div>
            </div>
        </form>
     
    )
  }
}

export default Form
