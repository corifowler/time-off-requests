import { Component, OnInit } from '@angular/core';
import { TimeOffRequestActions } from '../../actionHandlers/timeOffRequest.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        private _timeOffRequestActions: TimeOffRequestActions
    ) {}

    public ngOnInit() {
        this._timeOffRequestActions.getTimeOffRequests();
    }
}
