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

            this.userService.getUsers().then(users => {
                if (id === -1) {
                    this.isNewUser = true;
                    this.user = new User(users.length + 1, '', '', '', '', 0);
                } else {
                    this.isNewUser = false;
                    for (let user of users) {
                        if (user.userId === id) {
                            this.user = user;
                            break;
                        }
                    }
                }
            });
        });
    }

    submitted = false;
    onSubmit() { this.submitted = true; }

    updateUser(): void {

        this.userService.updateUser(this.user)
            .then(() => {
                this.router.navigateByUrl("/dashboard");
            }
            );

    }

    addUser(): void {
        this.userService.addUser(this.user)
        .then(()=>{
            this.router.navigateByUrl("/dashboard");
        });
        
    }
    
    cancel(): void {
        this.router.navigateByUrl("/dashboard");
    }
}
