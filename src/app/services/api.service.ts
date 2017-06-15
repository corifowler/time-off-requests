import { Injectable } from '@angular/core';
import { Http, Headers, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    private apiBaseUrl: string = `https://rstimeoff.azurewebsites.net/api/timeoffrequests`;

    constructor(
        private _http: Http,
        private _jsonp: Jsonp
    ) {}

    public getTimeOffRequests(): Observable<any> {
        // return this._jsonp.get(this.apiBaseUrl)
        //     .map(res => {
        //         let response = res.json();
        //         console.log('1', response);
        //     })
        //     .catch(err => {
        //         return Observable.throw(err);
        //     })

        return this._http.get(this.apiBaseUrl)
            .map(res => {
                let response = res.json();
                console.log('1', response);
            })
            .catch(err => {
                return Observable.throw(err);
            });
    }

    public getTimeOffRequest() {

    }

    public postTimeOffRequest() {

    }

    public updateTimeOffRequest() {

    }

    public deleteTimeOffRequest() {

    }
}

