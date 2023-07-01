import { END_LOADING , GET_UPCOMING, START_LOADING } from "../constant";

export default ((state= {upcomingData: [], isLoading: true}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case GET_UPCOMING:
            return {...state, upcomingData: action.data, isLoading: false};
        default:
            return {...state};
    }
})