import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="  w-full h-screen duration-200"style={{ backgroundColor: color }}>
      </div>
      <div className=" fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3  bg-transparent px-3 py-0 rounded-xl">
          <button className=" text-white shadow-lg outline-none px-4 py-1 bg-red-600 rounded-lg " onClick={()=>{setColor("red")}}>
            Red
          </button>
          <button className=" text-white shadow-lg outline-none px-4 py-1 bg-blue-600 rounded-lg " onClick={()=>{setColor("blue")}}>
            Blue
          </button>
          <button className=" text-white shadow-lg outline-none px-4 py-1 bg-yellow-600 rounded-lg " onClick={()=>{setColor("yellow")}}>
            Yellow
          </button>
          <button className=" text-white shadow-lg outline-none px-4 py-1 bg-orange-600 rounded-lg " onClick={()=>{setColor("orange")}}>
            Orange
          </button>
          <button className=" text-white shadow-lg outline-none px-4 py-1 bg-violet-600 rounded-lg " onClick={()=>{setColor("violet")}}>
            Violet
          </button>
          <button className=" text-white shadow-lg outline-none px-4 py-1 bg-pink-500 rounded-lg " onClick={()=>{setColor("pink")}}>
            Pink
          </button>
          <button className=" text-white shadow-lg outline-none px-4 py-1 bg-green-600 rounded-lg " onClick={()=>{setColor("green")}}>
            Green
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
