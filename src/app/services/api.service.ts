import { Injectable } from '@angular/core';
import { Http, Headers, Jsonp, URLSearchParams } from '@angular/http';
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

    public getTimeOffRequests() : Observable<any> {
        // let params = new URLSearchParams();
        // params.set('callback', 'JSONP_CALLBACK');
        // return this._jsonp.get(this.apiBaseUrl, {search: params})
        //     .map(res => {
        //         let response = res.json();
        //         console.log('1', response);
        //     })
        //     .catch(err => {
        //         return Observable.throw(err);
        //     })

        return this._http.get(this.apiBaseUrl)
            .map(res => {
                return res.json();
            })
            .catch(err => {
                return Observable.throw(err);
            });
    }

    public getTimeOffRequest() {

    }

    public postTimeOffRequest(request): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this._http.post(this.apiBaseUrl, JSON.stringify(request), { headers })
            .map(res => {
                console.log(res.json());
                return res.json();
            })
            .catch(err => {
                return Observable.throw(err);
            });

    }

    public updateTimeOffRequest() {

    }

    public deleteTimeOffRequest() {

    }
}

