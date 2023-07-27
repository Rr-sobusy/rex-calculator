import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <>
      <div className="__main-container grid justify-center items-center">
        <div className="h-[500px] w-[320px]">
          <div className="grid h-full">
            <div className="bg-[#243441] rounded-t-[15px]">
              <div className="bg-blue-300 mx-7 my-7 h-full rounded-lg">rex</div>
            </div>
            <Calculator />
          </div>
        </div>
        <div className="absolute bottom-5 right-10 font-fontPoppins">Created by <span className="font-sans underline">Rex Hernandez</span> {`wid lab <3.`}</div>
      </div>
    </>
  );
}

export default App;
