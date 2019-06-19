import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    public config: any = {
        domain: 'http://jd.itying.com/',
    };

    constructor(public http: HttpClient) {
    }

    get<T>(url, data = {}) {
        return new Promise<T>(((resolve, reject) => {
            this.http.get(`${ this.config.domain }${ url }`, {params: data})
                .pipe(timeout(10000))
                .subscribe((response: T) => {
                    resolve(response);
                }, error => {
                    reject(error);
                });
        }));
    }
}
