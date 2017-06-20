import { Action } from '@ngrx/store';
import { Request } from '../models/request';

export const   
    ADD_TIME_OFF_REQUESTS = 'ADD_TIME_OFF_REQUESTS',
    UPDATE_SELECTED_REQUEST = 'UPDATE_SELECTED_REQUEST',
    UPDATE_ADMIN_REVIEW = 'UPDATE_ADMIN_REVIEW';

var initialAppState = {
    adminReview: false
};

var cloneState = (state) => {
    return JSON.parse(JSON.stringify(state));
};

export function appState(state = initialAppState, action: Action) {
    var newState;

    switch(action.type) {

        case UPDATE_ADMIN_REVIEW:
            newState = cloneState(state);
            newState.adminReview = action.payload;
            return newState;

        default:
            return state;
    }
};

export function timeOffRequests(state: Array<Request> = [], action: Action) {
    var newState;

    switch(action.type) {
        case ADD_TIME_OFF_REQUESTS:
            return action.payload;
            
        default:
            return state;
    }
};

export function selectedTimeOffRequest(state: Request = null, action: Action) {
    switch (action.type) {
        case UPDATE_SELECTED_REQUEST:
            return action.payload;
            
        default: 
            return state;
    }
};
