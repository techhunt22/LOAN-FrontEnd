"use client";
// @ts-ignore
import { EllipsisOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";
import { SendOutlined } from "@ant-design/icons";
import { FileOutlined } from "@ant-design/icons";
import { CopyrightOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import Card from "@/components/admin/adminoption3card";
import { Switch } from "antd";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export const AddClientOption3Form = () => {
  const [letter1, setLetter1] = useState(false);
  const [letter2, setLetter2] = useState(false);
  const [dispute, setDispute] = useState(true);
  const [equifax, setEquifax] = useState(true);
  const [experian, setExperian] = useState(true);
  const [content, setContent] = useState("");
  const [transunion, setTransunion] = useState(true);
  const [same, setSame] = useState(true); // State for "Same for all bureas" radio button
  const [diff, setDiff] = useState(false); // State for "Different for each burea" radio button
  const [showDiffContent, setShowDiffContent] = useState(false); // State to show/hide additional content for "Different for each burea"

  const items: MenuProps["items"] = [
    {
      label: "Alex",
      key: "1",
    },
    {
      label: "Casidella",
      key: "2",
    },
  ];
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };


  const handleEditorChange = (content: string, editor: any) => {
    setContent(content);
    console.log(content)
  };

  const handleSameOption = () => {
    setSame(true);
    setDiff(false);
    setShowDiffContent(false); // Hide additional content when "Same for all bureas" is selected
  };

  const handleDiffOption = () => {
    setSame(false);
    setDiff(true);
    setShowDiffContent(true); // Show additional content when "Different for each burea" is selected
  };

  const onChangeLetter1 = (checked: boolean) => {
    setLetter1(checked);
    setLetter2(!checked);
    console.log(`Switch 1 to ${checked}`);
    console.log(`Switch 2 to ${!checked}`);
  };

  const onChangeLetter2 = (checked: boolean) => {
    setLetter2(checked);
    setLetter1(!checked);
    console.log(`Switch 1 to ${!checked}`);
    console.log(`Switch 2 to ${checked}`);
  };

  return (
    <>
      <section className="w-full h-full flex flex-col items-center justify-center pt-20  mb-20 ">
        <div className="w-full h-full flex flex-col items-center gap-8  justify-start  ">
          <div className="text-[#686666] flex w-6/12 items-center justify-between pt-20">
            Generate the letter to get all credit report
            <EllipsisOutlined className="text-white bg-[#1380FF] rounded-full" />
          </div>

          <div className="bg-white w-full md:w-6/12 h-full shadow-md rounded-lg flex flex-col items-center pt-10">
            <div className="w-[90%] ">
              <select
                name="name"
                id="nme"
                className="w-full h-[80px]  py-6 px-2 flex justify-center gap-10 items-center text-[#686666] border-gray-400 rounded-xl border-[1px]"
              >
                <option value="fredrick mt-2">Fredick</option>
                <option value="fredrick mt-2">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
              </select>
            </div>

            <div className="w-[90%]  flex flex-col h-full gap-2 mt-10 mb-4">
              <Card />
              <Card />
              <Card />
              <button className="w-[70%] h-[70px] self-center bg-[#F1F1F1] text-[#929292] font-semibold">
                Done
              </button>
            </div>
          </div>

          <button className="flex items-center mt-10 w-[250px] h-[50px] border-[1px] rounded-full border-[#C0C0C0] text-[#C0C0C0] justify-center gap-4">
            <StarOutlined className="text-[#1380FF] " /> When it began...
          </button>

          <div className="w-full md:w-6/12 relative h-max py-2 border-[1px] rounded-lg flex flex-col mt-10 pt-4 gap-3 items-center justify-start border-[#686666]">
            <h1 className="text-[#686666] text-[36px] font-bold">
              Choose Letter Type
            </h1>
            <div className="w-[90%] h-[100px] flex items-center justify-between">
              <div className="flex flex-col">
                <h1 className="text-[#686666] text-[30px] font-bold">
                  Option 1
                </h1>
                <p className="text-[24px] text-[#1380FF]">
                  Basic Dispute <ArrowRightOutlined />{" "}
                  <span className="text-[#686666] font-light text-[24px]">
                    Credit Bureas
                  </span>
                </p>
              </div>
              <div>
                <Switch checked={letter1} onChange={onChangeLetter1} />
              </div>
            </div>
            <div className="w-[90%] h-[100px] flex items-center justify-between">
              <div className="flex flex-col">
                <h1 className="text-[#686666] text-[30px] font-bold">
                  Option 2
                </h1>
                <p className="text-[24px] text-[#1380FF]">
                  Higher Dispute <ArrowRightOutlined />{" "}
                  <span className="text-[#686666] font-light text-[24px]">
                    All Other Letters
                  </span>
                </p>
              </div>
              <div>
                <Switch checked={letter2} onChange={onChangeLetter2} />
              </div>
            </div>
            <div
              className={`w-[75%] h-max py-2 bg-white shadow-md ${
                letter2 ? "flex" : "hidden"
              } flex-col px-2 rounded-lg`}
            >
              <div className="flex gap-2">
                <p className="text-[#CCCCCC] text-[20px] font-light">
                  Choose letter Recipient
                </p>
                <p className="text-[#333333] bg-[#efefef] w-[200px] h-[30px] flex items-center">
                  Contains in only Round 2
                </p>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="credit" id="burea1" />
                <p className="text-[#686666] text-[20px]">Credit Burea</p>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="credit" id="burea2" />
                <p className="text-[#686666] text-[20px]">
                  Credit/Furnisher Reporting the Item
                </p>
              </div>
            </div>
            <p className="text-white text-xl bg-[#1380FF] rounded-full px-2 py-2 absolute top-[-20px] left-2">
              <SendOutlined />
            </p>
          </div>

          <div className="w-full md:w-6/12 h-full py-20 pb-4   flex flex-col items-center justify-center border-[#686666] border-[1px] relative rounded-lg mt-10 ">
            <h1 className="text-[#A3A3A3] text-[35px] font-bold mb-4">
              ADD YOUR DISPUTE
            </h1>

            {/* <div className="w-full h-full  overflow-x-auto overflow-y-hidden px-2">
           <div className="w-[800px] h-max pb-10 bg-white ">

              <div className="w-full flex border-b-2 font-bold">
                <p className="w-[20%] "> Creditor/Furnisher </p>
                <p className="w-[20%] ">Account</p>
                <p className="w-[15%]"> Dispute Items</p>
                <p className="w-[13%]"> Equifax </p>
                <p className="w-[13%]">Experian </p>
                <p className="w-[13%]"> TransUnion</p>
              </div>
            <div className="w-full h-full flex flex-col gap-2">
            <div className="w-full flex items-center border-b-2">
                <p className="w-[20%] "> fadfa</p>
                <p className="w-[20%] "> Equifax, Exparian, Transunion </p>
                <p className="w-[15%] "> asadasd </p>
                <p className="w-[13%] text-red-400"> Negative</p>

                <p className="w-[13%] text-red-400"> Negative</p>

                <p className="w-[13%] text-red-400 "> Negative</p>
                <button>
                <DeleteOutlined className="text-xl text-blue-400"/>
                </button>
              </div>
             
           
            </div>



            </div>
           </div> */}

            <button
              className="w-[300px] h-[50px] rounded-xl bg-[#1380FF] text-white font-bold  absolute bottom-[-10px]"
              onClick={() => {
                setDispute(!dispute);
              }}
            >
              Add Dispute Item
            </button>
            <p className="text-white bg-[#1380ff] px-2 py-2 rounded-full absolute top-[-20px] left-2">
              <FileOutlined />
            </p>
          </div>

          <div className="w-full md:w-6/12 h-[200px] flex items-center flex-col justify-start pt-4 border-[#686666] border-[1px] relative rounded-lg mt-10 ">
            <h1 className="text-[#A3A3A3] text-[35px] font-bold">
              Select The Subject Of Mail
            </h1>
            <div className="w-[90%] ">
              <select
                name="name"
                id="nme"
                className="w-full h-[80px]  py-6 px-2 flex justify-center gap-10 items-center text-[#686666] border-gray-400 rounded-xl border-[1px]"
              >
                <option value="fredrick mt-2">Fredick</option>
                <option value="fredrick mt-2">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
                <option value="fredrick">Fredick</option>
              </select>
            </div>
            <button
              className="w-[150px] h-[50px] rounded-xl text-white font-bold  absolute bottom-[-10px]"
              style={{
                background:
                  "linear-gradient(90deg, #CAF0F8 90%, #CAF0F8 39.6%)",
              }}
            >
              Next
            </button>
            <p className="text-white bg-[#1380ff] px-2 py-2 rounded-full absolute top-[-20px] left-2">
              <CopyrightOutlined />{" "}
            </p>
          </div>

          <div className="w-full md:w-6/12 h-full pb-6 rounded-lg flex flex-col items-center justify-start border-[#686666] border-[1px] relative mt-20 ">
            <h1 className="text-[#A3A3A3] text-[36px] font-bold">
              Generate Your Letter
            </h1>
            <div className="w-[95%] gap-1 flex items-center overflow-x-auto overflow-y-hidden">
              <p className="text-[#A3A3A3]  text-[16px]">
                Choose Location According To Credit Bureas :
              </p>
              <div className="w-[100px] h-[2px] bg-[#8ECAE6]" />
              <button className="w-[100px] h-[23px] bg-white text-black rounded-lg">
                EQUIFAX
              </button>
              <button className="w-[100px] h-[23px]  text-[#D9D9D9] rounded-lg">
                EXPERIAN
              </button>
              <button className="w-[100px] h-[23px]  text-[#D9D9D9] rounded-lg">
                TRANSUNION
              </button>
            </div>
            <div className="bg-[#D3D3D3] w-[95%] h-[2px] mt-2" />
            <div className="w-[95%] flex items-center h-max justify-between mt-2 px-2">
              <div className="flex items-center gap-10">
                <h1 className="text-[#A3A3A3] font-bold text-[24px]">
                  Subject :
                </h1>
                <p className="text-[#333333] text-[20px]">
                  Request Annual Credit report
                </p>
              </div>
              <div className="flex items-center text-[#434343] text-[20px] gap-4">
                <p>CC</p>
                <p>BCC</p>
              </div>
            </div>
            <div className="bg-[#D3D3D3] w-[95%] h-[2px] mt-4" />

            <div className=" flex flex-col gap-3 items-start w-[90%] text-[#737373] text-[16px] h-max">
              <Editor
                apiKey="y6a32whlujeei0aww4vumf51q4qqd2zqpwvtdqzsdik3b4ig" // Replace with your TinyMCE API key
                initialValue="<p>This is the initial content of the editor</p>"
                value={content}
                init={{
                  height: 500,
                  resize:false,
                  menubar: true,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help",
                }}
                onEditorChange={handleEditorChange}
              />
            </div>

            <div className="w-[90%] flex items-center justify-between px-2 mt-20">
              <button className="w-[200px] h-[50px] rounded-xl border-[2px] border-[#929292]">
                Save as template
              </button>
              <button className="w-[200px] h-[50px] rounded-xl  bg-[#1380FF] text-white font-bold">
                Send letter
              </button>
            </div>

            <p className="text-white bg-[#1380ff] px-2 py-2 rounded-full absolute top-[-20px] left-2">
              <MailOutlined />
            </p>
          </div>
        </div>

        <div
          className={`w-[300px] md:w-[350px] h-[500px] bg-white ml-2 flex flex-col items-center justify-center top-[140%]  md:top-[120%]  left-1 sm:left-[5%]  lg:left-[50%]   border-2  border-black ${
            dispute ? "hidden" : "absolute"
          }   `}
        >
          <h1 className="text-xl font-bold ">Add New Dispute Item</h1>
          <p>Select Credit Bureas</p>
          <div className="w-full h-full flex gap-2 ml-1">
            <div className="l w-[50%] h-full flex flex-col">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>Equifax</p>
              </div>
              <div className="flex  gap-2">
                <input type="checkbox" />
                <p>Experian</p>
              </div>
              <div className="flex  gap-2">
                <input type="checkbox" />
                <p>TransUnion</p>
              </div>
              <p>Account Number (optional)</p>
              <div className="flex  gap-2">
                <input
                  type="radio"
                  id="sameOption"
                  checked={same}
                  onChange={handleSameOption}
                />
                <p>Same for all bureas</p>
              </div>
              <div className="flex  gap-2">
                <input
                  type="radio"
                  id="diffOption"
                  checked={diff}
                  onChange={handleDiffOption}
                />
                <p>Different for each burea</p>
              </div>

              <div className={`${showDiffContent ? "hidden" : "block"}`}>
                <input
                  type="text"
                  name="account"
                  id="acc"
                  className="w-[90%] border-2 border-gray-400"
                  placeholder="Acc no"
                />
              </div>
              <div
                className={`${
                  showDiffContent ? "flex" : "hidden"
                } flex-col gap-2 mt-2`}
              >
                <input
                  type="text"
                  name="account"
                  id="acc"
                  className="w-[90%] border-2 border-gray-400"
                  placeholder="Equifax Acc no"
                />
                <input
                  type="text"
                  name="account"
                  id="acc"
                  className="w-[90%] border-2 border-gray-400"
                  placeholder="Experian Acc no"
                />
                <input
                  type="text"
                  name="account"
                  id="acc"
                  className="w-[90%] border-2 border-gray-400"
                  placeholder="TransUnion Acc no"
                />
              </div>

              <button className="w-[100px] h-[30px] bg-blue-500 mt-2 text-white">
                Next
              </button>
            </div>
            <div className="r w-[50%] h-full flex flex-col gap-4 ">
              <input
                type="text"
                name="account"
                id="acc"
                className="w-[90%] h-[40px] border-2 border-gray-400"
                placeholder="Credit/Furnisher"
              />
              <input
                type="text"
                name="account"
                id="acc"
                className="w-[90%] h-[40px] border-2 border-gray-400"
                placeholder="Reason*"
              />
              <input
                type="text"
                name="account"
                id="acc"
                className="w-[90%] h-[40px] border-2 border-gray-400"
                placeholder="Instruction"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
