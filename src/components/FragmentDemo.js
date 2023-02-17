import React from 'react'
import Fragment_Demo_columns from './Fragment_Demo_columns'

// function FragmentDemo() {
//   return (
//     <React.Fragment> 
//          <h1>
//              Fragment Demo.
//         </h1>
//         <p>describes the FragmentDemo component. </p>
//     </React.Fragment>
   
//   )
// }


// example 2.
// if we use div we can see warnings in console. so we have to use React.fragment instead of div. Here the fragments plays key role.
function FragmentDemo() {
  return (
    <React.Fragment>
      <table>
        <tbody>
            <tr>
                <Fragment_Demo_columns />
            </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}



export default FragmentDemo
