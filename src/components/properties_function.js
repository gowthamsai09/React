import React from "react";

export const Greets = props => {
    const {name, heroname} = props
    // basic syntax
    // const {state1, state2} = this.state
return (
    <div>
         <h1>
            Hello {name} a.k.a {heroname}
            </h1>
         {/* {props.children} */}
    </div>
    )
}