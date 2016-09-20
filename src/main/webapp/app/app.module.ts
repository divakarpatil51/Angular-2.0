import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CategoryComponent }  from './components/category.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { CategoryService } from './shared/category.service';
import { HttpModule }    from '@angular/http';
import { DashboardComponent } from './components/dashboard.component';
import { UserDetailsFormComponent } from './components/user-details-form.component';

@NgModule({
  imports: [BrowserModule,
    RouterModule,
    HttpModule,
    routing,
    FormsModule],
  declarations: [AppComponent,
    DashboardComponent,
    UserDetailsFormComponent,
    CategoryComponent],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
