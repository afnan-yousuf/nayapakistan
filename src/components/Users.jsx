import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()
        })
        .then(data=>{
            setUsers(data)
        })
        .catch(error=>{
            console.error(error)
        })
    },[])

    function viewSingleUser(id){
       
       
            fetch('https://jsonplaceholder.typicode.com/users/'+id)
            .then(response => {
                return response.json()
            })
            .then(data=>{
                setUser(data)
            })
            .catch(error=>{
                console.error(error)
            })
       

    }


    return (
    <div>
        <h1>User List</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>View More</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item)=>{
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><input type="button" className='btn btn-success btn-sm' onClick={()=>{viewSingleUser(item.id)}} value="View" /></td>
                        </tr>
                    })
                }
            </tbody>
        </table>

        <div>
            {
                user &&
                <>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <p>{user.address.street}</p>
                    <p><a href={"http://"+user.website+""} target='_blank'>website</a> </p>
                </>
            }
        </div>
    </div>
 
)
}

export default Users

