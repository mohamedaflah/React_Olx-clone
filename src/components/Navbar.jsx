import Arrow from "../constants/Arrow";
import Logo from "../constants/Logo";
// import SellBorder from "../constants/SellIicon";
import { TiPlus } from "react-icons/ti";
import { handleLanguageToggle } from "../handleFunctions/navbarhandle";
import { StateContext } from "../App";
import { useContext, useState } from "react";
import { IoArrowBack, IoSearch } from "react-icons/io5";
import LoginModal from "./LoginModal";
import { AuthenticationContext } from "../store/AuthContext";
import { FaUserAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseconfig";
import { TYPE } from "../reducers/reducer";
import { useLocation, useNavigate } from "react-router-dom";
import { BiCurrentLocation } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
function Navbar() {
  const navigate = useNavigate();
  const Context = useContext(StateContext);
  const { state, dispatch } = Context;
  const { user, setUser } = useContext(AuthenticationContext);
  const [profile, setOpenProfile] = useState(false);
  const location = useLocation();
  const [locationbox,setLocationBox]=useState(false)
  const handleSell = () => {
    if (localStorage.getItem("authUser")) {
      navigate("/users/sell");
    } else {
      Context.dispatch({ type: TYPE.loginModalOpen, payload: true });
    }
  };
  return (
    <header className="h-16 w-full bg-[#eff1f1] flex items-center justify-center sticky top-0 left-0 z-20">
      {location.pathname == "/users/sell" ? (
        <div className="w-full px-10 text-2xl">
          <IoArrowBack
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
      ) : (
        ""
      )}
      {location.pathname == "/" ? (
        <div className="w-[90%] md:w-[95%] lg:w-[83%]  flex items-center  justify-between">
          <div className="flex items-center ">
            <div className="logo">
              <Logo />
            </div>
            <div className="hidden md:flex h-[90%] ml-3 gap-2 relative">
              <div className="h-full w-60  py-2  flex items-center border-2 border-black px-2 rounded-[3px]">
                <IoSearch className="text-2xl" />
                <input
                  type="text"
                  name=""
                  readOnly
                  
                  value={"India"}
                  id=""
                  className="px-2 bg-transparent border-none outline-none"
                />
                <span onClick={()=>setLocationBox(!locationbox)} style={{rotate:locationbox?"180deg":"0deg",transition:".4s ease"}}>
                  
                <Arrow />
                </span>
                
                {locationbox&&
                <div
                  className="absolute left-0 h-64 py-2 overflow-y-auto bg-white rounded-sm loverflow-hidden w-60 top-12"
                  style={{
                    boxShadow:
                      "0 0 6px 0 rgba(0,0,0,.12),0 6px 6px 0 rgba(0,0,0,.24)",
                      transition:".4s ease"
                  }}
                >
                  <div className="flex items-center h-20 gap-2 p-2 text-blue-500 border-b">
                    <div className="text-2xl">
                      <BiCurrentLocation />
                    </div>
                    <div className="flex flex-col ">
                      <h1 className="text-[15px] font-semibold">
                        Use Current Location
                      </h1>
                      <p className="text-[13px] ">Location blocked.Check</p>
                      <p className="text-[13px] ">browser phone settings</p>
                    </div>
                  </div>
                  <div className="px-3 py-2">
                    <div>
                      <span className="text-[11px] text-[#8b9394] uppercase">
                        Popular Locations
                      </span>
                    </div>
                    <div className="flex flex-col w-full gap-2 mt-3">
                      <div className="flex items-center gap-2">
                        <div className="text-[19px] text-[#8b9394]">
                          <GrLocation />
                        </div>
                        <div className="text-[14px] capitalize">kerala</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-[19px] text-[#8b9394]">
                          <GrLocation />
                        </div>
                        <div className="text-[14px] capitalize">kerala</div>
                      </div>
                    </div>
                  </div>
                </div>
                }
              </div>
              <div className="h-[100%] py-2 bg-white px-1 flex items-center relative  border-2 border-black rounded-[3px]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full border-none outline-none bg-transparent lg:w-[45vw] placeholder-gray-500"
                  placeholder="Find cars Mobile Phones and More..."
                />
                <div className="h-full bg-[#002f34] text-white absolute right-0 flex items-center w-[40px] justify-center">
                  <IoSearch className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="p-1 ml-1 ">
              <div className="flex items-center gap-2 text-sm font-semibold button">
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
          {localStorage.getItem("authUser") && (
            <div className="flex items-center justify-start p-0 cursor-pointer text-1xl">
              <FaUserAlt />{" "}
              <div
                onClick={() => setOpenProfile(!profile)}
                style={{
                  rotate: profile ? "180deg" : "0deg",
                  transition: "0.4s ease",
                }}
              >
                <Arrow />
              </div>
              {profile && (
                <div
                  className="absolute   w-40 p-2 top-16 bg-[#494747d1] h-36  z-10 items-start justify-start"
                  style={{ transition: ".4s ease" }}
                >
                  <div className="border-b">
                    {JSON.parse(localStorage.getItem("authUser")).displayName ||
                      user}
                  </div>
                  <div>
                    <button
                      className="border-b border-black cursor-pointer"
                      onClick={() => {
                        signOut(auth).then(() => {
                          setUser(null);
                          localStorage.removeItem("authUser");
                          navigate("/");
                        });
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="flex items-center gap-3 mr-2">
            {!localStorage.getItem("authUser") && <LoginModal />}
            <button
              className="flex items-center px-3 py-1 uppercase border-4 border-blue-500 rounded-full cursor-pointer bg-slate-300"
              onClick={handleSell}
            >
              <TiPlus className="text-lg" />
              <p>Sell</p>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
export default Navbar;
