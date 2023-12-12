import { MdAddAPhoto } from "react-icons/md";
import { indianStates } from "../handleFunctions/places";
import { useContext, useEffect, useRef, useState } from "react";
import { StateContext } from "../App";
// import { AuthenticationContext } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
import { PRODUCT_TYPE } from "../reducers/productrecuer";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  addDoc,
  collection,
  firestore,
  storage,
} from "../config/firebaseconfig";
// import { validateForm } from "../handleFunctions/validate";
import Loader from "./Loader";
// import PhotoIcon from '../assets/photo.svg'

const Sell = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authUser")) {
      navigate("/");
    }
  });
  const { product, setProduct } = useContext(StateContext);
  const [imgState, setImageState] = useState();
  //   const { user } = useContext(AuthenticationContext);
  const [loader,setLoader]=useState(false)
  const titleErrRef = useRef();
  const descriptionErrRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const locationRef = useRef();
  //   const nameErr = useRef();
  const { title, description, price, image, location, name } = product;
  const handleFormSubmiton = async () => {
    if(title && description && price && image && location ){
      
    setLoader(true)
    // if (validateForm(title, description, price, image, location, name)) {
      const storageRef = ref(
        storage,
        `product/${
          JSON.parse(localStorage.getItem("authUser")).uid + imgState.name
        }`
      );
      uploadBytes(storageRef, imgState)
        .then(async (snap) => {
          console.log(JSON.stringify(snap));
          const imageUrl = await getDownloadURL(storageRef);
          console.log(imageUrl);
          const productCollection = collection(firestore, "products");
          await addDoc(productCollection, {
            title,
            description,
            price,
            image: imageUrl,
            location,
            name,
            userId: JSON.parse(localStorage.getItem("authUser")).uid,
            date: Date.now(),
          });
          setLoader(false)
          navigate('/')
        })
        .catch((err) => {
          alert(`err in uploding ${err}`);
        });
    } else {
      alert("fillout all fields");
    }
};
const getButtonStyles = () => {
    const isAllFilled =
      title !== '' && name !== '' && description !== '' && location !== '' && image !== '' && price !== '';
    return {
      background: isAllFilled ? "#304c50" : "#d8dfe0",
      color: isAllFilled ? "white" : "#7f9799",
    };
  };
  return (
    <div className="md:w-[80%]  mx-auto flex flex-col items-center mt-3 ">
        {loader && <Loader/>}
      <div className="flex items-center justify-center text-2xl font-semibold uppercase ">
        <h1 className="text=center">Post Your Add</h1>
      </div>
      <div className="w-[70%]  min-h-[650px] rounded-[4px] border border-[#e0dfdf] flex flex-col mt-3">
        <div className="flex flex-col w-full gap-5 p-5 border-b border-b-[#e0dfdf]">
          <div>
            <h2 className="text-lg font-semibold uppercase">Select Category</h2>
          </div>
          <div className="text-[12px] flex gap-1 text-[#606a6c]">
            <p>Electronic & Applicance</p> <span>/</span>
            <p>TVs, video- Audio</p>
          </div>
        </div>
        <div className="py-5 px-7 border-b border-b-[#e0dfdf]">
          <div>
            <h1 className="text-lg font-semibold uppercase">
              Include Some Details
            </h1>
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="" className="mb-1 text-sm">
              Ad title *
            </label>
            <textarea
              name=""
              id=""
              value={title}
              className="border w-[56%] resize-none rounded-md border-[#4e5353] h-14 p-2"
              onChange={(e) => {
                setProduct({
                  type: PRODUCT_TYPE.setTitle,
                  payload: e.target.value,
                });
                if (e.target.value.trim().length < 10) {
                  titleErrRef.current.textContent = "Minimum length is 10";
                  titleErrRef.current.style.color = "red";
                } else {
                  titleErrRef.current.textContent = `Mention the key features of your item (e.g. brand, model, age,type)`;
                  titleErrRef.current.style.color = "#4e5353";
                }
                if (e.target.value.trim().length >= 70) {
                  titleErrRef.current.textContent = "Maximum Limit reached";
                  titleErrRef.current.style.color = "red";
                }
              }}
            ></textarea>
            <div className="flex justify-between w-[56%] pr-1">
              <span className="text-[12px] text-[#4e5353]" ref={titleErrRef}>
                Mention the key features of your item (e.g. brand, model, age,
                type)
              </span>
              <span className="text-[12px] text-[#4e5353]">
                {title.trim().length} / 70
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="" className="mb-1 text-sm">
              Description *
            </label>
            <textarea
              name=""
              value={description}
              onChange={(e) => {
                setProduct({
                  type: PRODUCT_TYPE.setDescription,
                  payload: e.target.value,
                });
                if (e.target.value.trim().length < 10) {
                  descriptionErrRef.current.textContent =
                    "at least 10 charcters";
                  descriptionErrRef.current.style.color = "red";
                } else {
                  descriptionErrRef.current.textContent = `Include condition, features and reason for selling`;
                  descriptionErrRef.current.style.color = "#4e5353";
                }
              }}
              id=""
              className="border w-[56%] resize-none rounded-md border-[#4e5353] h-24 p-2"
            ></textarea>
            <div className="flex justify-between w-[56%] pr-1">
              <span
                className="text-[12px] text-[#4e5353]"
                ref={descriptionErrRef}
              >
                Include condition, features and reason for selling
              </span>
              <span className="text-[12px] text-[#4e5353]">
                {description.trim().length} / 4096
              </span>
            </div>
          </div>
        </div>
        <div className="py-5 px-7 border-b border-b-[#e0dfdf]">
          <div>
            <h1 className="text-lg font-semibold uppercase">Set a Price</h1>
          </div>
          <div className="flex flex-col mt-2">
            <label
              htmlFor=""
              className="mb-1 text-[13px] text-[#4e5353] font-bold"
            >
              Price *
            </label>
            <div className="border w-[56%] resize-none rounded-sm border-[#4e5353] h-11  px-2 flex items-center">
              <div className="text-[13px] border-r pr-3 border-r-[#4e5353] h-[70%] flex items-center">
                ₹
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name=""
                  value={price}
                  className="w-[100%] px-2 border-none outline-none"
                  id=""
                  pattern="[0-9]*"
                  onChange={(e) => {
                    if (/^\d+$/.test(e.target.value)) {
                      setProduct({
                        type: PRODUCT_TYPE.setPrice,
                        payload: e.target.value,
                      });
                    } else {
                      setProduct({ type: PRODUCT_TYPE.setPrice, payload: "" });
                    }
                    if (e.target.value == "") {
                      priceRef.current.textContent = "This field is mandatory";
                      priceRef.style.color = "#4e5353";
                    }
                    if (Number(e.target.value) <= 0) {
                      priceRef.current.textContent =
                        "Enter only postiive values";
                      priceRef.current.style.color = "red";
                    } else {
                      priceRef.current.textContent = "Ok";
                      priceRef.style.color = "#4e5353";
                    }
                  }}
                />
              </div>
            </div>
            <span className="text-[12px] text-[#4e5353]" ref={priceRef}>
              This field is mandatory
            </span>
          </div>
        </div>
        <div className="py-5 px-7 border-b border-b-[#e0dfdf]">
          <div>
            <h1 className="text-lg font-semibold uppercase">upload photo</h1>
          </div>
          <div className="flex flex-col mt-2">
            <div>
              <label
                htmlFor="image1"
                className="w-28 h-28 border border-[#4e5353] flex-col justify-center flex items-center relative"
              >
                <MdAddAPhoto className="text-3xl" />
                <img
                  src={image}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full"
                />
                Add photo
              </label>
              <input
                type="file"
                name=""
                className="hidden"
                id="image1"
                onChange={(e) => {
                  setImageState(e.target.files[0]);
                  setProduct({
                    type: PRODUCT_TYPE.setImage,
                    payload: URL.createObjectURL(e.target.files[0]),
                  });
                }}
              />
            </div>
            <span
              className="text-[12px] text-[#f84353] mt-4 font-semibold"
              ref={imageRef}
            >
              This field is mandatory
            </span>
          </div>
        </div>
        <div className="py-5 px-7 border-b border-b-[#e0dfdf]">
          <div>
            <h1 className="text-lg font-semibold uppercase">
              Confirm your location
            </h1>
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="" className="mb-1 text-sm text-[#4e5353] ">
              State *
            </label>
            <div className="border w-[56%] resize-none rounded-[3px] border-[#4e5353] h-11  px-2 flex items-center">
              <div className="w-full">
                <select
                  name=""
                  id=""
                  className="w-full h-full p-1 bg-transparent border-none outline-none"
                  onChange={(e) =>
                    setProduct({
                      type: PRODUCT_TYPE.setLocation,
                      payload: e.target.value,
                    })
                  }
                >
                  <option value="">{location}</option>
                  {indianStates.map((state, Idx) => (
                    <option value={state} key={Idx}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <span
              className="text-[12px] text-[#f84353] mt-4 font-semibold"
              ref={locationRef}
            >
              This field is mandatory
            </span>
          </div>
        </div>
        <div className="py-5 px-7 border-b border-b-[#e0dfdf]">
          <div>
            <h1 className="text-lg font-semibold uppercase">
              review your details
            </h1>
          </div>
          <div className="flex flex-col justify-center mt-2">
            <div className="flex gap-4">
              <div className="w-24 h-24 overflow-hidden border rounded-full">
                <img src={JSON.parse(localStorage.getItem("authUser")).photoURL} alt="" className="w-full h-auto" />
              </div>
              <div className="flex flex-col h-28 ">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name=""
                  value={
                    JSON.parse(localStorage.getItem("authUser")).displayName
                  }
                  className="w-72 h-12 border rounded-[3px] p-3 border-[#4e5353]"
                  id=""
                />
                <span className="text-[12px] text-[#4e5353] text-right">
                  0 / 30
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 px-7 border-b border-b-[#e0dfdf]">
          <div>
            <button
              className="p-3 font-bold rounded-md"
              style={getButtonStyles()}
              onClick={handleFormSubmiton}
            >
              Post now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sell;
