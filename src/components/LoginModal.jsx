import { useState } from "react";
import { Modal } from "react-responsive-modal";
import D from '../assets/demo.webp'
import 'react-responsive-modal/styles.css';
import { MdOutlinePhoneIphone } from "react-icons/md";
const LoginModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const customStyles = {
    modal: {
      width: "400px", // Adjust the width as needed
      height:"600px"
    },
  };
  return (
    <div>
      <button onClick={onOpenModal} className="flex items-center font-semibold border-b-2 border-black cursor-pointer h-7">Login</button>
      <Modal open={open} onClose={onCloseModal} center styles={customStyles}>
        <div className="flex flex-col items-center justify-center mt-4">
            <img src={D} alt="" className="w-28" /> 
            <div className="px-4 font-medium text-center ">
              <p>Help us becom on of the safest places to buy and sell</p> 
            </div>
        </div>
        <div className="px-4 bg-red-500">
          <div className="flex items-center w-full gap-5 px-2 py-2 border-2 border-black text-1xl bg-zinc-500 ">  
          <MdOutlinePhoneIphone className='' /> <p>Continue with Phone</p>
          </div>
        </div>
        
      </Modal>
    </div>
  );
};
export default LoginModal

