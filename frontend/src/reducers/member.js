import { END_LOADING, GET_MEMBERS, START_LOADING } from "../constant";

export default ((state= {memberData: [], isLoading: true}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case GET_MEMBERS:
            // console.log(action?.data);
            return {...state, memberData: action?.data, isLoading: false};
        default:
            return {...state};
    }
})