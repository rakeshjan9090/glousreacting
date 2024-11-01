import React, { useState } from "react";
import Products from "./Products";

function App() {
  var [a, b] = useState(69);
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      {/* <h1>{a}</h1> */}
      {/* <button
        onClick={() => b(a + 1)}
        className="px-3 py-1 bg-green-500 rounded-md text-xs"
      >
        Click
      </button> */}
      <Products age="25" data={{age: 25, name: "Rakesh"}}/>
    </div>
    // <div className="w-full h-screen bg-zinc-900 p-4">
    //   {/* <div className="w-44 h-32 rounded-md bg-red-600 p-5 text-white">
    //     <h3>hello kase ho</h3>
    //   </div> */}
    //   <Products />
    // </div>
  );
}

export default App;
