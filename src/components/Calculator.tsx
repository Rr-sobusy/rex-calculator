import React from "react";
import { FaDivide, FaEquals, FaAsterisk } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
type Props = {
  handleKeyPress: any
};

const Calculator: React.FC<Props> = ({handleKeyPress}) => {
  React.useEffect(() => {
    // const handleKeyPress = (event: any) => {
    //   // Check the key that was pressed
    //   const pressedKey = event.key;
    //   if (/^\d$/.test(pressedKey)) {
    //     // Handle number key press
    //     console.log("Number key pressed:", pressedKey);
    //     // You can perform any specific actions for number keys here
    //   }
    // };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });
  return (
    <>
      <div className="__calc-mainWrapper">
        {["AC", "_", "_", <FaDivide size={15} />].map((val, key) => (
          <button
            key={key}
            className={`bg-[#243441] text-orange-500 active:scale-110 duration-200 overLine customShadow rounded-lg shadow-2xl grid justify-center cursor-pointer items-center font-sans font-semibold`}
          >
            {val}
          </button>
        ))}
        {[7, 8, 9, <FaAsterisk size={14} color="#F97316" />].map((val, key) => (
          <button
            key={key}
            className={`bg-[#243441]  text-slate-400 active:scale-110 duration-200 overLine customShadow grid justify-center cursor-pointer items-center rounded-lg shadow-lg`}
          >
            {val}
          </button>
        ))}
        {[4, 5, 6, <FiMinus size={18} color="#F97316" />].map((val, key) => (
          <button
            key={key}
            className="bg-[#243441] text-slate-400  customShadow active:scale-110 duration-200 overLine grid justify-center cursor-pointer items-center rounded-lg shadow-lg"
          >
            {val}
          </button>
        ))}
        {[1, 2, 3, <AiOutlinePlus size={20} color="#F97316" />].map(
          (val, key) => (
            <button
              key={key}
              className="bg-[#243441] text-slate-400 customShadow active:scale-110 duration-200 overLine grid justify-center cursor-pointer items-center rounded-lg shadow-lg"
            >
              {val}
            </button>
          )
        )}
        {[0, ".", <FaEquals color="#F97316" />].map((val, key) => (
          <button
            key={key}
            className={`grid justify-center ${
              key === 2 ? "col-span-2 text-orange-500" : null
            } overLine items-center active:scale-110 duration-200 text-slate-400 bg-[#243441] customShadow rounded-lg`}
          >
            {val}
          </button>
        ))}
      </div>
    </>
  );
};

export default Calculator;
