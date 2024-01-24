import { Suspense, createContext, lazy, useReducer } from "react";
import Navbar from "./components/Navbar";
import { reducer } from "./reducers/reducer";
import { initialsValues } from "./reducers/initiial";
const Cards = lazy(() => import("./components/Cards"));
const Sell = lazy(() => import("./components/Sell"));
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { reducerforProducts } from "./reducers/productrecuer";
import { productInitialvalues } from "./reducers/productInitial";
import Loader from "./components/Loader";
const StateContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialsValues);
  const [product, setProduct] = useReducer(
    reducerforProducts,
    productInitialvalues
  );

  const contextValues = {
    state,
    dispatch,
  };

  return (
    <StateContext.Provider
      value={{ contextValues, dispatch, state, product, setProduct }}
    >
      <main>
        {/* <div className="px-2 bg-black w-[90%] md:w-[95%] lg:w-[83%] mx-auto"> */}
        <Router>
          <Navbar />
          <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/users/sell/" element={<Sell />} />
          </Routes>
          </Suspense>
        </Router>
        {/* </div> */}
      </main>
    </StateContext.Provider>
  );
}

export default App;
export { StateContext };
