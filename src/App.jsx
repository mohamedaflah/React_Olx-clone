import { createContext, useContext, useEffect, useReducer } from "react";
import Navbar from "./components/Navbar";
import { reducer } from "./reducers/reducer";
import { initialsValues } from "./reducers/initiial";
import Cards from "./components/Cards";
import { AuthenticationContext } from "./store/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebaseconfig";
const StateContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialsValues);
  const { setUser } = useContext(AuthenticationContext);
  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      if(user){
        const uid=user.uid
        console.log(uid);
        setUser(user.displayName)
      }else{
        console.log('user signout');
      }
    })
  }, []);
  const contextValues = {
    state,
    dispatch,
  };
  return (
    <StateContext.Provider value={contextValues}>
      <main>
        <Navbar />
        {/* <div className="px-2 bg-black w-[90%] md:w-[95%] lg:w-[83%] mx-auto"> */}
        <Router>
          <Routes>
            <Route path="/" element={<Cards />} />
          </Routes>
        </Router>
        {/* </div> */}
      </main>
    </StateContext.Provider>
  );
}

export default App;
export { StateContext };
