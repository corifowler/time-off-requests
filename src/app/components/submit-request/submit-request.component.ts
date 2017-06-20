import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { TimeOffRequestActions } from '../../actionHandlers/timeOffRequest.actions';
import { Request } from '../../models/request';

@Component({
  selector: 'submit-request',
  templateUrl: './submit-request.component.html',
  styleUrls: ['./submit-request.component.css']
})
export class SubmitRequestComponent implements OnInit {
    private name: string;
    private emailAddress: string;
    private startTime;
    private endTime;
    private reason: string;
    private comments: string;
    private lastId: number = 0;
    private timeOffRequestsSubscription;
    private validRequest: boolean;
    private validFormElements = {
        name: undefined,
        emailAddress: undefined,
        reason: undefined,
        startTime: undefined,
        endTime: undefined
    }

    constructor(
        private _store: Store<any>,
        private _router: Router,
        private _timeOffRequestActions: TimeOffRequestActions
    ) {}

    public ngOnInit() {
        this.timeOffRequestsSubscription = this._store.select('timeOffRequests').subscribe(
            (requests: Array<any>) => {
                this.lastId = requests.length;
            }
        );   
    }

    private submitRequest() {
        this.lastId++;
        let request = this.createRequest();
        this.validRequest = this.validateRequest(request);
        if (this.validRequest) {
            this._timeOffRequestActions.postTimeOffRequest(request);
        }
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

    private validateRequest(request): boolean {
        let dateIsValid;
        // time validation
        if (request.StartTime && request.EndTime) {
            dateIsValid = (moment(request.StartTime).isBefore(moment(request.EndTime)) || request.StartTime === request.EndTime);
        } 
        // validations - name, email address, valid dates, reason req'd
        if (request.Name && request.EmailAddress && request.Reason && dateIsValid) {
            return true;
        } else {
            // set error notifications
            this.validFormElements.name = request.Name ? true : false;
            this.validFormElements.emailAddress = request.EmailAddress ? true : false;
            this.validFormElements.reason = request.Reason ? true : false;
            this.validFormElements.startTime = (request.StartTime && dateIsValid) ? true : false;
            this.validFormElements.endTime = (request.EndTime && dateIsValid) ? true : false;
            return false;
        }
    }

    private cancelRequest() {
        this._router.navigate(['/']);
    }
}
