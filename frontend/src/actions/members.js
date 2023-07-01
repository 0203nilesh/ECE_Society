import  * as api from '../api';
import { END_LOADING, GET_MEMBERS, START_LOADING } from '../constant';

export const fetch_members=  ()=> async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        let membersData= await api.getMembers();
        // console.log(membersData);
        dispatch({type: GET_MEMBERS, data: membersData});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}