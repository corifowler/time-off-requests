import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Request } from '../../models/request';
import { TimeOffRequestActions } from '../../actionHandlers/timeOffRequest.actions';

@Component({
    selector: 'request',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit, OnDestroy {
    private requestId: string;
    private selectedRequestSubscription;
    private request;
    private statusOptions = {
        awaitingApproval: 'Awaiting Approval',
        approved: 'Approved',
        rejected: 'Rejected'
    };

    constructor(
        private _store: Store<any>,
        private _route: ActivatedRoute,
        private _timeOffRequestActions: TimeOffRequestActions
    ) {}

    public ngOnInit() {
        this.requestId = this._route.snapshot.params['id'];
        this.selectedRequestSubscription = this._store.select('selectedTimeOffRequest').subscribe(
            request => {
                if (request) {
                    this.request = request;
                } else {
                    this._timeOffRequestActions.getTimeOffRequest(this.requestId);
                }
            }
        )
    }

    public ngOnDestroy() {
        this.selectedRequestSubscription.unsubscribe();
    }

    private approveRequest() {
        this.request.Status = this.statusOptions.approved;
        this._timeOffRequestActions.updateTimeOffRequest(this.request);
    }

    private rejectRequest() {
        this.request.Status = this.statusOptions.rejected;
        this._timeOffRequestActions.updateTimeOffRequest(this.request);
    }
}
