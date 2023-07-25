import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="__main-container grid justify-center items-center">
        <div className="h-[500px] w-[320px]">
          <div className="grid h-full">
            <div className="bg-[#243441] rounded-t-lg">randy</div>
            <div className="bg-white rounded-b-lg  grid grid-cols-4 gap-2 py-2 px-2">
              {["_", "_", "_", "_"].map((val, key) => (
                <div className="bg-blue-200">{val}</div>
              ))}
              {[7, 8, 9, "_"].map((val, key) => (
                <div className="bg-blue-200">{val}</div>
              ))}
              {[4, 5, 6, "_"].map((val, key) => (
                <div className="bg-blue-200">{val}</div>
              ))}
                {[1, 2, 3, "_"].map((val, key) => (
                <div className="bg-blue-200">{val}</div>
              ))}
              <div>rex</div>
              <div>rex</div>
              <div className="col-span-2 bg-blue-100">rex</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
