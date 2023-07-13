import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../features/UserDetailsSlice'
import { useNavigate, useParams } from 'react-router-dom';

export const AddUser = () => {
   const [name, setname] = useState("")
   const [email, setemail] = useState("")
   const [phone, setphone] = useState("")
    
const {id}=useParams()

const navigate=useNavigate()
console.log(name,email,phone)
    // const updateData = (e) => {
    //     setData({
    //         ...data,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    const { users, loading } = useSelector((state) => state.app);
    console.log("final",users,id)

    useEffect(()=>{
     if(id){
       let SingleUser= users.find((el)=>el._id==id)
     console.log(SingleUser)
     setname(SingleUser.name)
     setemail(SingleUser.email)
     setphone(SingleUser.phone)
     }
    },[])

    
    const dispatch = useDispatch()


const handleUpdate=()=>{
   
    dispatch(updateUser({id,name,email,phone})).then(()=>{
        alert("user updated successfully")
        navigate("/") 
    })
}



    const handleAdd = () => {
        dispatch(addUser({name,email,phone})).then(()=>{
            alert("user added successfully")
            navigate("/") 
        })
       
    }

    return (
        <div style={{backgroundColor:"pink",height:"100vh"}} >
            <div style={{ display: 'grid', width: "30%",  margin: "auto",padding:"100px 50px",backgroundColor:"cyan"}}  >
                <input style={{padding:"10px",border:"1px solid black",marginBottom:"5px"}} placeholder='enter name' value={name}  type="text"  onChange={(e)=>setname(e.target.value)} />
                <input style={{padding:"10px",border:"1px solid black",marginBottom:"5px"}} placeholder='enter email' value={email} type="text" onChange={(e)=>setemail(e.target.value)} />
                <input style={{padding:"10px",border:"1px solid black",marginBottom:"5px"}} placeholder='enter phone' value={phone} type="number"  onChange={(e)=>setphone(e.target.value)} />
                {id?<button style={{padding:"10px",marginBottom:"5px",backgroundColor:"blue",color:"white"}} onClick={handleUpdate}>UPDATE</button>:<button style={{padding:"10px",marginBottom:"5px",backgroundColor:"blue",color:"white"}} onClick={handleAdd} >CREATE</button>}
            </div>
        </div>
    )
}
