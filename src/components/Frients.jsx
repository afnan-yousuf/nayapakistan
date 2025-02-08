import React from 'react'

function Frients() {
  console.log('Frients');
  let friends = ["Fayyaz","Ebad","Rehan Sb","Tahir Aziz"];
  return (
    <>
        <ul>
            {
                friends.map((a)=>{
                   return <li>{a}</li>
                })
            }
        </ul>
    </>
  )
}

export default Frients