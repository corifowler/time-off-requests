import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Request } from '../../models/request';
import { TimeOffRequestActions } from '../../actionHandlers/timeOffRequest.actions';

@Component({
  selector: 'approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent implements OnInit, OnDestroy {
	private sampleData;
	private timeOffRequestsSubscription;

	constructor(
		private _router: Router,
		private _store: Store<any>,
		private _timeOffRequestActions: TimeOffRequestActions
	) {}

	public ngOnInit() {
		this.timeOffRequestsSubscription = this._store.select('timeOffRequests').subscribe(
			requests => {
				if (requests) {
					this.sampleData = requests;
				}
			}
		)
	}

	public ngOnDestroy() {
		this.timeOffRequestsSubscription.unsubscribe();
	}

	private reviewRequest(requestId) {
		let request = this.sampleData.find(data => {
			return data.Id === requestId;
		});
		this._timeOffRequestActions.updateSelectedRequest(request);
		this._router.navigate(['/requests', requestId]);
	}
}
