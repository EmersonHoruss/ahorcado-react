import React from "react";
import { ModalI } from "../types/ModalI";

const Modal: React.FC<ModalI> = ({
  title,
  buttonLeftText,
  buttonLeftHandle,
  buttonRightText,
  buttonRightHandle,
}) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-slate-400 bg-opacity-20">
      <div className="w-full h-full flex justify-center items-center backdrop-blur-[1px] backdrop-filter">
        <div className="flex flex-col items-center bg-white rounded-xl p-6 gap-6">
          <h1 className="text-2xl">{title}</h1>
          <div className="flex gap-6 text-xl">
            <button onClick={buttonLeftHandle} className="px-4 py-2 border-2">
              {buttonLeftText}
            </button>
            <button onClick={buttonRightHandle} className="px-4 py-2 border-2">
              {buttonRightText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
