import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Request } from '../../models/request';

@Component({
    selector: 'request',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit, OnDestroy {
    private selectedRequestSubscription;
    private request;

    constructor(
        private _store: Store<any>
    ) {}

    public ngOnInit() {
        this.selectedRequestSubscription = this._store.select('selectedTimeOffRequest').subscribe(
            request => {
                this.request = request;
            }
        )
    }

    public ngOnDestroy() {
        this.selectedRequestSubscription.unsubscribe();
    }
}
