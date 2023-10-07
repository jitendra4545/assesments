import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import {
  BiRightArrow,
  BiSolidDownArrow,
  BiGitPullRequest,
} from "react-icons/bi";
import { BsPlus, BsGithub } from "react-icons/bs";
import { GoIssueOpened, GoCodespaces } from "react-icons/go";

const NavBar = () => {
  return (
    <div className="border-b-2   border-b-slate-600 flex justify-between items-center py-3 px-4 bg-[#010409] text-white">
      <div className=" flex items-center gap-4">
        <button className="border border-slate-500 p-[7px] rounded-md text-slate-500">
          <GiHamburgerMenu />
        </button>
        <div className=" text-3xl">

          <BsGithub />
        </div>
       
        <button className="hover:bg-slate-900 px-3 rounded-md py-2">Dashboard</button>
      </div>
      {/* 2nd part */}
      <div className=' flex items-center gap-3 text-slate-500 '>
        <div className="flex content-center items-center border border-slate-500 gap-3 rounded-md px-2 py-1 cursor-pointer">
          <BiSearch />
          <input type="text" placeholder="Type / to search" className="bg-[#010409] cursor-pointer " />
          <p >|</p>
          <BiRightArrow />
        </div>
        <p>|</p>
        <div className="hover:bg-slate-900  flex items-center gap-2 cursor-pointer border border-slate-500 p-[7px] rounded-md text-slate-500">
          <div className="text-lg">

            <BsPlus />
          </div>
          <div className="text-xs">

            <BiSolidDownArrow />
          </div>
        </div>
        <button className=" hover:bg-slate-900  cursor-pointer border border-slate-500 p-[7px] rounded-md text-slate-500">
          <GoIssueOpened />
        </button>
        <button className=" hover:bg-slate-900  cursor-pointer border border-slate-500 p-[7px] rounded-md text-slate-500">
          <BiGitPullRequest />
        </button>
        <button className="hover:bg-slate-900 cursor-pointer border border-slate-500 p-[7px] rounded-md text-slate-500">
          <GoCodespaces />
        </button>
        <img className="w-8 rounded-[50%]" src="https://avatars.githubusercontent.com/u/107980469?v=4" alt="" />
      </div>
    </div>
  );
};

export default NavBar;
