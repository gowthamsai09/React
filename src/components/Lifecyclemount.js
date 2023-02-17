import React, { Component } from 'react'
import Lifecyclemount_1 from './Lifecyclemount-1-B'

class Lifecyclemount extends Component {

    //1. constructor
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'sai'
      }
      console.log('LifecycleAconstructor')
    }
    //2. static
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle A gets derived from props')
        return null
    }
    
    // 4. component did mount
    componentDidMount(){
        console.log('LifeCycle A componentDidMount')
    }
    
    // component updating
    //1. Get Derived state from props 
    //2. Should component update 
    //3. Render Method
    //4. getsnapshot before update
    //5. Component did update method

    //2. 
    shouldComponentUpdate(){
        console.log('LifeCycle A Should component Update')
        return true
    }

    //4.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle A getSnapshotBeforeUpdate')
        return null;
    }

    //5.
    componentDidUpdate(){
        console.log('Lifecycle A componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Codestages'
        })
    }
  render() {
    console.log('LifeCycle A Rendered')
    return (
      <div>
        Lifecycle A
        {/* //3. render */}
        <Lifecyclemount_1 />
        <button onClick={this.changeState}>Change State </button>
      </div>
    )
  }
}

export default Lifecyclemount
