import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TimeOffRequestActions } from '../../actionHandlers/timeOffRequest.actions';
import { Request } from '../../models/request';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
    private adminDashboard: boolean;
    private employeeDashboard: boolean = true;
    private timeOffRequests: Array<Request>;
    private timeOffRequestsSubscription;
    private numberOfOutstandingRequests: number;

    constructor(
        private _router: Router,
        private _store: Store<any>,
        private _timeOffRequestActions: TimeOffRequestActions
    ) {}

    public ngOnInit() {
        this.timeOffRequestsSubscription = this._store.select('timeOffRequests').subscribe(
            (requests: Array<Request>) => {
                if (requests) {
                    this.timeOffRequests = requests;
                    this.numberOfOutstandingRequests = this.calculateOutstandingRequests(requests);
                }
            }
        );
    }

    public ngOnDestroy() {
        this.timeOffRequestsSubscription.unsubscribe();
    }

    private calculateOutstandingRequests(requests) {
        let filteredRequests = requests.filter(request => {
            return request.Status === 'Awaiting Approval';
        });

        return filteredRequests.length;
    }

    private goToPage(route) {
        if (route === 'admin') {
            this._timeOffRequestActions.updateAdminView(true);
            this.adminDashboard = true;
            this.employeeDashboard = false;
        } else {
            this._timeOffRequestActions.updateAdminView(false);
            this.employeeDashboard = true;
            this.adminDashboard = false;
        }

    }

    private approveRequest(requestId) {
        this._router.navigate(['/requests', requestId]);
    }

    private updateRequest(request) {
        this._timeOffRequestActions.updateSelectedRequest(request)
        this._router.navigate(['update-request', request.Id]);
    }

    private goToSubmit() {
        this._router.navigate(['submit-request']);
    }
}
