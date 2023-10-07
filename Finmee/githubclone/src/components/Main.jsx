import LeftScrol from "./LeftScrol";
import RideSide from "./RideSide";

const Main = () => {
  return (
    <div className=" w-[75%] relative ml-[25%]  flex bg-[#0D1117]">
    {/* left slide */}
      <div className="w-[25%]   fixed top-15 h-[100vh] left-0 right-0 ">
        <LeftScrol />
      </div>
      {/* right slide */}
      <div className="w-[100%]  border flex text-white">

      <RideSide/>
      </div>
     
    </div>
  );
};

export default Main;
