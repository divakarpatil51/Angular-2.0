import { Component } from '@angular/core';
import { User }    from './../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'user-form',
  templateUrl: 'app/html/user-details-form.component.html'
})
export class UserDetailsFormComponent {
    constructor(private router: Router){};
    user : User;
    newUser: User;
//  user = new User('FirstName', 'LastName', 'Email Id');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }
  
  updateUser() : void{
      this.newUser = this.user;
      console.log("Updated user succeessfully" + this.newUser);
      let link = "";
      this.router.navigateByUrl("");
  }
}
