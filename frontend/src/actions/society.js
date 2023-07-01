import { END_LOADING, GET_SOCIETY_DATA, START_LOADING } from "../constant";
import * as api from '../api';


export const fetch_society_data=  ()=> async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        const societyData= await api.getSocietyData();
        // console.log(upcomingData);
        dispatch({type: GET_SOCIETY_DATA, data: societyData});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}