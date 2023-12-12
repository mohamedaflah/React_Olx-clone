/* eslint-disable react/prop-types */
import { FcGoogle } from "react-icons/fc";
import { MdOutlinePhoneIphone } from "react-icons/md";
import D from "../assets/demo.webp";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebaseconfig";

// import { signInwithGoogle } from "../handleFunctions/googleAuth";
// import {AuthenticationContext} from '../store/AuthContext'
// import { useContext } from "react";

function DefaultModalBody({setLogin}) {
    // const {}=useContext(AuthenticationContext)
    // const navigate=useNavigate()
    const signInwithGoogle = async () => {
    
        try {
          
          signInWithPopup(auth,provider).then((data)=>{
              console.log(data.user);
              localStorage.setItem("authUser",JSON.stringify(data.user))
            //   navigate('/')
          })
        } catch (err) {
          console.log(err.message);
          alert(`err is ${err}`);
        }
      };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4">
        <img src={D} alt="" className="w-28" />
        <div className="px-4 font-medium text-center ">
          <p className="font-semibold">
            Help us becom on of the safest places to buy and sell
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 mt-5 ">
        <div className="flex items-center w-full gap-5 px-2 py-2 font-medium border-2 border-black text-1xl  rounded-[3px]">
          <MdOutlinePhoneIphone className="text-2xl" />
          <p className="font-semibold ">Continue with Phone</p>
        </div>
        <div className="flex items-center w-full gap-5 cursor-pointer px-2 py-2 font-medium border-2 border-black text-1xl  rounded-[3px]" onClick={signInwithGoogle}>
          <FcGoogle className="text-2xl" />
          <p className="text-sm text-center">Continue with Google</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-3 font-semibold">
        OR
      </div>
      <div className="flex justify-center mt-4 font-semibold">
        <span className="text-sm border-b border-black cursor-pointer" onClick={()=>setLogin(true)} >Login With Email</span>
      </div>
    </>
  );
}
export default DefaultModalBody;
