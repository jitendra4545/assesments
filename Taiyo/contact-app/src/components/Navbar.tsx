import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
      <div className=' text-xl font-semibold flex justify-around bg-slate-700 color p-3 text-white '>
        <Link to='/'> <h3 >Contact Page</h3></Link>
        <Link to='/chart'><h3>Charts and Maps</h3></Link>
      </div>
    </div>
  )
}
