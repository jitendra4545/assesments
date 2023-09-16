import { USER_JOB_SUCCESS, USER_LOGIN_SUCCESS, USER_SIGNUP_SUCCESS } from "./actionTypes"
import axios from 'axios'


const userRegisterSuccess=()=>{
    return {
        type:USER_SIGNUP_SUCCESS
    }
}


const userLoginSuccess=(payload)=>{
    return {
        type:USER_LOGIN_SUCCESS,payload
    }
}


const userGetJobSuccess=(payload)=>{
 return {
    type:USER_JOB_SUCCESS,payload
 }
}

export const JobSearch=({Value})=>(dispatch)=>{

  

      axios.get(`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=1c600631&app_key=e4ca2c3482c42848461421865a796a17&what=${Value}`).then((res)=>{
        console.log("job",res.data.results)
        dispatch(userGetJobSuccess(res.data.results))
      }).catch(err=>console.log(err))
}





export const userSignup=({f_name,l_name,email,password})=>(dispatch)=>{
    const payload={
        f_name,
        l_name,
        email,
        password
    }  
    localStorage.setItem("user",JSON.stringify(payload))
    dispatch(userRegisterSuccess())
}


export const userLogin=({password,email})=>(dispatch)=>{
   
   let data=JSON.parse(localStorage.getItem("user"))
   console.log("asddasdassd",data.password,data.email)
   if(data.password===password && data.email===email){
    dispatch(userLoginSuccess(data))  
    alert("Login Success")
   }else{
    alert("Enter Valid Credentials")
   }
   
}
