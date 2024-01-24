import React from "react";
import Testiminals from "./component/Testiminals";

import reviews from "./data";

const App = () => {
  return <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
    <div className="text-center items-center content-center">
      <h1 className="font-bold  text-4xl font-serif">
        Our Testimonals
      </h1>

      <div className="bg-violet-400 h-[4px] w-1/4 mt-1 mx-auto mb-5">

      </div>

      <Testiminals reviews ={reviews}/>
    </div>

  </div>;
};

export default App;
