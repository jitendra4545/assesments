import { USER_LOGIN_SUCCESS, USER_SIGNUP_SUCCESS } from "./actionTypes"



const intitalState={
    jobs:[],
    singleJob:[],
    apply:[],
    isAuth:false
}



export const reducer=(state=intitalState,action)=>{

    const {type,payload}=action


    switch(type){
        case USER_SIGNUP_SUCCESS:
 case USER_LOGIN_SUCCESS:{
    return {
        ...state,isAuth:true
    }
 }
        default:
            return state
    }

}