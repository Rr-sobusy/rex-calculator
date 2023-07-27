import React from "react";
import {FaDivide} from 'react-icons/fa'

type Props = {};

const Calculator: React.FC<Props> = () => {
  return (
    <>
      <div className="__calc-mainWrapper">
        {["AC", "_", "_", <FaDivide />].map((val, key) => (
          <button key={key} className={`bg-[#243441] text-orange-500 active:scale-110 duration-200 overLine customShadow rounded-lg shadow-2xl grid justify-center cursor-pointer items-center font-sans font-semibold`}>
            {val}
          </button>
        ))}
        {[7, 8, 9, "_"].map((val, key) => (
          <div key={key} className="bg-[#243441] text-slate-400 overLine customShadow grid justify-center cursor-pointer items-center rounded-lg shadow-lg">{val}</div>
        ))}
        {[4, 5, 6, "_"].map((val, key) => (
          <div key={key} className="bg-[#243441]  customShadow overLine grid justify-center cursor-pointer items-center rounded-lg shadow-lg">{val}</div>
        ))}
        {[1, 2, 3, "_"].map((val, key) => (
          <div key={key} className="bg-[#243441] customShadow overLine grid justify-center cursor-pointer items-center rounded-lg shadow-lg">{val}</div>
        ))}
        <div className="grid justify-center overLine items-center text-slate-400 bg-[#243441] customShadow rounded-lg">0</div>
        <div className="grid justify-center overLine items-center text-slate-400 bg-[#243441] customShadow rounded-lg">.</div>
        <div className="col-span-2 bg-blue-100">rex</div>
      </div>
    </>
  );
};

export default Calculator;
