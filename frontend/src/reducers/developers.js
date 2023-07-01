import { END_LOADING, GET_DEVELOPERS , START_LOADING } from "../constant";

export default ((state= {developerData: [], isLoading: true}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case GET_DEVELOPERS:
            return {...state, developerData: action.data, isLoading: false};
        default:
            return {...state};
    }
})