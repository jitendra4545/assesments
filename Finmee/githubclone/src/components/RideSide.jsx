import { BsFilter } from "react-icons/bs";
import { PiStarThin } from "react-icons/pi";
import { BiSolidDownArrow } from "react-icons/bi";
import RightCard from "./RightCard";
import { BsGithub } from "react-icons/bs";

const RideSide = () => {
  return (
    <>
      <div className="w-[70%]    px-8 py-4 ">
      
        <div className="flex justify-between ">
          <p>Home</p>
          <div className="flex gap-2 items-center">
            <p className="text-[#0D3DD3] hover:border-b-2 border-b-[#0D3DD3]">
              Send feedback
            </p>
            <button className="flex items-center gap-2 border border-slate-500 bg-slate-800 px-4 py-1 rounded-md">
              <BsFilter />
              <p>Filter</p>
              <div>
                <p className="text-sm">8</p>
              </div>
            </button>
          </div>
        </div>
        
        <div className="border border-slate-500 rounded-md p-4 relative bg-[#161B22] mt-4">
          <div className="flex gap-2 ">
            <img
              className="w-9"
              src="https://avatars.githubusercontent.com/u/95009807?s=80&v=4"
              alt=""
            />
            <div className="flex justify-between  w-[100%]">
              <div className="flex gap-2">
                <p className="text-sm">ignitinsharma </p>
                <span className="text-sm text-slate-500">
                  made this repository public
                </span>
              </div>
              <p>...</p>
            </div>
          </div>
          
          <div className="flex gap-2 absolute top-9 left-11">
            <div className="border-2 w-4 h-4 rounded-[50%] border-gray-900">
              <img
                className="w-6"
                src="https://github.githubassets.com/images/icons/feeds/feed-public.svg"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500">4 hours ago</p>
          </div>
          
          <div className="flex justify-between px-4 py-2 ">
            <div className="flex items-center gap-2">
              <img
                className="w-4"
                src="https://avatars.githubusercontent.com/u/95009807?s=40&v=4"
                alt=""
              />
              <p className="text-sm">ignitinsharma/practice_problems</p>
            </div>
            <button className="flex items-center gap-2 border border-slate-500 py-1 bg-slate-800 px-2  rounded-md">
              <div className="text-slate-500">
                <PiStarThin />
              </div>
              <p className="text-xs ">Star</p>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm">|</p>
                  <div className="text-xs">
                    <BiSolidDownArrow />
                  </div>
                </div>
              </div>
            </button>
          </div>

         
          <div className="flex items-center gap-2 px-5 pb-3">
            <div className=" w-3 h-3 rounded-[50%] bg-orange-700"></div>
            <p className="text-xs">HTML</p>
          </div>
        </div>
        

        <div className="border border-slate-500 rounded-md p-4 relative bg-[#161B22] mt-4">
          <div className="flex gap-2 ">
            <img
              className="w-9 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/104529601?s=80&v=4"
              alt=""
            />
            <div className="flex justify-between  w-[100%]">
              <div className="flex gap-2">
                <p className="text-sm">Ujjawal0203  </p>
                <span className="text-sm text-slate-500">
                  made this repository public
                </span>
              </div>
              <p>...</p>
            </div>
          </div>
          {/* time */}
          <div className="flex gap-2 absolute top-9 left-11">
            <div className="border-2 w-4 h-4 rounded-[50%] border-gray-900">
              <img
                className="w-6"
                src="https://github.githubassets.com/images/icons/feeds/feed-public.svg"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500">11 hours ago</p>
          </div>
          {/* last */}
          <div className="flex justify-between px-4 pt-5  relative">
            <div className="flex items-center gap-2">
              <img
                className="w-11 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/104504771?s=96&v=4"
                alt=""
              />
              <div className="flex gap-2">
                <p className="text-sm">Deepak Soni</p>
                <span className="text-sm text-slate-500">Deepak-197</span>
              </div>
            </div>
            <button className="  border-slate-500  bg-slate-800 px-3  rounded-md">
              <p className="text-xs">Follow</p>
            </button>
          </div>
          <p className="text-sm mt-2 px-[12%] absolute top-24 ">
            Passionate Full-Stack Web Developer || MERN Developer
          </p>
          <div className="flex px-[12.5%] text-sm mt-2 gap-4 text-slate-500">
            <p>58 repositories </p>
            <p>116 followers</p>
          </div>
        </div>

        {/* ------------------------3rd------------------------------- */}
        <div className="border border-slate-500 rounded-md p-4 relative bg-[#161B22] mt-4">
          <div className="flex gap-2 ">
            <img
              className="w-9 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/107462443?s=80&v=4"
              alt=""
            />
            <div className="flex justify-between  w-[100%]">
              <div className="flex gap-2">
                <p className="text-sm">manojmogal007 </p>
                <span className="text-sm text-slate-500">
                followed 
1 users
                </span>
              </div>
              <p>...</p>
            </div>
          </div>
          {/* time */}
          <div className="flex gap-2 absolute top-9 left-11">
            <div className="border-2 w-4 h-4 rounded-[50%] border-gray-900">
              <img
                className="w-6"
                src="https://github.githubassets.com/images/icons/feeds/feed-public.svg"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500">11 hours ago</p>
          </div>
          {/* last */}
          <div className="flex justify-between px-4 py-2 ">
            <div className="flex items-center gap-2">
              <img
                className="w-4 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/107462443?s=40&v=4"
                alt=""
              />
              <p className="text-sm">manojmogal007/Indi.gg-quiz-app</p>
            </div>
            <button className="flex items-center gap-2 border border-slate-500 py-1 bg-slate-800 px-2  rounded-md">
              <div className="text-slate-500">
                <PiStarThin />
              </div>
              <p className="text-xs ">Star</p>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm">|</p>
                  <div className="text-xs">
                    <BiSolidDownArrow />
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* lasstt */}
          <div className="flex items-center gap-2 px-5 pb-3">
            <div className=" w-3 h-3 rounded-[50%] bg-yellow-400"></div>
            <p className="text-xs">JavaScript</p>
          </div>
        </div>
        {/* ------------------------4rd------------------------------- */}
        <div className="border border-slate-500 rounded-md p-4 relative bg-[#161B22] mt-4">
          <div className="flex gap-2 ">
            <img
              className="w-9 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/110049484?s=80&v=4"
              alt=""
            />
            <div className="flex justify-between  w-[100%]">
              <div className="flex gap-2">
                <p className="text-sm">charchit07 </p>
                <span className="text-sm text-slate-500">
                  made this repository public
                </span>
              </div>
              <p>...</p>
            </div>
          </div>
          {/* time */}
          <div className="flex gap-2 absolute top-9 left-11">
            <div className="border-2 w-4 h-4 rounded-[50%] border-gray-900">
              <img
                className="w-6"
                src="https://github.githubassets.com/images/icons/feeds/feed-public.svg"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500">11 hours ago</p>
          </div>
          {/* last */}
          <div className="flex justify-between px-4 py-2 ">
            <div className="flex items-center gap-2">
              <img
                className="w-4 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/110049484?s=80&v=4"
                alt=""
              />
              <p className="text-sm">charchit07/ntwist</p>
            </div>
            <button className="flex items-center gap-2 border border-slate-500 py-1 bg-slate-800 px-2  rounded-md">
              <div className="text-slate-500">
                <PiStarThin />
              </div>
              <p className="text-xs ">Star</p>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm">|</p>
                  <div className="text-xs">
                    <BiSolidDownArrow />
                  </div>
                </div>
              </div>
            </button>
          </div>
      
          

          {/* lasstt */}
          <div className="flex items-center gap-2 px-5 pb-3">
            <div className=" w-3 h-3 rounded-[50%] bg-[#563D7C]"></div>
            <p className="text-xs">CSS</p>
          </div>
        </div>
        {/* ---------------------6th--------------------- */}
        <div className="border border-slate-500 rounded-md p-4 relative bg-[#161B22] mt-4">
          <div className="flex gap-2 ">
            <img
              className="w-9 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/107506646?s=96&v=4"
              alt=""
            />
            <div className="flex justify-between  w-[100%]">
              <div className="flex gap-2">
                <p className="text-sm">Shikha Gupta   </p>
                <span className="text-sm text-slate-500">
                followed 
1 users
                </span>
              </div>
              <p>...</p>
            </div>
          </div>
          {/* time */}
          <div className="flex gap-2 absolute top-9 left-11">
            <div className="border-2 w-4 h-4 rounded-[50%] border-gray-900">
              <img
                className="w-6"
                src="https://github.githubassets.com/images/icons/feeds/feed-public.svg"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500">11 hours ago</p>
          </div>
          {/* last */}
          <div className="flex justify-between px-4 pt-5  relative">
            <div className="flex items-center gap-2">
              <img
                className="w-11 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/108007506?s=96&v=4"
                alt=""
              />
              <div className="flex gap-2">
                <p className="text-sm">Prince Singh </p>
                <span className="text-sm text-slate-500"> mrprincesingh</span>
              </div>
            </div>
            <button className="  border-slate-500  bg-slate-800 px-3  rounded-md">
              <p className="text-xs">Follow</p>
            </button>
          </div>
          <p className="text-sm mt-2 px-[12%] absolute top-24 ">
            Passionate Full-Stack Web Developer || MERN Developer
          </p>
          <div className="flex px-[12.5%] text-sm mt-2 gap-4 text-slate-500">
            <p>58 repositories </p>
            <p>116 followers</p>
          </div>
        </div>

        <button className="border w-[100%] mt-2 rounded-md py-1 bg-[#161B22] mt-4  text-[#2F81EA] border-slate-500">
          More
        </button>
        {/* ----------------------- */}
        <div className="flex text-xs  text-slate-500 gap-[30%] mt-3">
          <div className="flex gap-2 ">
     
            <div className="w-3">
              <BsGithub />
            </div>
            <p>@2023 Github,Inc</p>
          </div>
          <div className="flex gap-6">
            <div>
              <ul>
                <li>Blog</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
                <li>Github</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <ul>
                <li> API</li>
                <li>Training</li>
                <li>Status</li>
                <li>Security</li>
                Docs
              </ul>
            </div>
            <div>
              <ul>
                <li> Terms</li>
                <li>Privacy</li>
                <li>Docs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[35%] ">
        <RightCard />
      </div>
    </>
  );
};

export default RideSide;
