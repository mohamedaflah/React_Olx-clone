import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed z-20 w-full h-full bg-[#3c3b3b17] left-50 top-50 flex  justify-center items-center">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};
export default Loader;
