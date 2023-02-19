import React from 'react'

// function Forwardref() {
//   return (
//     <div>
//       <input type={'text'} ></input>
//     </div>
//   )
// }


// forwarding ref
const Forwardref = React.forwardRef((props, ref)=>{
    return(
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
})

export default Forwardref
