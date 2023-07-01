import  * as api from '../api';
import { END_LOADING, GET_FACULTY, START_LOADING } from '../constant';

export const fetch_faculty=  ()=> async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        let facultyData= await api.getFaculty();
        dispatch({type: GET_FACULTY, data: facultyData});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}