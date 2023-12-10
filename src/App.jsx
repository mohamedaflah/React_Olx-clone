import { createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import { reducer } from "./reducers/reducer";
import { initialsValues } from "./reducers/initiial";
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
      </main>
    </StateContext.Provider>
  );
}

export default App;
export { StateContext };
