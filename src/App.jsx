import { createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import { reducer } from "./reducers/reducer";
import { initialsValues } from "./reducers/initiial";
import Cards from "./components/Cards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const StateContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialsValues);
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
