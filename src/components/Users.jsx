import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [isloading, setIsloading] = useState(false);

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
       
            setIsloading(true);
            fetch('https://jsonplaceholder.typicode.com/users/'+id)
            .then(response => {
                return response.json()
            })
            .then(data=>{
                setUser(data)
                setIsloading(false);
            })
            .catch(error=>{
                console.error(error)
            })
       

    }


    return (
    <div className='row'>
        <div className='col-sm-7'>
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
        </div>

        <div className='col-sm-5'>
            {
                isloading ? <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif" width="200"/> : 

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

