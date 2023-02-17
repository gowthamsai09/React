import React from 'react'

function Fragment_Demo_columns() {
    const items = []
  return (
    <React.Fragment>
        {
            items.map(item =>(
                <React.Fragment key ={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }

        {/* short hand syntax for react fragment is <> </> but cannot pass key attribute. */}
      <td>Name</td>
      <td>Sai</td>
    </React.Fragment>
  )
}

export default Fragment_Demo_columns
