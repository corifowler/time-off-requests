import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    private apiBaseUrl: string = `https://rstimeoff.azurewebsites.net/api/timeoffrequests`;

    constructor(
        private _http: Http
    ) {}

    public getTimeOffRequests() : Observable<any> {
        return this._http.get(this.apiBaseUrl)
            .map(res => {
                return res.json();
            })
            .catch(err => {
                return Observable.throw(err);
            });
    }

    public getTimeOffRequest(requestId) {
        return this._http.get(this.apiBaseUrl + `/${requestId}`)
            .map(res => {
                return res.json();
            })
            .catch(err => {
                return Observable.throw(err);
            });
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

    public updateTimeOffRequest(request) {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this._http.put(this.apiBaseUrl + `/${request.Id}`, JSON.stringify(request), { headers })
            .map(res => {
                return res.json();
            })
            .catch(err => {
                return Observable.throw(err);
            });
    }

    public deleteTimeOffRequest(requestId) {
        return this._http.delete(this.apiBaseUrl + `/${requestId}`)
            .map(res => {
                console.log(res.json());
                return res.json();
            })
            .catch(err => {
                return Observable.throw(err);
            })
    }
}

