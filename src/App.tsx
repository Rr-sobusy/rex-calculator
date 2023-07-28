
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
 
  return (
    <>
      <div className="__main-container grid justify-center items-center">
        <div className="h-[500px] w-[320px]">
          <div className="grid h-full">
            <div className="bg-[#243441] rounded-t-[15px]">
              <div className="text-white font-bold font-sans items-center mx-7 my-7 h-full rounded-lg justify-end grid">
                <h2 className="relative top-5 text-[26px] ">155</h2>   
                <h5 className="relative bottom-2 left-4 text-slate-500">155</h5>            
              </div>
            </div>
            <Calculator />
          </div>
        </div>
        <div className="absolute bottom-1 right-10 font-fontPoppins">
          Created by <span className="font-sans underline">Rex Hernandez</span>{" "}
          {`wid lab <3.`}
        </div>
      </div>
    </>
  );
}

export default App;
