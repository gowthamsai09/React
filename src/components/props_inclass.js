import React, { Component } from 'react';

class Welcomes extends Component{
    render() {
        const {name,heroname} = this.props
        return(
            <h1>Welcome {name} a.k.a {heroname} </h1>
        )

    }
}

export default Welcomes