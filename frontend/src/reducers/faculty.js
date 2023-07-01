import { END_LOADING, GET_FACULTY, START_LOADING } from "../constant";

export default ((state= {facultyData: [], isLoading: true}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case GET_FACULTY:
            return {...state, facultyData: action?.data, isLoading: false};
        default:
            return {...state};
    }
})