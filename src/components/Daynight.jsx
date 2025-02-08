import React, { useState } from 'react'

function Daynight() {

    const [day, setDay] = useState(true); 

function changeDay(){
    setDay(!day)
    console.log(day);
}

  return (
    <>
    {console.log("Render Hua")}
    <div style={{backgroundColor: day ? "white" : "black" , color:day ? "black" : "white",  width: 200, height:200}}>    
      <h1>{day ? "Day" : "Night"}</h1>
    </div>
    <input type='button' onClick={changeDay} value={day}/>
    </>
  )
}

export default Daynight