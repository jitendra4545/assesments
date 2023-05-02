import React from 'react'
import { FiHome, FiShoppingCart } from 'react-icons/fi';
import { IoIosContacts } from 'react-icons/io'
import { TbTruckDelivery } from 'react-icons/tb'
import { BiCustomize } from 'react-icons/bi'
import { MdOutlineCrisisAlert } from 'react-icons/md'
import { AllRoutes } from '../pages/AllRoutes';
import { IoMdContact } from 'react-icons/io'
import { Link } from 'react-router-dom';
export const Sidebar = () => {
  return (
    <div class='  h-aut0 w-auto ' >
      <div class="flex bg-white justify-between px-4 py-2 sticky top-0 z-30 w-full shadow-xl " >
        <div>
          <p class='text-4xl font-thin ' >EasyInvoice</p>
        </div>
        <div class='place-self-center ' >
          <IoMdContact size='2.0rem' className="text-black mr-2 " />
        </div>
      </div>
      <div class='flex mt-1 ' >
        <div class=' bg-teal-600 w-1/6' >
          <div className="flex flex-col justify-start p-6">
            <div className="flex items-center mb-2 px-3 py-3  ">
              <FiHome size='1.5rem' className="text-white mr-2" />
              <Link to="/" className="text-white text-xl ">Home</Link>
            </div>
            <h1 class='text-2xl text-left font-semibold ml-3 ' >PARTIES</h1>
            <div className="flex items-center px-3 py-3 mt-2 mb-2  ">
              <IoIosContacts size='1.5rem' className="text-white mr-2  " />
              <Link to="/customer" className="text-white text-xl ">Customers</Link>
            </div>
            <div className="flex items-center px-3 py-3 mb-2">
              <TbTruckDelivery size='1.5rem' className="text-white mr-2 " />
              <Link to="/supplier" className="text-white text-xl ">Suppliers</Link>
            </div>
            <h1 class=' ml-3 text-2xl text-left font-semibold ' >INVENTORY</h1>
            <div className="flex items-center px-3 py-3 mt-2 mb-2">
              <BiCustomize size='1.5rem' className="text-white mr-2" />
              <Link to="/items" className="text-white text-xl ">Items</Link>
            </div>
            <h1 class=' ml-3 text-2xl text-left font-semibold ' >TRANSACTIONS</h1>
            <div className="flex items-center px-3 py-3 mt-2 mb-2">
              <MdOutlineCrisisAlert size='1.5rem' className="text-white mr-2" />
              <Link to="/sales" className="text-white text-xl ">Sales</Link>
            </div>
            <div className="flex items-center px-3 py-3 mb-2">
              <FiShoppingCart size='1.5rem' className="text-white mr-2" />
              <Link to="purchase" className="text-white text-xl ">Purchase</Link>
            </div>
          </div>

        </div>
        <div class="class= w-5/6 h-fit bg-slate-300" >
          <AllRoutes />
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
