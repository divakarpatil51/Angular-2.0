/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/html/dashboard.component.html'
})
export class DashboardComponent {
    constructor(private router: Router){};

    openCategory(): void{
        let link = '/categories';
        this.router.navigateByUrl(link);
    }
    
    updateDetails() : void{
         let link = '/updatedetails';
        this.router.navigateByUrl(link);
    }
}


