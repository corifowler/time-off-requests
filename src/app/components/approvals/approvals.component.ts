import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent {
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
		private _router: Router
	) {}

	private reviewRequest(requestId) {
		this._router.navigate(['/requests', requestId]);
	}
}
