import { END_LOADING, LOGIN, START_LOADING  } from "../constant";
import * as api from '../api';

export const login = (data, navigate)=>async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        const  authData=await api.login(data);
        window.alert(authData.message);
        // console.log({...authData?.data, isLogin: true});
        localStorage.setItem("user", JSON.stringify({...authData, isLogin: true}));
        dispatch({type: LOGIN, data: authData})
        navigate("/");
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}