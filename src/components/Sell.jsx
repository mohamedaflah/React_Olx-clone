import { MdAddAPhoto } from "react-icons/md";
// import PhotoIcon from '../assets/photo.svg'
const Sell = () => {
  return (
    <div className="md:w-[80%]  mx-auto flex flex-col items-center mt-3">
      <div className="flex items-center justify-center text-2xl font-semibold uppercase ">
        <h1 className="text=center">Post Your Add</h1>
      </div>
      <div className="w-[70%]  min-h-[650px] rounded-[4px] border border-[#e0dfdf] flex flex-col mt-3">
        <div className="flex flex-col w-full gap-5 p-5 border-b border-b-[#e0dfdf]">
          <div>
            <h2 className="text-lg font-semibold uppercase">Select Category</h2>
          </div>
          <div className="text-[12px] flex gap-1 text-[#606a6c]">
            <p>Electronic & Applicance</p> <span>/</span>{" "}
            <p>TVs, video- Audio</p>
          </div>
        </div>
        <div className="py-5 px-7 border-b border-b-[#e0dfdf]">
          <div>
            <h1 className="text-lg font-semibold uppercase">
              Include Some Details
            </h1>
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="" className="mb-1 text-sm">
              Ad title *
            </label>
            <textarea
              name=""
              id=""
              className="border w-[56%] resize-none rounded-md border-[#4e5353] h-14 p-2"
            ></textarea>
            <div className="flex justify-between w-[56%] pr-1">
              <span className="text-[12px] text-[#4e5353]">
                Mention the key features of your item (e.g. brand, model, age,
                type)
              </span>
              <span className="text-[12px] text-[#4e5353]">0 / 70</span>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="" className="mb-1 text-sm">
              Description *
            </label>
            <textarea
              name=""
              id=""
              className="border w-[56%] resize-none rounded-md border-[#4e5353] h-24 p-2"
            ></textarea>
            <div className="flex justify-between w-[56%] pr-1">
              <span className="text-[12px] text-[#4e5353]">
                Include condition, features and reason for selling
              </span>
              <span className="text-[12px] text-[#4e5353]">0 / 4096</span>
            </div>
          </div>
        </div>
        <div className="py-5 px-7 border-b border-b-[#e0dfdf]">
          <div>
            <h1 className="text-lg font-semibold uppercase">Set a Price</h1>
          </div>
          <div className="flex flex-col mt-2">
            <label
              htmlFor=""
              className="mb-1 text-[13px] text-[#4e5353] font-bold"
            >
              Price *
            </label>
            <div className="border w-[56%] resize-none rounded-sm border-[#4e5353] h-11  px-2 flex items-center">
              <div className="text-[13px] border-r pr-3 border-r-[#4e5353] h-[70%] flex items-center">
                ₹
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name=""
                  className="w-[100%] px-2 border-none outline-none"
                  id=""
                  pattern="[0-9]*"
                />
              </div>
            </div>
            <span className="text-[12px] text-[#4e5353]">
              This field is mandatory
            </span>
          </div>
        </div>
        <div className="py-5 px-7 border-b border-b-[#e0dfdf]">
          <div>
            <h1 className="text-lg font-semibold uppercase">upload photo</h1>
          </div>
          <div className="flex flex-col mt-2">
            <div>
              <label
                htmlFor="image1"
                className="w-28 h-28 border border-[#4e5353] flex-col justify-center flex items-center"
              >
                <MdAddAPhoto className="text-3xl" />
                <img src="" alt="" />
                Add photo
              </label>
              <input type="file" name="" className="hidden" id="image1" />
            </div>
            <span className="text-[12px] text-[#f84353] mt-4 font-semibold">
              This field is mandatory
            </span>
          </div>
        </div>
        <div className="py-5 px-7 border-b border-b-[#e0dfdf]">
          <div>
            <h1 className="text-lg font-semibold uppercase">
              review your details
            </h1>
          </div>
          <div className="flex flex-col justify-center mt-2">
            <div className="flex gap-4">
              <div className="w-24 h-24 border rounded-full"></div>
              <div className="flex flex-col h-28 ">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name=""
                  className="w-72 h-12 border rounded-[3px] p-3 border-[#4e5353]"
                  id=""
                />
                <span className="text-[12px] text-[#4e5353] text-right">
                  8 / 30
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 px-7 border-b border-b-[#e0dfdf]">
          <div>
            <button className="p-3  bg-[#d8dfe0] rounded-md font-bold text-[#7f9799]" style={{cursor:'no-drop'}}>Post now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sell;
