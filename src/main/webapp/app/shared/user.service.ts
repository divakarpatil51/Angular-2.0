import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './user'
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    //    private headers = new He    aders({
    //        'user-key': 'd235b77747ad3d2f4e587ac0740    d4899',
    //        'Access-Control-Allow-Origin    ': '*',
    //    });

    //    options = new RequestOption    s({
    //        method: RequestMethod.G    et,
    //        url: this.categoryU    rl,
    //        headers: this.head    ers
    //        });
    //    req = new Request(this.options);

    categoryUrl = 'http://localhost:8080/api/';

    constructor(private http: Http) { };

    getUsers(): Promise<User[]> {
        return this.http.get(this.categoryUrl + 'getusers')
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    };

    getUserById(userId: number): Promise<User> {
        return this.http.get(this.categoryUrl + 'getuser/' + userId)
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handleError);
    }

    deleteUser(userId: number): Promise<User[]> {
        return this.http.delete(this.categoryUrl + "deleteuser/" + userId)
            .toPromise()
            .then(response => response.json() as User[])
    }

    updateUser(user: User): Promise<User[]> {
        return this.http.post(this.categoryUrl + "updateuser/" + user.userId, user)
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    }

    addUser(user: User): Promise<User[]> {
        return this.http.post(this.categoryUrl + "adduser", user)
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    }
    
    searchUser(text: string): Observable<User[]> {
        return this.http.get(this.categoryUrl + `searchuser?search=${text}`)
            .map((r: Response) => r.json() as User[]);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}