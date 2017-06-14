import { Component } from '@angular/core';

import { TimeOffRequestActions } from '../../actionHandlers/timeOffRequest.actions';

@Component({
  selector: 'submit-request',
  templateUrl: './submit-request.component.html',
  styleUrls: ['./submit-request.component.css']
})
export class SubmitRequestComponent {
    private name: string;
    private emailAddress: string;
    private startTime;
    private endTime;
    private reason: string;
    private comments: string;

    constructor(
        private _timeOffRequestActions: TimeOffRequestActions
    ) {}

    private submitRequest() {
        console.log(this.startTime, this.endTime);
        this._timeOffRequestActions.getTimeOffRequests();
    }
}
