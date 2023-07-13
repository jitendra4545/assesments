import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{height:"50px",backgroundColor:"pink",display:"flex",justifyContent:"space-around"}}>
        <div>
        <Link to="/adduser"><button>ADD USER</button></Link> 
        </div>
        <div>
        <Link to="/"><button>HOME PAGE</button></Link> 

        </div>
    </div>
  )
}
