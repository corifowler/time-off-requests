import { Component } from '@angular/core';

import { TimeOffRequestActions } from '../../actionHandlers/timeOffRequest.actions';
import { Request } from '../../models/request';

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
    private lastId: number = 0;

    constructor(
        private _timeOffRequestActions: TimeOffRequestActions
    ) {}

    private submitRequest() {
        this.lastId++;
        let request = this.createRequest();
        this._timeOffRequestActions.postTimeOffRequest(request);
    }

    private createRequest(): Request {
        let request = new Request();
        request.Id = this.lastId;
        request.Name = this.name;
        request.EmailAddress = this.emailAddress;
        request.StartTime = this.startTime;
        request.EndTime = this.endTime;
        request.Reason = this.reason;
        request.Status = 'Awaiting Approval';
        request.Comments = this.comments ? this.comments : '';
        return request;
    }
}
