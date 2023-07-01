import  * as api from '../api';
import { END_LOADING, GET_ALUMNI, START_LOADING } from '../constant';

export const fetch_alumni=  ()=> async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        let alumniData= await api.getAlumni();
        // console.log(membersData);
        dispatch({type: GET_ALUMNI, data: alumniData});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}