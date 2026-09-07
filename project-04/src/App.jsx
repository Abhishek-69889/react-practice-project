import { useState,useEffect } from "react"
import Card from "./components/Card"
import axios from 'axios'


function App() {
  let [img, setImg] = useState([]);
  let [page, setPage] = useState(1);
  useEffect(() => {
    async function getImage(){
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=18`);
    let data = response.data;
    setImg(data)
  };
  getImage();
  }, [page])
  

  return (
    <>
      <div className="w-full h-screen p-2">
        <div className="w-full h-[92%] px-15 py-2  flex flex-wrap gap-2 overflow-auto">
          {
            img.map((data,idx)=>{
              return (
              <Card key={data.id} id={idx} url={data.download_url}/>     
              )
            })
          }
        </div>



        <div className="w-full h-[8%]  flex items-center justify-center gap-2 ">
          <button className="bg-yellow-500 text-black mr-2"
          onClick={()=>setPage(page-1)}
          >Prev</button>
          <p>Page {page}</p>
          <button className="bg-yellow-500 text-black ml-2"
          onClick={()=>setPage(page+1)}
          >Next</button>
        </div>
      </div>
    </>
  )
}

export default App
