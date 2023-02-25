import React from 'react'

function Review({data}) {
  return (
    <div> 
        {data.map((item) =>(
            <div>
                <h3>{item.name}</h3>
                <p>{item.date}</p>
                <p>{item.comments}</p>
            </div>
        ))}
    </div>
  )
}

export default Review