import React, { use, useState } from 'react'
import { PhoneInput } from 'react-international-phone';

function ContactForm() {
    const [data, setData] = useState({txtname:"afnan", txtemail: "afnan@gmail.com", phone: "12346"});

    let handelForm = (event) => {
        event.preventDefault();
    }

    function handle(e){
        setData({...data, [e.target.name]: e.target.value});
    }

  return (
    <>
    <h1>ContactForm</h1>

    <form onSubmit={handelForm}>
        Name: <input type='text' value={data.name} onChange={handle} name='txtname' />
        Email: <input type='text' value={data.email} onChange={handle} name='txtemail' />
        <input type='submit' value="Send" />
    </form>

    </>
  )
}

export default ContactForm