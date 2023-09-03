import {useNavigate} from 'react-router-dom'
import React,{useState} from 'react'
import { useQuery,useMutation, useQueryClient } from 'react-query';
import { addContact } from '../api';
export const AddContact = () => {
    const [f_name, setf_name] = useState<string>("")
    const [l_name, setl_name] = useState<string>("")
    const [status, setstatus] = useState<string>("")
const [id, setid] = useState(Date.now())
const navigate=useNavigate()
   
        // const queryClient = useQueryClient();
        // const mutation = useMutation(addContact(f_name,l_name,id,status), {
        //   onSuccess: () => {
        //     queryClient.invalidateQueries('items'); // Refresh the items list after creating
        //   },
        // });
    
      
    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        addContact(f_name,l_name,id,status).then(()=>{
navigate('/')
        })
    }
      


      console.log(f_name,l_name,status)
  return (
    <div>
        <form onSubmit={handleSubmit} className='grid w-1/4'  action="">
            <input onChange={(e)=>setf_name(e.target.value)} className=' border-2 p-2 ' placeholder='Enter First Name' type="text" />
            <input onChange={(e)=>setl_name(e.target.value)} className=' border-2 p-2 ' placeholder='Enter Last Name' type="text" />
             <input onChange={(e)=>setstatus(e.target.value)} value={'active'} name='s' type="radio" />
             <label htmlFor="">Active</label>
             <input  onChange={(e)=>setstatus(e.target.value)} value='Inactive' name='s' type="radio" />
             <label htmlFor="">InActive</label>
             <button >Submit</button>
        </form>
    </div>
  )
}
