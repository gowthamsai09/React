import React from 'react'

function FunctionOnclick() {
    function clickHandler(){
        console.log("Button clicked")
    }
  return (
    <div>
      <button onClick = {clickHandler}>Click</button>
    </div>
  )
}

export default FunctionOnclick
