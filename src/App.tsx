import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <>
      <div className="__main-container grid justify-center items-center">
        <div className="h-[500px] w-[320px]">
          <div className="grid h-full">
            <div className="bg-[#243441] rounded-t-lg">randy</div>
            <Calculator />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
