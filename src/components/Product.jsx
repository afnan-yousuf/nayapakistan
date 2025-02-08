import React from 'react'

function Product(props) {
  return (
    <div className='col-sm-3'>
        <img src={props.image} className='img-fluid' />
        <h2 className='display-6'>{props.name}</h2>
        {
            props.sale ? <><p className='lead'>Old Price: <del>{props.price}</del> Now: {props.saleprice} </p> </>: <p className='lead'>{props.price}</p>
        }
    </div>
  )
}

export default Product