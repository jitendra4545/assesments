import { PiStarThin } from "react-icons/pi";


const RightCard = () => {
  return (
    <div>
      <div className="mt-4 border border-slate-500 rounded-md p-2 mr-3">
        <div>
          <p>Latest changes</p>
          <div>
            <div className="flex items-center gap-5 mt-4 text-slate-500">
              <div className="border w-2 h-2 rounded-[50%] bg-slate-400"></div>
              <p className="text-xs"> 8 hours ago</p>
            </div>
            <p className="text-sm ml-7">
              Actions – Secure deployment rollouts to
            </p>
            <p className="text-sm ml-7">
              protected environments based on select..
            </p>
          </div>
          <div>
            <div className="flex items-center gap-5 mt-4 text-slate-500">
              <div className="border w-2 h-2 rounded-[50%] bg-slate-400"></div>
              <p className="text-xs"> Yesterday</p>
            </div>
            <p className="text-sm ml-7">GitHub Actions: NODE_OPTIONS is now</p>
            <p className="text-sm ml-7">restricted from GITHUB_ENV</p>
          </div>
          <div>
            <div className="flex items-center gap-5 mt-4 text-slate-500">
              <div className="border w-2 h-2 rounded-[50%] bg-slate-400"></div>
              <p className="text-xs"> 2 hours ago</p>
            </div>
            <p className="text-sm ml-7">
              Repository Rules – insight enhancements
            </p>
          </div>
          <div>
            <div className="flex items-center gap-5 mt-4 text-slate-500">
              <div className="border w-2 h-2 rounded-[50%] bg-slate-400"></div>
              <p className="text-xs"> 2 hours ago</p>
            </div>
            <p className="text-sm ml-7">MaxMind is now a GitHub secret</p>
            <p className="text-sm ml-7">scanning partner</p>
          </div>
          <p className="text-xs text-slate-500 my-2 ml-7">View changelog →</p>
        </div>
      </div>
      {/* --------------2nd------------------ */}
      <div className="mt-4 border border-slate-500 rounded-md p-2 mr-3">
        <div>
          <p>Explore repositories</p>
          <div className="flex justify-between my-2 ">
            <div className="flex gap-2 items-center">
              <img
                className="w-4 h-4 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/6154722?s=40&v=4"
                alt=""
              />
              <p> microsoft / PowerToys</p>
            </div>
            <button className="border rounded-md px-[10px] bg-slate-800">

              <div>
                <PiStarThin />
              </div>
            </button>
          </div>
          
          <p className="text-xs text-slate-500 my-2">Windows system utilities to maximize productivity</p>
        <div className="flex gap-9">
            <div className="flex gap-2">
                <PiStarThin/>
                <p className="text-xs text-slate-500">96.9k</p>
            </div>
            <div className="flex gap-1 items-center">
                <div className="w-3 h-3 bg-[#178600] rounded-[50%]"></div>
                <p className="text-xs text-slate-500">C#</p>
         

            </div>
        </div>
        <div className="w-[100%] h-[0.5px] my-2 bg-slate-500">

        </div>
        </div>

        {/* -------------2nd (2n)-------------------------- */}
        <div>
          <p>Explore repositories</p>
          <div className="flex justify-between my-2 ">
            <div className="flex gap-2 items-center">
              <img
                className="w-4 h-4 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/5430905?s=40&v=4"
                alt=""
              />
              <p>rust-lang / rustlings</p>
            </div>
            <button className="border rounded-md px-[10px] bg-slate-800">

              <div>
                <PiStarThin />
              </div>
            </button>
          </div>
          
          <p className="text-xs text-slate-500 my-2"> Small exercises to get you used to reading and writing Rust code!</p>
        <div className="flex gap-9">
            <div className="flex gap-2">
                <PiStarThin/>
                <p className="text-xs text-slate-500">42.6k</p>
            </div>
            <div className="flex gap-1 items-center">
                <div className="w-3 h-3 bg-[#E0A98A] rounded-[50%]"></div>
                <p className="text-xs text-slate-500">Rust</p>
         

            </div>
        </div>
        <div className="w-[100%] h-[0.5px] my-2 bg-slate-500">

        </div>
        </div>
        {/* -------------2nd (2n)-------------------------- */}
        <div>
          <p>Explore repositories</p>
          <div className="flex justify-between my-2 ">
            <div className="flex gap-2 items-center">
              <img
                className="w-4 h-4 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/83768144?s=40&v=4"
                alt=""
              />
              <p>pola-rs / polars</p>
            </div>
            <button className="border rounded-md px-[10px] bg-slate-800">
              <div>
                <PiStarThin />
              </div>
            </button>
          </div>
          
          <p className="text-xs text-slate-500 my-2"> Fast multi-threaded, hybrid-out-of-core query engine focussing on DataFrame front-ends</p>
        <div className="flex gap-9">
            <div className="flex gap-2">
                <PiStarThin/>
                <p className="text-xs text-slate-500">20.7k</p>
            </div>
            <div className="flex gap-1 items-center">
                <div className="w-3 h-3 bg-[#E0A98A] rounded-[50%]"></div>
                <p className="text-xs text-slate-500">Rust</p>
         

            </div>
        </div>
      <p className="text-[#30589e] text-sm my-2">Explore more →</p>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
