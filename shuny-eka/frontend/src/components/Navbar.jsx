import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{height:"50px",backgroundColor:"green",display:"flex",justifyContent:"space-around"}}>
        <div>
        <Link to="/adduser"><button style={{padding:"10px",color:'white',fontWeight:"bold",}}>ADD USER</button></Link> 
        </div>
        <div>
        <Link to="/"><button style={{padding:"10px",color:'white',fontWeight:"bold",}}>HOME PAGE</button></Link> 

        </div>
    </div>
  )
}
