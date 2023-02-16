import React from 'react'

function ListRendering() {
    const name= ['Gowtham', 'sai','hello']
    const nameList = name.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return (
    <div>
      {
        nameList
      }
    </div>
  )
}

export default ListRendering
