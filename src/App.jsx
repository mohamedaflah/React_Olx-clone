import { createContext, useContext, useEffect, useReducer } from "react";
import Navbar from "./components/Navbar";
import { reducer } from "./reducers/reducer";
import { initialsValues } from "./reducers/initiial";
import Cards from "./components/Cards";
import { AuthenticationContext } from "./store/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebaseconfig";
import Sell from "./components/Sell";
import {reducerforProducts} from "./reducers/productrecuer";
import { productInitialvalues } from "./reducers/productInitial";
const StateContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialsValues);
  const [product,setProduct]=useReducer(reducerforProducts,productInitialvalues)
  const { setUser } = useContext(AuthenticationContext);
  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      alert(JSON.parse(localStorage.getItem('authUser')).displayName)
      if(user){
        const uid=user.uid
        console.log(uid);
        setUser(user.displayName)
        localStorage.setItem('authUser', JSON.stringify(user))
      }else{
        console.log('user signout',user);
        localStorage.removeItem('authUser', JSON.stringify(user))
        setUser(null)
      }
    })
  }, []);
  const contextValues = {
    state,
    dispatch,
  };

  return (
    <StateContext.Provider value={{contextValues,dispatch,state,product,setProduct}}>
      <main>
        {/* <div className="px-2 bg-black w-[90%] md:w-[95%] lg:w-[83%] mx-auto"> */}
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/users/sell/" element={<Sell/>}/>
          </Routes>
        </Router>
        {/* </div> */}
      </main>
    </StateContext.Provider>
  );
}

export default App;
export { StateContext };
