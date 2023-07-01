import { END_LOADING , GET_SOCIETY_DATA, START_LOADING } from "../constant";

export default ((state= {societyData: null, isLoading: true}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case GET_SOCIETY_DATA:
            return {...state, societyData: action.data, isLoading: false};
        default:
            return {...state};
    }
})