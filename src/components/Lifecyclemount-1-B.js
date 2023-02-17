import React, { Component } from 'react'

class Lifecyclemount_1 extends Component {

    //1. constructor
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'sai'
      }
      console.log('LifecycleB constructor')
    }
    //2. static
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle B gets derived from props')
        return null
    }
    
    // 4. component did mount
    componentDidMount(){
        console.log('LifeCycle B componentDidMount')
    }


     // component updating
    //1. Get Derived state from props 
    //2. Should component update 
    //3. Render Method
    //4. getsnapshot before update
    //5. Component did update method
    // Render and componentDidUpdate are most commonly used rest are used in special cases.

    //2. 
    shouldComponentUpdate(){
        console.log('LifeCycle B Should component Update')
        return true
    }

    //4.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle B getSnapshotBeforeUpdate')
        return null
    }

    //5.
    componentDidUpdate(){
        console.log('Lifecycle B componentDidUpdate')
    }
    
  render() {
    console.log('LifeCycle B Rendered')
    return (
      <div>
        Lifecycle B
        {/* //3. render */}
      </div>
    )
  }
}

export default Lifecyclemount_1
