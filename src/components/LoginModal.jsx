import { useContext, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import DefaultModalBody from "./defaulModal";
import LoginBody from "./LoginBody";
import { StateContext } from "../App";
import { TYPE } from "../reducers/reducer";
const LoginModal = () => {
  const {dispatch,state}=useContext(StateContext)
  const [login, setLogin] = useState(false);
  const onOpenModal = () => {
    dispatch({type:TYPE.loginModalOpen,payload:true})
  };
  const onCloseModal = () => {
    dispatch({type:TYPE.loginModalOpen,payload:false})
    setLogin(false)
  };
  const customStyles = {
    modal: {
      width: "400px", // Adjust the width as needed
      height: "600px",
    },
  };
  return (
    <div>
      <button
        onClick={onOpenModal}
        className="flex items-center font-semibold border-b-2 border-black cursor-pointer h-7"
      >
        Login
      </button>
      <Modal open={state.loginModal} onClose={onCloseModal} center styles={customStyles}>
        {!login ? (
          <DefaultModalBody setLogin={setLogin} />
        ) : (
          <LoginBody setLogin={setLogin} />
        )}
      </Modal>
    </div>
  );
};
export default LoginModal;
