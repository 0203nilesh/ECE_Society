import { END_LOADING, GET_UPCOMING, START_LOADING } from "../constant";
import * as api from '../api';


export const fetch_upcoming=  ()=> async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        const upcomingData= await api.getUpcoming();
        // console.log(upcomingData);
        dispatch({type: GET_UPCOMING, data: upcomingData});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}