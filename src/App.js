import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './components/Product';
import { useEffect, useState } from 'react';
import SinglePost from './components/SinglePost';

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response)=>{
          return response.json()
    }).then((data)=>{
          setPosts(data);
          setLoading(false);
    })
    .catch((error)=>{
        console.log(error)
    })

  },[loading])



  console.log('Render');
  
  return (
    <>
    <input type='button' value="Load Again" onClick={()=>{setLoading(true)}} /> 
      { loading ? "Loading..." : 
      <div className='row'>
       {
          posts.map((item)=>{
            return <SinglePost key={item.id} title={item.title} body={item.body} />
          })
       }
       
      </div>
      }
      </>
  );
}

export default App;
