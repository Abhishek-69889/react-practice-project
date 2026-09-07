import axios from 'axios'
import { useState } from 'react';

 function  App() {
    const [data, setData] = useState([])
    async function getData(){
      localStorage.clear();
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      localStorage.setItem("user", JSON.stringify(response.data));
      let data =  localStorage.getItem("user");
      console.log(JSON.parse(data));
      setData(JSON.parse(data));
    }
  return (
    <>
      <button 
      onClick={getData}
      >Get Data</button>
      {
        data.map((user,index)=>{
          return(
            <div key={index}>
              <pre><h1>Name:-{user.name}, <span>Username:-{user.username}</span></h1></pre>
              <p>{user.website}</p>
              <p>{user.phone}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
