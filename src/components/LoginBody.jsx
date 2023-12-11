/* eslint-disable react/prop-types */
import { IoArrowBack } from "react-icons/io5";
import Logo from "../constants/Logo";
function LoginBody({setLogin}) {
  return (
    <>
      <div className="cursor-pointer" onClick={()=>setLogin(false)}>
        <IoArrowBack />
      </div>
      <div className="flex items-center justify-center mt-5">
        <Logo />
      </div>
      <div className="text-center">
        <span className="font-semibold text-[20px]">
          Enter Your email to Login
        </span>
      </div>
      <div className="flex items-center justify-center mt-5 overflow-hidden">
        <input
          type="text"
          className="w-full px-2 py-2 border-2 rounded-sm placeholder-slate-400"
          placeholder="Enter Your Email"
        />
      </div>
      <div className="flex items-center justify-center mt-5 overflow-hidden">
        <input
          type="password"
          className="w-full px-2 py-2 border-2 rounded-sm placeholder-slate-400"
          placeholder="Password"
        />
      </div>
      <div className="w-full p-3 mt-5 bg-yellow-50">
        <div className="text-sm">
          If you are a new user please select any other login option from
          previous page.
        </div>
      </div>
      <div className="w-full p-2 mt-5 font-semibold text-center rounded-sm" style={{background:"#d8dfe0",cursor:"no-drop"}}>
        Next
      </div>
      <div className="text-[12px] text-center text-gray-500">
      Your email is never shared with external parties nor do we use it to spam you in any way.
      </div>
    </>
  );
}
export default LoginBody;
