import { combineReducers } from "redux";
import member from "./member";
import events from "./events";
import developers from "./developers";
import alumni from "./alumni";
import faculty from "./faculty";
import auth from './auth';
import upcoming from './upcoming';
import society from "./society";

export default combineReducers({
    member,
    faculty,
    events,
    developers,
    alumni,
    auth,
    upcoming,
    society,
})