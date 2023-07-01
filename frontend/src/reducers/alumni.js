import { END_LOADING , GET_ALUMNI, START_LOADING } from "../constant";

export default ((state= {alumniData: [], isLoading: true}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case GET_ALUMNI:
            return {...state, alumniData: action.data, isLoading: false};
        default:
            return {...state};
    }
})