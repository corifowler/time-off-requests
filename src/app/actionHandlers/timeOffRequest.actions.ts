import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../services/api.service';

@Injectable()
export class TimeOffRequestActions {
    constructor(
        private _apiService: ApiService
    ) {}

    public getTimeOffRequests() {
        this._apiService.getTimeOffRequests().subscribe(
            res => {
                console.log(res);
            }
        );
    }
}