import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod, Request } from '@angular/http';
import { User } from './user'
import 'rxjs/add/operator/toPromise';

var users: User[] = [
        { userId: 1, firstName: 'aaa', lastName: 'bbb', emailId: 'aaa@b.com', address: 'ddd', phoneNo: 1234567890 },
        { userId: 2, firstName: 'aaaa', lastName: 'bbbb', emailId: 'ccc@b.com', address: 'ddd', phoneNo: 1234567890 }
];

@Injectable()
export class UserService {
    // { 'user-key': 'd235b77747ad3d2f4e587ac0740d4899' }
    private headers = new Headers({
        'user-key': 'd235b77747ad3d2f4e587ac0740d4899',
        'Access-Control-Allow-Origin': '*',
    });
    categoryUrl = 'http://localhost:8080/api/login';

    options = new RequestOptions({
        method: RequestMethod.Get,
        url: this.categoryUrl,
        headers: this.headers
    });
    req = new Request(this.options);
    constructor(private http: Http) { };

    //Remove this and get data from BE
    

    //    getCategories(): Promise<any> {
    //        return this.http.get(this.categoryUrl, this.req)
    //            .toPromise()
    //            .then(response => { response.json().data as any[] })
    //            .catch(this.handleError);
    //    }

    getUsers(): Promise<User[]> {
        return Promise.resolve(users).catch(this.handleError);
    };

    getUserById(userId: number): Promise<User> {
        return this.getUsers().then(users => users.find(user => user.userId === userId));
    }

    deleteUser(userId: number): Promise<User[]> {

        //TODO - Remove this code and Send userId to BE to delete
        return this.getUsers().then(users1 => {
            for (var i = 0; i < users1.length; i++) {
                if (userId === users1[i].userId) {
                    users1.splice(i, 1);
                    break;
                }
            }
            users = users1;
            return users1;
        });
    }

    updateUser(user: User): Promise<void> {
        return this.getUsers().then(users =>
        { 
            for(let user1 of users){
                if (user1.userId === user.userId){
                    user1 = user;
                    break; 
                }
            }
            users = users;
        })
    }
    
    addUser(user: User): void {
        users.push(user);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}