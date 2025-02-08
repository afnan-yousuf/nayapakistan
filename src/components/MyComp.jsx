import React, { useState } from 'react'

function MyComp() {
    const [txtname, setTxtname] = useState();
    const [error, setError] = useState(null);

    function handelChange(event){
            setTxtname(event.target.value);
            if(txtname.length < 10){
                setError(1);
            }
            else{
                setError(null)
            }
    }

  return (
    <>
        <input type='text' value={txtname} onChange={handelChange} />
        {error && <p>Error Aya Hai</p>}
    </>
    )
}
export default MyComp