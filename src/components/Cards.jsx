
import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { StateContext } from "../App";
import { auth, collection, firestore, getDocs } from "../config/firebaseconfig";
import { PRODUCT_TYPE } from "../reducers/productrecuer";
import { onAuthStateChanged } from "firebase/auth";
import { AuthenticationContext } from "../store/AuthContext";
import Loader from "./Loader";

const Cards = () => {
  const [loader,setLoader]=useState(false)
  const {setProduct}=useContext(StateContext)
  const {setUser}=useContext(AuthenticationContext)
  useEffect(() => {
    setLoader(true);
    getDocs(collection(firestore, "products")).then((data) => {
      let d = data.docs.map((value) => value.data());
      console.log(d, "data");
      setProduct({ type: PRODUCT_TYPE.setProducts, payload: d });
    });
    onAuthStateChanged(auth, (user) => {
      console.log(` starting use ${user}`);
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setUser(user.displayName);
        localStorage.setItem("authUser", JSON.stringify(user));
      } else {
        console.log("user signout", user);
        localStorage.removeItem("authUser", JSON.stringify(user));
        setUser(null);
      }
      setLoader(false)
    });
  }, []);
  const {product}=useContext(StateContext)
  const {products}=product
  return (
    <div className="flex flex-wrap  w-[90%] md:w-[95%] lg:w-[83%] mx-auto justify-e gap-3 mt-5 px-2">
      {loader&&<Loader/>}
      {products.map((data)=>(
          <Card key={data.id} description={data.description} image={data.image} price={data.price}/>
      ))}
    </div>
  );
};
export default Cards;
