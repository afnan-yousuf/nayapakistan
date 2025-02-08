import React from 'react'

function PrintTable(props) {
    let i = 1;
    let arr = [];
    while(i<=10){
        arr.push(i*props.a);
        i++;
    }
    
    let key = 0;
  return (
    <div>
        {
            props.a > 0 ? <h1>Print Table of {props.a} </h1> : <h1>Negative table cannot be printed</h1>
        }
        
        {
             props.a > 0 &&
            arr.map((item)=>{
                key++;
                return <p style={{color: props.color}} key={key}>{props.a} x {key} =  {item}</p>
            })
        }
    </div>
  )
}

export default PrintTable