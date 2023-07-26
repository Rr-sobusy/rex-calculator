import React from "react";

type Props = {};

const Calculator: React.FC<Props> = () => {
  return (
    <>
      <div className="__calc-mainWrapper">
        {["AC", "_", "_", "_"].map((val, key) => (
          <div key={key} className="bg-[#243441] customShadow grid justify-center items-center rounded-lg shadow-2xl grid justify-center items-center font-sans font-semibold">
            {val}
          </div>
        ))}
        {[7, 8, 9, "_"].map((val, key) => (
          <div key={key} className="bg-[#243441] text-slate-400 customShadow grid justify-center items-center rounded-lg shadow-lg">{val}</div>
        ))}
        {[4, 5, 6, "_"].map((val, key) => (
          <div key={key} className="bg-[#243441]  customShadow grid justify-center items-center rounded-lg shadow-lg">{val}</div>
        ))}
        {[1, 2, 3, "_"].map((val, key) => (
          <div key={key} className="bg-[#243441] customShadow grid justify-center items-center rounded-lg shadow-lg">{val}</div>
        ))}
        <div className="grid justify-center items-center text-slate-400 bg-[#243441] customShadow rounded-lg">0</div>
        <div className="grid justify-center items-center text-slate-400 bg-[#243441] customShadow rounded-lg">.</div>
        <div className="col-span-2 bg-blue-100">rex</div>
      </div>
    </>
  );
};

export default Calculator;
