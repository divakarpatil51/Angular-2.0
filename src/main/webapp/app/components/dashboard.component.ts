/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../shared/user';
import { UserService } from './../shared/user.service';

//const USERS: User[] = [
//    { userId: 1, firstName: 'aaa', lastName: 'bbb', emailId: 'aaa@b.com', address: 'ddd', phoneNo: 1234567890 },
//    { userId: 2, firstName: 'aaaa', lastName: 'bbbb', emailId: 'ccc@b.com', address: 'ddd', phoneNo: 1234567890 }
//];

@Component({
    selector: 'dashboard',
    templateUrl: 'app/html/dashboard.component.html',
    providers: [UserService]
})
export class DashboardComponent implements OnInit {
    constructor(private router: Router, private userService: UserService) { };

    users: User[];

    ngOnInit(): void {
        this.userService.getUsers().
            then(users => this.users = users)
            .catch(x => { console.log("Error while getting users")});
    }

    addUser(): void {
//        $(".overlay").show(true);
        let link = ['updatedetails',-1];
        this.router.navigate(link);
    }

    editUser(userId: number): void {
        let link = ['updatedetails', userId];
        this.router.navigate(link);
    }
    
    deleteUser(userIndex: number): void {
        this.userService.deleteUser(userIndex).then(users => this.users = users);
//        this.users.splice(userIndex,1);
    }
}


