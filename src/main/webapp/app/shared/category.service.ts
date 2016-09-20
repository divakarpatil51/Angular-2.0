import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod, Request } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {
    // { 'user-key': 'd235b77747ad3d2f4e587ac0740d4899' }
    private headers = new Headers({ 'user-key': 'd235b77747ad3d2f4e587ac0740d4899', 
    'Access-Control-Allow-Origin' : '*', });
    categoryUrl = 'http://localhost:8080/api/login';

    options = new RequestOptions({
        method: RequestMethod.Get,
        url: this.categoryUrl,
        headers: this.headers
    });
    req = new Request(this.options);
    constructor(private http: Http) { };

    getCategories(): Promise<any> {
        return this.http.get(this.categoryUrl, this.req)
            .toPromise()
            .then(response => { response.json().data as any[] })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}