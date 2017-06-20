import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeOffRequestActions } from '../../actionHandlers/timeOffRequest.actions';

@Component({
  selector: 'main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent {
    constructor(
        private _router: Router,
        private _timeOffRequestActions: TimeOffRequestActions
    ) {}

    private navigateToPage(route) {
        if (route === 'requests') {
            this._timeOffRequestActions.updateAdminView(true);
        } else {
            this._timeOffRequestActions.updateAdminView(false);
        }
        
        this._router.navigate([route]);
    }
}
