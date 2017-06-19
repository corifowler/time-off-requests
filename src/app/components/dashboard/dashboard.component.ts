import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeOffRequestActions } from '../../actionHandlers/timeOffRequest.actions';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    constructor(
        private _router: Router
    ) {}

    private goToPage(route) {
        this._router.navigate([route]);
    }
}
