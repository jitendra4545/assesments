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

    var url = "https://jooble.org/api/";
var key = "00f7588e-56ce-4fca-aff4-08ac6bff8adf";
var params = keywords=Value

      axios.post(url + key).then((res)=>{
        console.log(res)
        dispatch(userGetJobSuccess(res.data))
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
