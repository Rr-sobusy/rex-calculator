import { useState } from "react";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  const removeZero = (number: string) => {
    if (number[0] === "0") {
    }
  };
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber,setSecondNumber] = useState(0)
  const handleKeyPress = (e: any) => {
    const pressedKey = e.key;
    if (/^\d$/.test(pressedKey)) {
      setFirstNumber(parseInt(firstNumber + pressedKey));
    }

    if (pressedKey === "Backspace") {
      setFirstNumber(0);
    }
  };

  const handlerClear = () => {
    setFirstNumber(0);
  };

  const handlePop = () => {
    function popString(val: number) {
      const converted = val.toString();
      let newString = converted.substring(0, converted.length - 1);
      return parseInt(newString);
    }
    if(firstNumber.toString().length === 1){
      setFirstNumber(0)
    }
    else{
      let newNum = popString(firstNumber)
      setFirstNumber(newNum)
    }
  };
  const handleNumberPress = (e:any)=>{
    setFirstNumber(e.toString());
  }
  return (
    <>
      <div className="__main-container grid justify-center items-center">
        <div className="h-[500px] w-[320px]">
          <div className="grid h-full">
            <div className="bg-[#243441] rounded-t-[15px]">
              <div className="text-white font-bold font-sans items-center mx-7 my-7 h-full rounded-lg justify-end grid">
                <h2 className="text-[26px] absolute -mt-12 justify-self-end">155</h2>
                <h5 className="relative invisible top-[85px] left-2 duration-200 text-slate-500">
                  {firstNumber}
                </h5>
                <h5 className="relative invisibl top-[42px] left-2 duration-200 text-slate-500">
                  {firstNumber}
                </h5>
                <h5 className="relative left-2 duration-200 text-slate-500">
                  {firstNumber}
                </h5>
              </div>
            </div>
            <Calculator
              handleNumberPress={handleNumberPress}
              handleClear={handlerClear}
              handleKeyPress={handleKeyPress}
              handlePop={handlePop}
            />
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
