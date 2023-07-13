import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/UserDetailsSlice'

export const AddUser = () => {
   
    const [data, setData] = useState({});

    
    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };


    console.log(data)


    const dispatch = useDispatch()
    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(addUser(data))
    }

    return (
        <div>
            <form style={{ display: 'grid', width: "30%", border: "2px solid green", margin: "auto" }} onSubmit={handleAdd} >
                <input placeholder='enter name' name="name" type="text" onChange={updateData} />
                <input placeholder='enter email' name="email" type="text" onChange={updateData} />
                <input placeholder='enter phone' name='phone' type="number" onChange={updateData} />
                <button >ADD</button>
            </form>
        </div>
    )
}
