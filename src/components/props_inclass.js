import React, { Component } from 'react';

class Welcomes extends Component{
    render() {
        const {name,heroname} = this.props
        return(
            <div>
                <h1>Welcome {name} a.k.a {heroname} </h1>
                <h2>Good morning{name} known for {heroname}</h2>
            </div>  
        )

    }
}

export default Welcomes