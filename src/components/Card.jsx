import { FaRegHeart } from "react-icons/fa"
// eslint-disable-next-line react/prop-types
const Card=({description,image,price})=>{
    return(
        <div className="h-64 w-64  rounded-[3px] border border-1 border-[#d4d2d3] p-1 flex flex-col gap-y-5">
        <div className="relative w-full overflow-hidden h-36 bg-slate-900">
          <div className="absolute p-1 text-xl bg-white rounded-full right-2 top-2">
            <FaRegHeart />
          </div>
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col w-full ">
          <h1 className="text-xl font-bold">
            <span>₹</span> <span>{price}</span>
          </h1>
          <h2 className="pr-1 text-sm line-clamp-1 text-[#5b5e5f]">
            {description}
          </h2>
          <div className="flex justify-between pr-1">
            <p className="text-[#6a7071] text-[12px] mt-3">
              Marine Hill, Port Blair
            </p>
            <p className="text-[#6a7071] text-[12px] mt-3 uppercase">
              Today
            </p>
            
          </div>
        </div>
      </div>
    )
}
export default Card