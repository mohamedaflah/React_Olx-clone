import Arrow from "../constants/Arrow";
import Logo from "../constants/Logo";
// import SellBorder from "../constants/SellIicon";
import { TiPlus } from "react-icons/ti";
import { handleLanguageToggle } from "../handleFunctions/navbarhandle";
import { StateContext } from "../App";
import { useContext,  useState } from "react";
import { IoArrowBack, IoSearch } from "react-icons/io5";
import LoginModal from "./LoginModal";
import { AuthenticationContext } from "../store/AuthContext";
import { FaUserAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseconfig";
import { TYPE } from "../reducers/reducer";
import { useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const Context = useContext(StateContext);
  const { state, dispatch } = Context;
  const { user, setUser } = useContext(AuthenticationContext);
  const [profile, setOpenProfile] = useState(false);
  const location = useLocation();
  const handleSell = () => {
    if (user) {
      navigate("/users/sell");
    } else {
      Context.dispatch({ type: TYPE.loginModalOpen, payload: true });
    }
  };
  return (
    <header className="h-16 w-full bg-[#eff1f1] flex items-center justify-center sticky top-0 left-0 z-20">
      {location.pathname == "/users/sell" ? 
      <div className="w-full px-10 text-2xl">
        <IoArrowBack className="cursor-pointer" onClick={()=>navigate('/')}/>
      </div>
       : ""}
      {location.pathname == "/" ? (
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
                  className="bg-transparent border-none outline-none"
                />
                <Arrow />
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
          {user && (
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
                  <div className="border-b">{user}</div>
                  <div>
                    <button
                      className="border-b border-black cursor-pointer"
                      onClick={() => {
                        signOut(auth).then(() => {
                          setUser(null);
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
            {!user && <LoginModal />}
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
