import React from 'react'

function SinglePost(props) {
  return (
    <div className='col-sm-3'>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>
  )
}

export default SinglePost