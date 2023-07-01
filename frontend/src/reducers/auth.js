import { LOGIN , START_LOADING, END_LOADING} from "../constant";

export default ((state={authData: null, isLogin: false}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case LOGIN:
            console.log(action?.data);
            return {...state, authData: action?.data, isLogin: true};
        default:
            return {...state};
    }
})