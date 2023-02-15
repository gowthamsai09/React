import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      {/* Passing parameters from child to parent component. */}
      <button onClick={() => props.greetHandler(`child`)}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
