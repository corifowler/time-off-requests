import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { TimeOffRequestActions } from '../../actionHandlers/timeOffRequest.actions';
import { Request } from '../../models/request';

@Component({
  selector: 'update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {
    private timeOffRequestSubscription;
    private validRequest: boolean;
    private validFormElements = {
        name: undefined,
        emailAddress: undefined,
        reason: undefined,
        startTime: undefined,
        endTime: undefined
    }
    private request: Request;
    private id: number;

    constructor(
        private _store: Store<any>,
        private _router: Router,
        private _route: ActivatedRoute,
        private _timeOffRequestActions: TimeOffRequestActions
    ) {}

    public ngOnInit() {
        this.id = this._route.snapshot.params['id'];
        this.timeOffRequestSubscription = this._store.select('selectedTimeOffRequest').subscribe(
            (request: Request) => {
                if (request) {
                    this.request = request;
                } else {
                    this._timeOffRequestActions.getTimeOffRequest(this.id);
                }
            }
        )
    }

    private saveRequest() {
        this.request.Status = 'Awaiting Approval';
        this.validRequest = this.validateRequest(this.request);
        if (this.validRequest) {
            this._timeOffRequestActions.updateTimeOffRequest(this.request);
        } else {
            // error messages
        }
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

    private deleteRequest() {
        this._timeOffRequestActions.deleteTimeOffRequest(this.request.Id);
    }
}
