import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {showModal ? (
        <>
          <div className="flex  justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-end p-5 rounded-t ">
                  <button
                    className="bg-transparent  float-right z-50"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 mt-[-4rem] flex-auto z-40">
                  <img src="/monitor/congrate.svg" alt="" className="flex w-[30rem] h-[20rem]" />
                </div>
                <div className="flex flex-col items-center justify-end rounded-b">
                  <p className="text-4xl text-gray-700 mt-[-2rem]">Congratulations</p>
                  <p className="text-4xl text-gray-700">on reaching this milestone!</p>
                  <p className=" text-gray-700 mt-3 mb-8">New let's complete the last step</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;