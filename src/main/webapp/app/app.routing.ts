import { RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { CategoryComponent } from './components/category.component';
import { DashboardComponent } from './components/dashboard.component';
import { UserDetailsFormComponent } from './components/user-details-form.component';

const route: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'categories',
        component: CategoryComponent
    },
    {
        path: 'updatedetails',
        component: UserDetailsFormComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(route);


