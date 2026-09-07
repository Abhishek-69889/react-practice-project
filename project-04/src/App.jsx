import { useState } from "react"
import Card from "./components/Card"
import axios from 'axios'


function App() {
  const [img, setImg] = useState([]);
  async function getImage(){
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=15");
    let data = response.data;
    setImg(data)
  };
  getImage();

  return (
    <>
      <div className="w-full h-screen p-2">
        <div className="w-full h-[90%] px-10 py-2  flex flex-wrap gap-2 overflow-auto">
          {
            img.map((data,idx)=>{
              return (
              <Card key={data.id} id={idx} url={data.download_url}/>     
              )
            })
          }
        </div>



        <div className="w-full h-[10%]  flex items-center justify-center gap-2 ">
          <button className="bg-yellow-500 text-black mr-2">Prev</button>
          <p>Page 4</p>
          <button className="bg-yellow-500 text-black ml-2">Next</button>
        </div>
      </div>
    </>
  )
}

export default App
