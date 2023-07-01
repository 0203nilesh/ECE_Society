import { END_LOADING, GET_EVENTS, START_LOADING } from "../constant";

export default ((state= {eventData: [], isLoading: true}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case GET_EVENTS:
            return {...state, eventData: action.data, isLoading: false};
        default:
            return {...state};
    }
})