import { Action } from '@ngrx/store';
import { Request } from '../models/request';

export const   
    ADD_TIME_OFF_REQUESTS = 'ADD_TIME_OFF_REQUESTS',
    UPDATE_SELECTED_REQUEST = 'UPDATE_SELECTED_REQUEST';

export const timeOffRequests = (state: Array<Request> = [], action: Action) => {
    var newState;

    switch(action.type) {
        case ADD_TIME_OFF_REQUESTS:
            return action.payload;
            
        default:
            return state;
    }
}

export const selectedTimeOffRequest = (state: Request = null, action: Action) => {
    switch (action.type) {
        case UPDATE_SELECTED_REQUEST:
            return action.payload;
            
        default: 
            return state;
    }
}

var cloneState = (state) => {
    return JSON.parse(JSON.stringify(state));
}