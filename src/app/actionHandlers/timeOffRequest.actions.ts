import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../services/api.service';
import { Store } from '@ngrx/store';

import { ADD_TIME_OFF_REQUESTS, UPDATE_SELECTED_REQUEST } from '../stores/timeOffRequests.store';

@Injectable()
export class TimeOffRequestActions {
    private sampleData = [
		{
			Id: 1,
			Name: "Charlie Brown",
			EmailAddress: "sample string 3",
			StartTime: "Jun 25 2017",
			EndTime: "Jun 28 2017",
			Reason: "Family vacation",
			Status: "Awaiting Approval",
			Comments: ""
		},
		{
			Id: 2,
			Name: "sample string 2",
			EmailAddress: "sample string 3",
			StartTime: "sample string 4",
			EndTime: "sample string 5",
			Reason: "sample string 6",
			Status: "Awaiting Approval",
			Comments: "sample string 8"
		}
	];

    constructor(
        private _apiService: ApiService,
        private _store: Store<any>
    ) {}

    public updateSelectedRequest(request) {
        this._store.dispatch({
            type: UPDATE_SELECTED_REQUEST,
            payload: request
        });
    }

    public getTimeOffRequests() {
        this._apiService.getTimeOffRequests().subscribe(
            res => {
                if (res) {
                   this._store.dispatch({
                        type: ADD_TIME_OFF_REQUESTS,
                        payload: res
                    }); 
                }
            },
            err => {
                console.log(err);
            }
        );
    }

    public getTimeOffRequest(requestId) {
        this._apiService.getTimeOffRequest(requestId).subscribe(
            request => {
                this._store.dispatch({
                    type: UPDATE_SELECTED_REQUEST,
                    payload: request
                });
            },
            err => {
                console.log(err);
            }
        )
    }

    public postTimeOffRequest(request) {
        this._apiService.postTimeOffRequest(request).subscribe(
            res => {
                this.getTimeOffRequests();
            },
            err => {
                console.log(err);
            }
        );
    }

    public updateTimeOffRequest(request) {
        this._apiService.updateTimeOffRequest(request).subscribe(
            res => {
                // refresh requests if successful update
                this.getTimeOffRequests();
            },
            err => {
                console.log(err);
            }
        );
    }

    public deleteTimeOffRequest(requestId) {
        this._apiService.deleteTimeOffRequest(requestId).subscribe(
            res => {

            },
            err => {
                console.log(err);
            }
        );
    }
}