import { Component, OnInit } from '@angular/core';
import { User }    from './../shared/user';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { UserService }    from './../shared/user.service';

@Component({
    selector: 'user-form',
    templateUrl: 'app/html/user-details-form.component.html',
    providers: [UserService]
})
export class UserDetailsFormComponent implements OnInit {

    constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) { };
    user: User;
    isNewUser: boolean;
    
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            //Param is sent in form of string hence converting to number
            let id = +params['id'];

            this.userService.getUsers().then(users1 => {
                if (id === -1) {
                    this.isNewUser = true;
                    this.user = new User(users1.length + 1, '', '', '', '', 1);
                    this.user.phoneNo = 
                } else {
                    this.isNewUser = false;
                    this.userService.getUserById(id).then(user => this.user = user);
                }
            });


        });
    }

    submitted = false;
    onSubmit() { this.submitted = true; }

    updateUser(): void {

        this.userService.updateUser(this.user)
            .then(user => {
                //If using router navigation then data is not persisted using history temporarily
                //TODO - Use router.navigateByUrl for navigation
                window.history.back();
            }
            );

    }

    addUser(): void {
        this.userService.addUser(this.user);
        //        this.router.navigateByUrl("");
        window.history.back();
    }
}
