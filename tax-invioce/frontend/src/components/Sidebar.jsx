import React from 'react'
import { FiHome,FiShoppingCart} from 'react-icons/fi';
import {IoIosContacts} from 'react-icons/io'
import {TbTruckDelivery} from 'react-icons/tb'
import {BiCustomize} from 'react-icons/bi'
import {MdOutlineCrisisAlert} from 'react-icons/md'
import { AllRoutes } from '../pages/AllRoutes';
export const Sidebar = () => {
    return (
        <div class='border-l-rose-300  h-aut0 w-auto ' >
            <div class="flex justify-between p-1 shadow-inner " >
                <div>
                    <p class='text-4xl font-thin ' >EasyInvoice</p>
                </div>
                <div class='place-self-center w-6' ></div>
            </div>
            <div class='flex  ' >
                <div class=' bg-pink-600 w-1/5' >
                <div className="flex flex-col justify-start p-4">
          <div className="flex items-center mb-5">
            <FiHome className="text-white mr-2" />
            <a href="#" className="text-white text-lg ">Home</a>
          </div>
          {/* <h1 class='text-left' >Parties</h1> */}
          <div className="flex items-center mb-5">
            <IoIosContacts className="text-white mr-2 " />
            <a href="#" className="text-white text-lg ">Customers</a>
          </div>
          <div className="flex items-center mb-5">
            <TbTruckDelivery className="text-white mr-2 " />
            <a href="#" className="text-white text-lg ">Suppliers</a>
          </div>
          <div className="flex items-center mb-5">
            <BiCustomize className="text-white mr-2" />
            <a href="#" className="text-white text-lg ">Items</a>
          </div>
          <div className="flex items-center mb-5">
            <MdOutlineCrisisAlert className="text-white mr-2" />
            <a href="#" className="text-white text-lg ">Sales</a>
          </div>
          <div className="flex items-center mb-5">
            <FiShoppingCart className="text-white mr-2" />
            <a href="#" className="text-white text-lg ">Purchase</a>
          </div>
        </div> 
                 
                </div>
                <div class="class= bg-pink-500 w-4/5" >
hi  <AllRoutes/>
                </div>
            </div>

        </div>
    )
}
// import React from 'react';
// import { FiHome, FiInfo, FiSettings, FiMessageSquare } from 'react-icons/fi';

// const Sidebar = () => {
//   return (
//     <div className="flex">
//       <div className="w-1/4 bg-gray-800 h-screen">
//         <div className="flex flex-col justify-start p-4">
//           <div className="flex items-center mb-4">
//             <FiHome className="text-white mr-2" />
//             <a href="#" className="text-white">Home</a>
//           </div>
//           <div className="flex items-center mb-4">
//             <FiInfo className="text-white mr-2" />
//             <a href="#" className="text-white">About</a>
//           </div>
//           <div className="flex items-center mb-4">
//             <FiSettings className="text-white mr-2" />
//             <a href="#" className="text-white">Settings</a>
//           </div>
//           <div className="flex items-center mb-4">
//             <FiMessageSquare className="text-white mr-2" />
//             <a href="#" className="text-white">Messages</a>
//           </div>
//         </div>
//       </div>
//       <div className="w-3/4">
//         {/* Main content goes here */}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
