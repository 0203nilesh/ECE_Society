import  * as api from '../api';
import { END_LOADING, GET_EVENTS, START_LOADING } from '../constant';

export const fetch_events=  ()=> async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        let eventsData= await api.getEvents();
        // console.log(membersData);
        dispatch({type: GET_EVENTS, data: eventsData});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}
export const post_event= (data)=>async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        console.log(data);
        const eventData= await api.postEvent(data);
        // dispatch({type: GET_EVENTS, data: eventData});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}