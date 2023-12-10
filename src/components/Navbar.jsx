import Arrow from "../constants/Arrow";
import Logo from "../constants/Logo";

// import SellBorder from "../constants/SellIicon";
import { TiPlus } from "react-icons/ti";
import { handleLanguageToggle } from "../handleFunctions/navbarhandle";
import { StateContext } from "../App";
import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
function Navbar() {
  const Context = useContext(StateContext);
  const { state, dispatch } = Context;
  return (
    <header className="h-16 w-full bg-[#eff1f1] flex items-center justify-center sticky top-0 left-0">
      <div className="w-[90%] md:w-[95%] lg:w-[83%]  flex items-center  justify-between">
        <div className="flex items-center ">
          <div className="logo">
            <Logo />
          </div>
          <div className="hidden md:flex h-[90%] ml-3 gap-2">
            <div className="h-full w-60  py-2  flex items-center border-2 border-black px-2 rounded-[3px]">
              <IoSearch className="text-2xl" />
              <input
                type="text"
                name=""
                id=""
                className="border-none outline-none bg-transparent"
              />
              <Arrow />
            </div>
            <div className="h-[100%] py-2 bg-white px-1 flex items-center relative  border-2 border-black rounded-[3px]">
                <input type="text" name="" id="" className="w-full border-none outline-none bg-transparent lg:w-[45vw] placeholder-gray-500" placeholder="Find cars Mobile Phones and More..." />
                <div className="h-full bg-[#002f34] text-white absolute right-0 flex items-center w-[40px] justify-center">
              <IoSearch className="text-2xl" />
                </div>
            </div>
          </div>
          <div className=" ml-1 p-1">
            <div className="button flex text-sm gap-2 items-center font-semibold">
              ENGLISH
              <div
                onClick={() => handleLanguageToggle(dispatch)}
                style={{
                  rotate: state.languageToggle ? "180deg" : "0deg",
                  transition: "all .5s ease",
                }}
              >
                <Arrow />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mr-2 gap-3 items-center">
          <button className="cursor-pointer font-semibold border-b-2 border-black h-7 flex items-center">
            Login
          </button>
          <button className="cursor-pointer py-1 px-3 rounded-full bg-slate-300 flex items-center uppercase border-4 border-blue-500">
            <TiPlus className="text-lg" />
            <p>Sell</p>
          </button>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
