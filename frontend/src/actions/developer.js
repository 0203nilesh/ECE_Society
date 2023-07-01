import  * as api from '../api';
import { END_LOADING, GET_DEVELOPERS, START_LOADING } from '../constant';

export const fetch_developer=  ()=> async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        let developerData= await api.getDevelopers();
        // console.log(membersData);
        dispatch({type: GET_DEVELOPERS, data: developerData});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}