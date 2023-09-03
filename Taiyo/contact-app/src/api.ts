
import axios,{AxiosResponse} from "axios"
import { Contact } from "./constant"
// import { ContactPage } from "./components/ContactPage"


export const addContact=async(f_name:string,l_name:string,id:number,status:string)=>{
    const payload={
    f_name,
    l_name,
    id,
    status
    }

    let res:AxiosResponse<Contact[]>=await axios.post(`https://rm-backend-mock-6.onrender.com/contact`,payload)
    return res.data
  }


  export const getContact=async()=>{
    let res:AxiosResponse<Contact[]>=await axios.get(`https://rm-backend-mock-6.onrender.com/contact`)
    return res.data
  }