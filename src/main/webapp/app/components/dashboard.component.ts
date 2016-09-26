import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../shared/user';
import { UserService } from './../shared/user.service';
import { Subject }   from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/html/dashboard.component.html',
    providers: [UserService]
})
export class DashboardComponent implements OnInit {
    constructor(private router: Router, private userService: UserService) { };

    users: User[];
    searchedUsers: Observable<User[]>;

    private searchTerms = new Subject<string>();

    private success(users: User[]) {
        this.users = users;
    }

    ngOnInit(): void {

        this.userService.getUsers().
            then(users => this.success(users))
            .catch(() => { console.log("Error while getting users") });

        this.searchedUsers = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(text => text ? this.userService.searchUser(text) : Observable.of<User[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<User[]>([]);
            });
    }

    addUser(): void {
        let link = ['updatedetails', -1];
        this.router.navigate(link);
    }

    editUser(userId: number): void {
        let link = ['updatedetails', userId];
        this.router.navigate(link);
    }

    deleteUser(userIndex: number): void {
        this.userService.deleteUser(userIndex).then(users => this.success(users));
    }

    searchUser(text: string): void {

        //Producer for our observable event stream
        this.searchTerms.next(text);
    }
}


